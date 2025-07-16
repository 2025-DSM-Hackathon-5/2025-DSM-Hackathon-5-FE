import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";
import TextAreaInput from "../../components/common/Inputs/TextAreaInput";
import LeftArrow from "../../assets/images/header/LeftArrow.svg";
import { useNavigate } from "react-router-dom";

function CreateTips() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <GoBackBtn src={LeftArrow} onClick={() => navigate(-1)} />
        제작
      </Header>
      <ScrollArea>
        <TipsImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_8wijf2foCSJMbq8XVI9LJ8OdNzw1Gp4AR2jdbEdqL9Z-hKR7EdqBkOnEc0FKUylKIAGAbraJBm7ozDfjeIGGuCLRSym9AQ5BiKaJsA" />
        <TipsCaption>
          <CaptionTitle>팁스 설명</CaptionTitle>
          <TextAreaInput placeholder="ex. 이 팁을 따라한다면 누구나 쉽게 계란찜을 만들 수 있을거에요..." />
        </TipsCaption>
      </ScrollArea>
      <ButtonBox>
        <Button text="제작하기" />
      </ButtonBox>
    </Wrapper>
  );
}

export default CreateTips;

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
