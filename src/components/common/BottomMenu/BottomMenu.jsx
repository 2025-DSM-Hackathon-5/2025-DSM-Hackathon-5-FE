import styled from "styled-components";
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

export default NavBar;
