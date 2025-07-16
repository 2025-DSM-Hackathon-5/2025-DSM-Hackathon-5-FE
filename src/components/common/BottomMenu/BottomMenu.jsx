import styled from "styled-components";
import ChattingDisabled from "../../../assets/nav_icon/ChattingDisabled.svg";
import TipsDisabled from "../../../assets/nav_icon/TipsDisabled.svg";
import AddTipsDisabled from "../../../assets/nav_icon/AddTipsDisabled.svg";
import MypageDisabled from "../../../assets/nav_icon/MypageDisabled.svg";
import MenuBtn from "./MenuBtn";

function NavBar() {
  return (
    <Container>
      <ButtonOuterContainer>
        <MenuBtn disabled={true} type={"Chatting"} />
        <MenuBtn disabled={true} type={"Tips"} />
        <MenuBtn disabled={true} type={"AddTips"} />
        <MenuBtn disabled={true} type={"Mypage"} />
      </ButtonOuterContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 394px;
  height: 83px;
  display: flex;
  justify-content: center;
`;

const ButtonOuterContainer = styled.div`
  margin-top: 8px;
  gap: 39px;
  display: flex;
  flex-direction: "row";
`;

const Button = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

const BtnImage = styled.img`
  width: 28px;
  height: 28px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: "SUIT";
  font-weight: 600;
  color: #a1a1aa;
`;

export default NavBar;
