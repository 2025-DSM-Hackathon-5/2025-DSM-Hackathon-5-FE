import styled, { ThemeProvider } from "styled-components";
import { Router } from "./router";
import GlobalStyle from "../GlobalStyle";

function App() {
  return (
    <Container>
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-self: center;
  background-color: #dfdfdf;
`;

const AppContainer = styled.div`
  position: relative;
  max-width: 394px;
  width: 100%;
  height: 100%;
  justify-self: center;
  background-color: #fff;
`;
