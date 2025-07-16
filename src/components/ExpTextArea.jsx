import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 32px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 6px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  font-family: 'Noto Sans KR', sans-serif;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  background-color: #ffffff;
  color: #999;
  padding: 14px;
  resize: none;
  height: 140px;
  line-height: 1.5;

  &::placeholder {
    color: #999;
    font-weight: 400;
    white-space: pre-line;
  }

  &:focus {
    border-color: #bbb;
  }
`;

const ExpTextArea = () => {
  return (
    <Wrapper>
      <Label htmlFor="userExp">설명</Label>
      <TextArea
        id="userExp"
        placeholder={`캐릭터의 특징, 행동, 감정 표현에 대해서 써주시면 개성있는 캐릭터를 만들 수 있어요!\nex. 아빠는 다정한 성격을 갖고 계시며, 온갖 레시피를 알고 계셔서 설명을 잘 해주신다.`}
        maxLength={500}
      />
    </Wrapper>
  );
};

export default ExpTextArea;