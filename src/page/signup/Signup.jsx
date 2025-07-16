import styled from "styled-components";
import BannerImage from "../../assets/images/banner/signupBanner.png";
import BasicInput from "../../components/common/Inputs/BasicInput";
import PasswordInput from "../../components/common/Inputs/PasswordInput";
import LeftArrow from "../../assets/images/header/LeftArrow.svg";
import Button from "../../components/common/Button/Button";
import { useState } from "react";

function Signup() {
  const [data, setData] = useState({ accountId: "", name: "", password: "", passwordCheck: "" });

  const someInputIsBlank = data.accountId === "" || data.name === "" || data.password === "" || data.passwordCheck === "";

  const dataChangeEventHandler = (name, text) => {
    setData({ ...data, [name]: text });
  };

  const signupButtonClickHandler = () => {};

  const goBackBtnClickEventHandler = () => {};

  return (
    <Container>
      <Banner src={BannerImage} />
      <GoBackBtn src={LeftArrow} onClick={goBackBtnClickEventHandler} />

      <InputContainer>
        <BasicInput
          label={"닉네임"}
          placeholder={"1자에서 8자"}
          maxLength={8}
          text={data.accountId}
          onChange={(e) => {
            dataChangeEventHandler("accountId", e.target.value);
          }}
        />
        <BasicInput
          label={"아이디"}
          placeholder={"6자에서 12자"}
          maxLength={12}
          text={data.name}
          onChange={(e) => {
            dataChangeEventHandler("name", e.target.value);
          }}
        />
        <PasswordInput
          label={"비밀번호"}
          placeholder={"8자에서 16자"}
          maxLength={16}
          text={data.password}
          onChange={(e) => {
            dataChangeEventHandler("password", e.target.value);
          }}
        />
        <PasswordInput
          label={"비밀번호 확인"}
          placeholder={"8자에서 16자"}
          maxLength={16}
          text={data.passwordCheck}
          onChange={(e) => {
            dataChangeEventHandler("passwordCheck", e.target.value);
          }}
        />
      </InputContainer>

      <Button onClick={signupButtonClickHandler} text={"회원가입"} disabled={someInputIsBlank} />
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.img``;

const InputContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 145px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const GoBackBtn = styled.img`
  position: absolute;
  left: 25px;
  top: 50px;
  width: 14px;
  height: 27px;

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
