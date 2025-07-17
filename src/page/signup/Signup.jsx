import styled from "styled-components";
import BannerImage from "../../assets/images/banner/signupBanner.png";
import BasicInput from "../../components/common/Inputs/BasicInput";
import PasswordInput from "../../components/common/Inputs/PasswordInput";
import LeftArrow from "../../assets/images/header/LeftArrow.svg";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, useWatch } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      accountId: "",
      name: "",
      password: "",
      passwordCheck: "",
    },
  });
  const passwordValue = useWatch({ name: "password", control });

  // Signup.tsx 내부 onSubmit 수정
  const onSubmit = async (formData) => {
    const { passwordCheck, ...signupData } = formData;

    navigate("/ai-setting", {
      state: { signupData }, // 아이디, 이름, 비밀번호 전달
    });
  };

  return (
    <Container>
      <Banner src={BannerImage} />
      <GoBackBtn src={LeftArrow} onClick={() => navigate(-1)} />

      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: "닉네임을 입력해주세요",
            minLength: { value: 1, message: "최소 6자 입력" },
            maxLength: { value: 8, message: "최대 12자 입력" },
          }}
          render={({ field: { onChange, value } }) => (
            <BasicInput
              label={"닉네임"}
              placeholder={"1자에서 8자"}
              maxLength={8}
              onChange={onChange}
              value={value}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="accountId"
          rules={{
            required: "아이디를 입력해주세요",
            minLength: { value: 6, message: "최소 6자 입력" },
            maxLength: { value: 12, message: "최대 12자 입력" },
          }}
          render={({ field: { onChange, value } }) => (
            <BasicInput
              label={"아이디"}
              placeholder={"6자에서 12자"}
              maxLength={12}
              value={value}
              onChange={onChange}
              error={errors.accountId?.message}
            />
          )}
        />
        {errors.accountId && <ErrorText>{errors.accountId.message}</ErrorText>}
        <Controller
          control={control}
          name="password"
          rules={{
            required: "비밀번호를 입력해주세요",
            minLength: { value: 8, message: "최소 8자 입력" },
            maxLength: { value: 16, message: "최대 16자 입력" },
          }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              label={"비밀번호"}
              placeholder={"8자에서 16자"}
              maxLength={16}
              value={value}
              onChange={onChange}
              error={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordCheck"
          rules={{
            required: "비밀번호를 입력해주세요",
            minLength: { value: 8, message: "최소 8자 입력" },
            maxLength: { value: 16, message: "최대 16자 입력" },
            validate: (value) =>
              value === passwordValue || "비밀번호가 일치하지 않습니다.",
          }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              label={"비밀번호 확인"}
              placeholder={"8자에서 16자"}
              maxLength={16}
              value={value}
              onChange={onChange}
              error={errors.passwordCheck?.message}
            />
          )}
        />
      </InputContainer>
      <ButtonBox>
        <Button
          text={"회원가입"}
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        />
      </ButtonBox>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.img``;

const InputContainer = styled.form`
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

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;
