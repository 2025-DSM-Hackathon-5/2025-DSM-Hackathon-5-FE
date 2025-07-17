import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";
import TextAreaInput from "../../components/common/Inputs/TextAreaInput";
import LeftArrow from "../../assets/images/header/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import { useUploadVideo } from "../../apis/video"; // 업로드 훅 불러오기

function CreateTips() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState("");
  const [previewURL, setPreviewURL] = useState(""); // 썸네일 미리보기용

  const uploadMutation = useUploadVideo({
    onSuccess: (data) => {
      alert("업로드 성공! videoId: " + data.videoId);
      // 여기서 navigate나 저장 로직 실행 가능
    },
    onError: () => {
      alert("업로드 실패! 다시 시도해주세요.");
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setPreviewURL(URL.createObjectURL(file)); // 썸네일로 미리보기
    }
  };

  const handleSubmit = () => {
    if (!videoFile || !description.trim()) {
      alert("영상과 설명을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", description.trim());

    uploadMutation.mutate(formData);
  };

  return (
    <Wrapper>
      <Header>
        <GoBackBtn src={LeftArrow} onClick={() => navigate(-1)} />
        제작
      </Header>
      <ScrollArea>
        <TipsImage
          src={
            previewURL ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_8wijf2foCSJMbq8XVI9LJ8OdNzw1Gp4AR2jdbEdqL9Z-hKR7EdqBkOnEc0FKUylKIAGAbraJBm7ozDfjeIGGuCLRSym9AQ5BiKaJsA"
          }
          onClick={() => fileInputRef.current.click()}
        />
        <HiddenFileInput
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
        <TipsCaption>
          <CaptionTitle>팁스 설명</CaptionTitle>
          <TextAreaInput
            placeholder="ex. 이 팁을 따라한다면 누구나 쉽게 계란찜을 만들 수 있을거에요..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </TipsCaption>
      </ScrollArea>
      <ButtonBox>
        <Button text="제작하기" onClick={handleSubmit} />
      </ButtonBox>
    </Wrapper>
  );
}

export default CreateTips;

const HiddenFileInput = styled.input`
  display: none;
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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 76px 20px 120px;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;

const TipsCaption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CaptionTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const TipsImage = styled.img`
  width: 140px;
  min-height: 180px;
  border-radius: 10px;
  object-fit: cover;
`;
