import React from "react";
import styled from "styled-components";
import Buttons from "./components/buttons";
import Inputs from "./components/inputs";
import Texts from "./components/text";

function App() {
  return (
    <AppContainer>
      <MainContent>
        <Section>
          <SectionTitle>Buttons</SectionTitle>
          <Buttons />
        </Section>

        <Section>
          <SectionTitle>Inputs</SectionTitle>
          <Inputs />
        </Section>

        <Section>
          <SectionTitle>Texts</SectionTitle>
          <Texts />
        </Section>
      </MainContent>
    </AppContainer>
  );
}

export default App;

// Styled Components
const AppContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  background-color: #ffffff;
  height: 100vh;
  border: 1px solid #ddd;
  overflow-y: auto;
`;

const MainContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;