import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useGetChatPreset } from "../../apis/chat";

function AIProfile() {
  const navigate = useNavigate();
  const { data: profileInfo } = useGetChatPreset();
  return (
    <Wrapper>
      <Header pageName={profileInfo.name} nav="/edit-ai-setting" />
      <ScrollArea>
        <ProfileImage src={profileInfo.profile} />
        <Title>{profileInfo.name}</Title>
        <Divider />
        <CaptionBox>
          <CaptionTitle>상세 설명</CaptionTitle>
          <Caption>{profileInfo.prompt}</Caption>
        </CaptionBox>
        <ButtonBox>
          <Button onClick={() => navigate("/chat")} text="이어서 대화하기" />
        </ButtonBox>
      </ScrollArea>
    </Wrapper>
  );
}

export default AIProfile;
const ProfileImage = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 354px;
  object-fit: cover;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
`;
const Title = styled.p`
  font-size: 24px;
  color: #3f3f46;
  font-weight: 600;
`;

const CaptionBox = styled.div`
  flex-direction: column;
  display: flex;
  gap: 4px;
`;

const CaptionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #3f3f46;
`;

const Caption = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #8e8c90;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 75px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;
