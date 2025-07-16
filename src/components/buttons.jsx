// Buttons.jsx
import React from "react";
import styled from "styled-components";

export default function Buttons() {
  return (
    <Wrapper>
      <Title>Buttons</Title>
      <PurpleButton>Button</PurpleButton>
      <OutlinedButton>Button</OutlinedButton>
      <DisabledButton disabled>Button</DisabledButton>
      <LightPurpleButton>Button</LightPurpleButton>
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
  background-color: #5b2eff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

// 2
const OutlinedButton = styled.button`
  background-color: white;
  color: #5b2eff;
  border: 2px solid #5b2eff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

// 3
const DisabledButton = styled.button`
  background-color: white;
  color: #999;
  border: 2px solid #ddd;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

// 4
const LightPurpleButton = styled.button`
  background-color: #e9ddff;
  color: #5b2eff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;