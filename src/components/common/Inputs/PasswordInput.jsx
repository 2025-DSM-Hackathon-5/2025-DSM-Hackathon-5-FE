import { useState } from "react";
import styled from "styled-components";
import Show from "../../../assets/images/password/Show.svg";
import Hide from "../../../assets/images/password/Hide.svg";

function PasswordInput(props) {
  const [showPassword, hidePassword] = useState(false);

  const toggleVisibility = () => {
    hidePassword((prev) => !prev);
  };

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input placeholder={props.placeholder} maxLength={props.maxLength} type={showPassword ? "text" : "password"} onChange={props.onChange} value={props.text} />
      <Icon onClick={toggleVisibility} src={showPassword ? Show : Hide} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  margin: 0;
  padding: 0;
  line-height: 22px;
  font-size: 15px;
  font-family: "SUIT";
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 350px;
  height: 44px;
  border: none;
  border-bottom: 1px solid #d4d4d8;
  outline: none;
  background: transparent;

  font-family: "SUIT";
  font-weight: 700;
  font-size: 18px;
  color: black;

  &::placeholder {
    color: #d4d4d8;
  }

  &:focus {
    border-bottom: 2px solid #4f78ff;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 21px;
  height: 21px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PasswordInput;
