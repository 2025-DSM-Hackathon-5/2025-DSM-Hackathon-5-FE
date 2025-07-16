import styled from "styled-components";

export default function Buttons() {
  return (
    <Wrapper>
      <Title>Buttons</Title>
      <PurpleButton>이어서 대화하기</PurpleButton>
      <DisabledButton>저장하기</DisabledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 32px;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

// 1
const PurpleButton = styled.button`
  width: 340px;
  background-color: #4F78FF;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;

// 2
const DisabledButton = styled.button`
  width: 340px;
  background-color: #C5C5C7;
  color: #ffffff;
  border: 2px solid #ddd;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;
