import React from "react";
import styled from "styled-components";

export default function IdInput() {
  return (
    <Wrapper>
      <Label>아이디</Label>
      <Input placeholder="아이디 (6~12)" maxLength={12} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  padding: 32px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  padding: 6px 0;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-bottom: 2px solid #5b2eff;
  }
`;