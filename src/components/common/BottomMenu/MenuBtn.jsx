import ChattingDisabled from "../../../assets/nav_icon/ChattingDisabled.svg";
import TipsDisabled from "../../../assets/nav_icon/TipsDisabled.svg";
import AddTipsDisabled from "../../../assets/nav_icon/AddTipsDisabled.svg";
import MypageDisabled from "../../../assets/nav_icon/MypageDisabled.svg";
import ChattingEnabled from "../../../assets/nav_icon/ChattingEnabled.svg";
import TipsEnabled from "../../../assets/nav_icon/TipsEnabled.svg";
import AddTipsEnabled from "../../../assets/nav_icon/AddTipsEnabled.svg";
import MypageEnabled from "../../../assets/nav_icon/MypageEnabled.svg";
import styled from "styled-components";

const Icons = {
  Chatting: [ChattingDisabled, ChattingEnabled, "채팅"],
  Tips: [TipsDisabled, TipsEnabled, "팁스"],
  AddTips: [AddTipsDisabled, AddTipsEnabled, "팁스 추가"],
  Mypage: [MypageDisabled, MypageEnabled, "마이페이지"]
};

function MenuBtn(props) {
  const icon = Icons[props.type];

  return (
    <Button>
      <Image src={props.disabled ? icon[0] : icon[1]} />
      <Text disabled={props.disabled}>{icon[2]}</Text>
    </Button>
  );
}

export default MenuBtn;

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

const Image = styled.img`
  width: 28px;
  height: 28px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: "SUIT";
  font-weight: 600;
  color: ${(props) => (props.disabled ? "#a1a1aa" : "#4F78FF")};
`;
