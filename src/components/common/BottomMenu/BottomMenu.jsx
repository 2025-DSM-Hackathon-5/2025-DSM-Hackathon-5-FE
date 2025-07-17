import styled from "styled-components";
import MenuBtn from "./MenuBtn";
import { useLocation, useNavigate } from "react-router-dom";

function BottomMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  // 타입별 경로 맵핑
  const pathMap = {
    Chatting: "/chat",
    Tips: "/tips",
    AddTips: "/add-tips",
    Mypage: "/my",
  };

  return (
    <Container>
      <ButtonOuterContainer>
        {Object.keys(pathMap).map((type) => (
          <MenuBtn
            key={type}
            type={type}
            disabled={location.pathname === pathMap[type]}
            onClick={() => navigate(pathMap[type])}
          />
        ))}
      </ButtonOuterContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 4px;
  width: 394px;
  height: 83px;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const ButtonOuterContainer = styled.div`
  margin-top: 8px;
  gap: 39px;
  display: flex;
  flex-direction: row;
`;

export default BottomMenu;
