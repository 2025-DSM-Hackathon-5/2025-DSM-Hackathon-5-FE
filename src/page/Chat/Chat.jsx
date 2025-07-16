import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header/Header";

function Chat() {
  const data = [
    { my: true, text: "키라 아빠카게!" },
    { my: false, text: "어 불렀냐 죠타로?" },
  ];
  return (
    <Wrapper>
      <Header pageName="키라 아빠카게" />
      <ScrollArea>
        {data.map(({ my, text }) => (
          <BubbleBox my={my}>
            {!my && (
              <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_8wijf2foCSJMbq8XVI9LJ8OdNzw1Gp4AR2jdbEdqL9Z-hKR7EdqBkOnEc0FKUylKIAGAbraJBm7ozDfjeIGGuCLRSym9AQ5BiKaJsA" />
            )}

            <MessageBubble my={my}>{text}</MessageBubble>
          </BubbleBox>
        ))}
      </ScrollArea>
      <InputBox>
        <Input>
          <TextInput placeholder="메시지 입력..." />
          <SendButton>보내기</SendButton>
        </Input>
      </InputBox>
    </Wrapper>
  );
}

export default Chat;

const Input = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #d4d4d8;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  overflow: hidden;
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
