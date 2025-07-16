import styled from "styled-components";
import SystemStatus from "./assets/images/SystemProps/TopStatusBar.png";
import HomeIndicator from "./assets/images/SystemProps/HomeIndicator.png";
import Signup from "./page/signup/Signup";

function App() {
  return (
    <AppContainer>
      <SystemPropImage src={SystemStatus} style={{ position: "absolute", top: 0 }} />
      <MainContent>
        <Signup />
      </MainContent>
      <SystemPropImage src={HomeIndicator} style={{ position: "absolute", bottom: 0 }} />
    </AppContainer>
  );
}

export default App;

// Styled Components
const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 394px;
  height: 852px;
  background-color: #ffffff;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SystemPropImage = styled.img`
  position: "absolute";
  margin: 0;
  padding: 0;
`;
