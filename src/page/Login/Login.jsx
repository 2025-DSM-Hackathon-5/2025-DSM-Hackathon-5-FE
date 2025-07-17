import styled from "styled-components";
import BannerImage from "../../assets/images/banner/LoginBanner.png";
import BasicInput from "../../components/common/Inputs/BasicInput";
import PasswordInput from "../../components/common/Inputs/PasswordInput";
import Button from "../../components/common/Button/Button";
import { login } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      accountId: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      setErrorMessage(""); // 초기화
      await login(formData);
      navigate("/tips");
    } catch (error) {
      setErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <Container>
      <Banner src={BannerImage} />

      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="accountId"
          rules={{
            required: "아이디를 입력해주세요",
            minLength: { value: 6, message: "최소 6자 입력" },
            maxLength: { value: 12, message: "최대 12자 입력" },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <BasicInput
                label={"아이디"}
                placeholder={"아이디 (6~12)"}
                maxLength={12}
                onChange={onChange}
                value={value}
              />
              {errors.accountId && (
                <ErrorText>{errors.accountId.message}</ErrorText>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "비밀번호를 입력해주세요",
            minLength: { value: 8, message: "최소 8자 입력" },
            maxLength: { value: 16, message: "최대 16자 입력" },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <PasswordInput
                label={"비밀번호"}
                placeholder={"비밀번호 (8~16)"}
                maxLength={16}
                onChange={onChange}
                value={value}
              />
              {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
              )}
            </>
          )}
        />

        {/* 로그인 실패 에러 메시지 */}
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <Text>
          계정이 없으신가요?
          <HighlightedText onClick={() => navigate("/signup")}>
            회원가입
          </HighlightedText>
        </Text>

        <ButtonBox>
          <Button text="로그인" type="submit" disabled={isSubmitting} />
        </ButtonBox>
      </InputContainer>
    </Container>
  );
}

export default Login;

// styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Banner = styled.img``;

const InputContainer = styled.form`
  margin: 37px auto 235px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const Text = styled.p`
  font-weight: 500;
  color: black;
  margin-top: 16px;
`;

const HighlightedText = styled.span`
  font-weight: 700;
  color: #4f78ff;
  cursor: pointer;
  margin-left: 6px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;
