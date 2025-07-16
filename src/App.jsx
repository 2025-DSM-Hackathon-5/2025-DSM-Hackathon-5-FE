import styled from "styled-components";
import SystemStatus from "./assets/images/SystemProps/TopStatusBar.png";
import HomeIndicator from "./assets/images/SystemProps/HomeIndicator.png";
import Text from "./components/text";

function App() {
  return (
    <AppContainer>
      <MainContent>
        <SystemPropImage src={SystemStatus} />


        <SystemPropImage src={HomeIndicator} style={{ position: "absolute", bottom: 0 }} />
      </MainContent>
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
  margin: 0;
  padding: 0;
`;
