import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 32px`
;

const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 4px;
  font-weight: 600;`
;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 0.95rem;
  transition: border-color 0.2s;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-color: #3399ff;
  }`
;

const NameInput = () => {
  return (
    <Wrapper>
      <Label htmlFor="userId">이름</Label>
      <Input
        type="text"
        id="userId"
        placeholder="ex.아빠                                          0/10"
        maxLength={10}
      />
    </Wrapper>
  );
};

export default NameInput;