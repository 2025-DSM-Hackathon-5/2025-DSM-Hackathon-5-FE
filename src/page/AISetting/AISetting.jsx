import styled from "styled-components";
import BannerImage from "../../assets/images/banner/AISetting.png";
import OutlineInput from "../../components/common/Inputs/OutlineInput";
import TextAreaInput from "../../components/common/Inputs/TextAreaInput";
import Button from "../../components/common/Button/Button";
import AddImageBtn from "../../assets/images/button/addImageBtn.png";
import { useLocation, useNavigate } from "react-router-dom";
import { signup } from "../../apis/auth";
import { useState } from "react";

function AISetting() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signupData } = location.state || {}; // Signup에서 넘긴 데이터

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSignup = async () => {
    try {
      if (!signupData) throw new Error("회원가입 정보가 없습니다.");

      const finalPayload = {
        ...signupData,
        aiName: name,
        aiDescription: description,
      };

      await signup(finalPayload);
      await new Promise((res) => setTimeout(res, 100));
      navigate("/tips");
    } catch (err) {
      console.error(err);
      alert("회원가입 실패");
    }
  };

  return (
    <Container>
      <Banner src={BannerImage} />
      <InnerContainer>
        <AddImageButton src={AddImageBtn} />
        <OutlineInput
          title="이름"
          placeholder="ex. 아빠"
          maxLength={10}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextAreaInput
          title="설명"
          placeholder="캐릭터 설명 작성..."
          maxLength={200}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InnerContainer>
      <ButtonBox>
        <Button text="회원가입" onClick={handleSignup} />
      </ButtonBox>
    </Container>
  );
}

export default AISetting;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.img``;

const AddImageButton = styled.img`
  width: 125px;
  height: 125px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  margin: 30px 0 70px;
  padding: 22px 0 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 354px;
  margin: 30px, auto, 100px;
  border: 1px solid #c5c5c7;
  gap: 12px;
`;
