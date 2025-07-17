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
  const { data: chatList = {}, isLoading, error } = useGetChatHistory();

  // 초기 히스토리 상태: chatList.history가 배열이면 역순 복사, 아니면 빈 배열
  const initialHistory = Array.isArray(chatList.history)
    ? [...chatList.history].reverse()
    : [];

  const [history, setHistory] = useState(initialHistory);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [streamedMessage, setStreamedMessage] = useState(null); // 실시간 메시지

  const scrollRef = useRef(null);

  // chatList.history가 바뀌면 상태 동기화
  useEffect(() => {
    if (Array.isArray(chatList.history)) {
      setHistory([...chatList.history].reverse());
    } else {
      setHistory([]);
    }
  }, [chatList.history]);

  const sendChatMutation = useSendChat({
    onMutate: () => setLoading(true),
    onSuccess: (data) => {
      // 사용자가 보낸 메시지를 history 앞에 추가 (가장 최신 메시지 앞쪽)
      setHistory((prev) => [...prev, { role: "user", content: input }]);
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

  // AI 실시간 답변 스트림이 오면 streamedMessage 상태 업데이트
  useEffect(() => {
    setHistory((prev) => [
      ...prev,
      {
        role: "assistant",
        content: chatStreamData?.content,
      },
    ]);
    if (chatStreamData?.content) {
      setStreamedMessage({
        role: "assistant",
        content: chatStreamData.content,
      });
    }
  }, [chatStreamData]);

  // 스크롤 자동 이동
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, streamedMessage, loading]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    sendChatMutation.mutate({ message: input });
  };

  // AI가 답변 완료되면 streamedMessage를 history에 추가하고 비우기
  useEffect(() => {
    if (streamedMessage && !loading) {
      setHistory((prev) => [streamedMessage, ...prev]);
      setStreamedMessage(null);
    }
  }, [streamedMessage, loading]);

  return (
    <Wrapper>
      <Header pageName={profileInfo?.name || "나만의 AI"} nav="/ai-profile" />

      <ScrollArea>
        {isLoading && <LoadingBox>로딩 중...</LoadingBox>}
        {error && <LoadingBox>에러가 발생했어요!</LoadingBox>}

        {history.map(({ role, content }, idx) => (
          <BubbleBox key={idx} my={role === "user"}>
            {role === "assistant" && (
              <ProfileImage src={profileInfo?.profile} alt="AI 프로필" />
            )}
            <MessageBubble my={role === "user"}>{content}</MessageBubble>
          </BubbleBox>
        ))}

        {/* 실시간 답변 표시 중일 때 */}
        {loading && (
          <BubbleBox my={false}>
            <ProfileImage src={profileInfo?.profile} alt="AI 프로필" />
            <MessageBubble my={false}>답변 생성 중...</MessageBubble>
          </BubbleBox>
        )}

        {/* 스크롤 위치 고정용 빈 div */}
        <div ref={scrollRef} />
      </ScrollArea>

      <InputBox>
        <Input>
          <TextInput
            placeholder="메시지 입력..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
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

// styled-components 아래에...

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

const TextInput = styled.textarea`
  padding: 12px 20px;
  width: 100%;
  font-size: 16px;
  resize: none;
  border: none;
  outline: none;
  height: 40px;
  line-height: 1.4;
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

  &:disabled {
    color: #a1a1aa;
    cursor: default;
  }
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
  color: ${({ my }) => (my ? "#fff" : "#3f3f46")};
  max-width: 262px;
  white-space: pre-wrap;
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
