import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 32px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 6px 0;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
`;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: #888;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 0.8rem;
`;

export default function PasswordInput() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validatePassword = (pw) => {
    return pw.length >= 8 && pw.length <= 16;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setIsValid(validatePassword(newValue));
  };

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Wrapper>
      <Label>비밀번호</Label>
      <InputWrapper>
        <StyledInput
          type={visible ? 'text' : 'password'}
          placeholder="비밀번호 (8~16)"
          value={password}
          maxLength={16}
          onChange={handleChange}
        />
        <Icon onClick={toggleVisibility}>
          {visible ? (
            // 열림 상태
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          ) : (
            // 닫힘 상태
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2.39 1.73L1.11 3l2.52 2.52C2.39 7.27 1 9.5 1 12c1.73 3.89 6 7 11 7 2.13 0 4.1-.57 5.79-1.56L20.73 22l1.27-1.27L2.39 1.73zM12 17c-2.76 0-5-2.24-5-5 0-.64.12-1.25.34-1.81l1.54 1.54A3.01 3.01 0 0012 15c.64 0 1.23-.2 1.72-.53l1.52 1.52C14.64 16.72 13.37 17 12 17zm6.66-2.47c.22-.5.34-1.05.34-1.53 0-2.76-2.24-5-5-5-.48 0-.94.07-1.38.19l6.04 6.04zM12 7c3.25 0 6.04 2.04 7.19 5-.27.7-.67 1.36-1.17 1.93l1.43 1.43C21.11 13.27 23 12 23 12s-3.73-7-11-7c-1.51 0-2.92.3-4.2.83l1.55 1.55C10.27 7.11 11.12 7 12 7z"/>
            </svg>
          )}
        </Icon>
      </InputWrapper>
      {!isValid && (
        <ErrorMessage>비밀번호는 8~16자 사이여야 합니다.</ErrorMessage>
      )}
    </Wrapper>
  );
}