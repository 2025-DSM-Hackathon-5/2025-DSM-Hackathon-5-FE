import styled from "styled-components";

function BasicInput(props) {
  return (
    <Wrapper>
      <Container>
        <Label>{props.label}</Label>
        <Input
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          onChange={props.onChange}
          value={props.value}
        />
      </Container>
      <ErrorText>{props.error}</ErrorText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  margin: 0;
  padding: 0;
  line-height: 22px;
  font-size: 15px;
  font-family: "SUIT";
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 350px;
  height: 44px;
  border: none;
  border-bottom: 1px solid #d4d4d8;
  outline: none;
  background: transparent;

  font-family: "SUIT";
  font-weight: 700;
  font-size: 18px;
  color: black;

  &::placeholder {
    color: #d4d4d8;
  }

  &:focus {
    border-bottom: 2px solid #4f78ff;
  }
`;

export default BasicInput;
