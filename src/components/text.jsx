import React from "react";
import styled from "styled-components";

export default function Text() {
  return (
    <Container>
      <Title>Text</Title>

      {}
      <InputBox1>
        <TextInput placeholder="메시지 입력..." />
      </InputBox1>

      <InputBox2>
        <TextInput />
        <SendButton>보내기</SendButton>
      </InputBox2>

      {}
      <BubbleWrapper>
        <BubbleGray1>집에 가고싶다 그치?</BubbleGray1>
        <BubbleGray2>집에 가고싶다 그치?</BubbleGray2>
        <BubbleGray3>집에 가고싶다 그치?</BubbleGray3>
        <BubbleGray4>집에 가고싶다 그치?</BubbleGray4>

        <BubblePurple>집에 가고싶다 그치?</BubblePurple>
        <BubbleBlue1>집에 가고싶다 그치?</BubbleBlue1>
        <BubbleBlue2>집에 가고싶다 그치?</BubbleBlue2>
        <BubbleBlue3>집에 가고싶다 그치?</BubbleBlue3>
      </BubbleWrapper>

    </Container>
  );
}

const Container = styled.div`
  padding: 32px 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const InputBox1 = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 9999px;
  padding: 12px 12px;
  margin-bottom: 16px;
`;

const InputBox2 = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 9999px;
  padding: 4px 12px;
  margin-bottom: 16px;
`;

const TextInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  background: transparent;
`;

const SendButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: #2977f5;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #3e1fcf;
  }
`;

const BubbleWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BubbleBase = styled.div`
  max-width: 65%;
  padding: 10px 12px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 540;
`;

const BubbleGray1 = styled(BubbleBase)`
  background-color: #f1f1f1;
  align-self: flex-start;
`;

const BubbleGray2 = styled(BubbleBase)`
  background-color: #f1f1f1;
  align-self: flex-start;
  border-radius: 20px 20px 20px 4px;
`;

const BubbleGray3 = styled(BubbleBase)`
  background-color: #f1f1f1;
  align-self: flex-start;
  border-radius: 4px 20px 20px 4px;
`;

const BubbleGray4 = styled(BubbleBase)`
  background-color: #f1f1f1;
  align-self: flex-start;
  border-radius: 4px 20px 20px 20px;
`;

const BubblePurple = styled(BubbleBase)`
  background-color: #7c3aed;
  color: white;
  align-self: flex-end;
`;

const BubbleBlue1 = styled(BubbleBase)`
  background-color: #2977f5;
  color: white;
  align-self: flex-end;
  border-radius: 20px 20px 4px 20px;
`;

const BubbleBlue2 = styled(BubbleBase)`
  background-color: #2977f5;
  color: white;
  align-self: flex-end;
  border-radius: 20px 4px 4px 20px;
`;

const BubbleBlue3 = styled(BubbleBase)`
  background-color: #2977f5;
  color: white;
  align-self: flex-end;
  border-radius: 20px 4px 20px 20px;
`;




