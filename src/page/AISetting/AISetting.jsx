import styled from "styled-components";
import BannerImage from "../../assets/images/banner/AISetting.png";
import OutlineInput from "../../components/common/Inputs/OutlineInput";
import TextAreaInput from "../../components/common/Inputs/TextAreaInput";
import Button from "../../components/common/Button/Button";
import AddImageBtn from "../../assets/images/button/addImageBtn.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSaveChatPreset } from "../../apis/chat";

function AISetting() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: saveChatPreset, isLoading } = useSaveChatPreset({
    onSuccess: () => {
      navigate("/tips");
    },
    onError: (err) => {
      console.error(err);
      alert("프리셋 저장 실패");
    },
  });

  const handleSavePreset = () => {
    if (!name || !description) {
      alert("이름과 설명을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("systemPrompt", description);

    saveChatPreset(formData);
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
        <Button
          text={isLoading ? "저장 중..." : "회원가입"}
          onClick={handleSavePreset}
          disabled={isLoading}
        />
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
