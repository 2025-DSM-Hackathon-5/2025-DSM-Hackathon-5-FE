import styled from "styled-components";


function App() {
  return (
    <AppContainer>
      <MainContent></MainContent>
    </AppContainer>
  );
}

export default App;

// Styled Components
const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 394px;
  height: 852px;
  background-color: #ffffff;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
