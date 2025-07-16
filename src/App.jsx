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
  width: 394px;
  margin: 0 auto;
  background-color: #ffffff;
  height: 852px;
  border: 1px solid #ddd;
  overflow-y: auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
