import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import {
  useGetChatHistory,
  useSendChat,
  useGetChatStream,
  useGetChatPreset,
} from "../../apis/chat";

function Chat() {
  const { data: profileInfo } = useGetChatPreset();
  console.log("정보", profileInfo);
  const { data: chatList = [], isLoading, error } = useGetChatHistory();

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [streamedMessage, setStreamedMessage] = useState(null); // 실시간 메시지 표시용

  const scrollRef = useRef(null);

  const sendChatMutation = useSendChat({
    onMutate: () => setLoading(true),
    onSuccess: (data) => {
      setInput("");
      setSessionId(data.sessionId);
    },
    onError: () => {
      alert("메시지 전송에 실패했어요.");
    },
    onSettled: () => setLoading(false),
  });

  const { data: chatStreamData } = useGetChatStream(sessionId, {
    enabled: !!sessionId,
  });

  // chatStreamData가 도착하면 실시간 메시지로 반영
  useEffect(() => {
    if (chatStreamData?.content) {
      setStreamedMessage({
        role: "assistant",
        content: chatStreamData.content,
      });
    }
  }, [chatStreamData]);

  // 채팅 추가될 때마다 자동 스크롤
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatList, streamedMessage, loading]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    sendChatMutation.mutate({ message: input });
  };

  return (
    <Wrapper>
      <Header pageName={profileInfo.name} nav="/ai-profile" />

      <ScrollArea>
        {isLoading && <LoadingBox>로딩 중...</LoadingBox>}
        {error && <LoadingBox>에러가 발생했어요!</LoadingBox>}

        {[...(chatList.history || [])]
          .reverse()
          .map(({ role, content }, idx) => (
            <BubbleBox key={idx} my={role === "user"}>
              {role === "assistant" && (
                <ProfileImage src={profileInfo.profile} />
              )}
              <MessageBubble my={role === "user"}>{content}</MessageBubble>
            </BubbleBox>
          ))}

        {/* 실시간으로 표시될 assistant 메시지 */}
        {streamedMessage && (
          <BubbleBox my={false}>
            <ProfileImage src={profileInfo.profile} />
            <MessageBubble my={false}>{streamedMessage.content}</MessageBubble>
          </BubbleBox>
        )}

        {loading && (
          <BubbleBox my={false}>
            <ProfileImage src={profileInfo.profile} />
            <MessageBubble my={false}>답변 생성 중...</MessageBubble>
          </BubbleBox>
        )}

        {/* 스크롤 유지용 빈 div */}
        <div ref={scrollRef} />
      </ScrollArea>

      <InputBox>
        <Input>
          <TextInput
            placeholder="메시지 입력..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SendButton disabled={loading} onClick={handleSendMessage}>
            보내기
          </SendButton>
        </Input>
      </InputBox>
    </Wrapper>
  );
}

export default Chat;

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ccc;
`;

const Input = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #d4d4d8;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  overflow: hidden;
  background-color: white;
`;

const TextInput = styled.input`
  padding: 12px 20px;
  width: 100%;
  font-size: 16px;
  &::placeholder {
    color: #a1a1aa;
  }
`;

const SendButton = styled.button`
  padding: 12px 20px;
  display: flex;
  font-weight: 600;
  color: #4f78ff;
  font-size: 16px;
  white-space: nowrap;
  background-color: #fff;
  cursor: pointer;
`;

const BubbleBox = styled.div`
  width: 100%;
  justify-content: ${({ my }) => (my ? "flex-end" : "flex-start")};
  align-items: flex-end;
  gap: 8px;
  display: flex;
`;

const MessageBubble = styled.div`
  display: flex;
  background-color: ${({ my }) => (my ? "#4f78ff" : "#eeeeee")};
  width: fit-content;
  border-radius: ${({ my }) => (my ? "16px 16px 4px" : "16px 16px 16px 4px")};
  padding: 8px 20px;
  color: ${({ my }) => (my ? "#fff" : "#3F3F46")};
  max-width: 262px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 64px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 32px;
  height: 32px;
`;
