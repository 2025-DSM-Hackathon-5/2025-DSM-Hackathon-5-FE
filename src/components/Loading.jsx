import styled, { keyframes } from "styled-components";
import SystemStatus from "../assets/images/SystemProps/TopStatusBar.png";
import HomeIndicator from "../assets/images/SystemProps/HomeIndicator.png";
import LogoIcon from "../assets/images/logo/LogoIcon.png";

export default function LoadingScreen() {
  return (
    <Container>
      <SystemBar src={SystemStatus} />
      <Center>
        <Logo src={LogoIcon} />
      </Center>
      <HomeBar src={HomeIndicator} />
    </Container>
  );
}

const Container = styled.div`
  width: 394px;
  height: 852px;
  background-color: #4f78ff;
  position: relative;
  overflow: hidden;
`;

const SystemBar = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  filter: brightness(0) invert(1);
`;

const HomeBar = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const Center = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
  animation: ${fadeIn} 1.2s ease-in-out;
`;