import styled from "styled-components";
import BannerImage from "../../assets/images/banner/LoginBanner.png";
import BasicInput from "../../components/common/Inputs/BasicInput";
import PasswordInput from "../../components/common/Inputs/PasswordInput";
import Button from "../../components/common/Button/Button";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({ accountId: "", password: "" });

  const isSomeInputIsEmpty = data.accountId === "" || data.password === "";

  const onLoginBtnClickHandler = () => {};

  const dataChangeEventHandler = (name, value) => {
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <Banner src={BannerImage} />

      <InputContainer>
        <BasicInput
          label={"아이디"}
          placeholder={"아이디 (6~12)"}
          maxLength={12}
          text={data.accountId}
          onChange={(e) => {
            dataChangeEventHandler("accountId", e.target.value);
          }}
        />
        <PasswordInput
          label={"비밀번호"}
          placeholder={"아이디 (8~16)"}
          maxLength={16}
          text={data.password}
          onChange={(e) => {
            dataChangeEventHandler("password", e.target.value);
          }}
        />
        <Text>
          {"계정이 없으신가요? "}
          <HighlightedText>회원가입</HighlightedText>
        </Text>
      </InputContainer>

      <Button text="로그인" onClick={onLoginBtnClickHandler} disabled={isSomeInputIsEmpty} />
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Banner = styled.img``;

const InputContainer = styled.div`
  margin: 37px auto 235px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 33px;
`;

const Text = styled.p`
  width: fit-content;
  margin: 0;
  font-family: "SUIT";
  font-weight: 500;
  color: black;
`;

const HighlightedText = styled.a`
  margin: 0;
  font-family: "SUIT";
  font-weight: 700;
  color: #4f78ff;
`;
