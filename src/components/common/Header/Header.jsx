import styled from "styled-components";
import LeftArrow from "../../../assets/images/header/LeftArrow.svg";
import MenuIcon from "../../../assets/images/header/MenuIcon.svg";

function Header(props) {
  const goBackBtnClickEventHandler = () => {};

  const menuBtnClickEventHandler = () => {};

  return (
    <Container>
      <GoBackBtn src={LeftArrow} onClick={goBackBtnClickEventHandler} />
      <PageName>{props.pageName}</PageName>
      <MenuBtn src={MenuIcon} onClick={menuBtnClickEventHandler} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  margin-top: 50px;
  width: 354px;
  height: 55px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const GoBackBtn = styled.img`
  width: 14px;
  height: 27px;

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
  font-family: "SUIT";
  font-weight: 600;
  color: black;
`;

const MenuBtn = styled.img`
  width: 18px;
  height: 12px;

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
