import styled from "styled-components";
import LeftArrow from "../../../assets/images/header/LeftArrow.svg";
import MenuIcon from "../../../assets/images/header/MenuIcon.svg";
import { useNavigate } from "react-router-dom";

function Header({ pageName }) {
  const navigate = useNavigate();
  const goBackBtnClickEventHandler = () => {
    navigate(-1);
  };

  const menuBtnClickEventHandler = () => {};

  return (
    <Container>
      <GoBackBtn src={LeftArrow} onClick={goBackBtnClickEventHandler} />
      <PageName>{pageName}</PageName>
      <MenuBtn src={MenuIcon} onClick={menuBtnClickEventHandler} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  padding: 14px 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
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

const PageName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #3f3f46;
`;

const MenuBtn = styled.img`
  width: 18px;
  height: 12px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
