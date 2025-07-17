import styled from "styled-components";
import OutlineInput from "../../components/common/Inputs/OutlineInput";
import TextAreaInput from "../../components/common/Inputs/TextAreaInput";
import Button from "../../components/common/Button/Button";
import { useGetChatPreset, useSaveChatPreset } from "../../apis/chat";
import { useState, useEffect, useRef } from "react";
import LeftArrow from "../../assets/images/header/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import Pencil from "../../assets/images/SystemProps/Pencil.png";

function EditAISetting() {
  const navigate = useNavigate();
  const { data: profileInfo } = useGetChatPreset();

  const fileInputRef = useRef(null);
  const [name, setName] = useState(profileInfo.name);
  const [desc, setDesc] = useState(profileInfo.prompt);
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (profileInfo) {
      setName(profileInfo.name || "");
      setDesc(profileInfo.prompt || "");
      setImagePreview(profileInfo.profile || "");
    }
  }, [profileInfo]);

  const savePresetMutation = useSaveChatPreset({
    onSuccess: () => {
      alert("저장이 완료되었습니다.");
      navigate(-1);
    },
    onError: () => {
      alert("저장에 실패했어요. 다시 시도해주세요.");
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = () => {
    if (!name.trim() || !desc.trim()) {
      alert("이름과 설명을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("prompt", desc);
    if (imageFile) {
      formData.append("profile", imageFile);
    }

    savePresetMutation.mutate(formData);
  };

  return (
    <Container>
      <Header>
        <GoBackBtn src={LeftArrow} onClick={() => navigate(-1)} />
        제작
      </Header>
      <InnerContainer>
        <ImageBox>
          <ProfileImage src={imagePreview} alt="프로필 미리보기" />
          <ImageEditButton onClick={() => fileInputRef.current.click()}>
            <img src={Pencil} alt="편집" />
          </ImageEditButton>
          <HiddenFileInput
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </ImageBox>
        <OutlineInput
          title="이름"
          placeholder="ex. 아빠"
          maxLength={10}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextAreaInput
          title="설명"
          placeholder={
            "캐릭터의 특징, 행동, 감정 표현에 대해서 써주시면 개성있는 캐릭터를 만들 수 있어요! \n ex. 아빠는 다정한 성격을 갖고 계시며, 온갖 레시피를 알고 계셔서 설명을 잘 해주신다."
          }
          maxLength={500}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </InnerContainer>
      <ButtonBox>
        <Caption>
          ※ 저작권 침해 / 선정성 등 비윤리적인 캐릭터는 삭제될 수 있어요
        </Caption>
        <Button text="저장하기" onClick={onSubmit} />
      </ButtonBox>
    </Container>
  );
}

export default EditAISetting;

const HiddenFileInput = styled.input`
  display: none;
`;

const ImageBox = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 8px;
  object-fit: cover;
`;

const ImageEditButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 6px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px;
  display: flex;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 354px;
  margin-top: 70px;
  border: 1px solid #c5c5c7;
  gap: 12px;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const Caption = styled.p`
  color: #9f9fa2;
  font-size: 12px;
  font-weight: 500;
`;

const Header = styled.div`
  width: 100%;
  position: absolute;
  padding: 14px 20px;
  gap: 10px;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  z-index: 10;
  background-color: #fff;
`;

const GoBackBtn = styled.img`
  width: 14px;
  height: 27px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
