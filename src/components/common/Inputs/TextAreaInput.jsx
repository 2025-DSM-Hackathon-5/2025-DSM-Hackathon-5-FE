import styled from "styled-components";

const TextAreaInput = (props) => {
  return (
    <Container>
      <Label>{props.title}</Label>
      <TextArea placeholder={props.placeholder} maxLength={500} />
    </Container>
  );
};

export default TextAreaInput;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.p`
  margin: 0px;
  font-size: 14px;
  color: black;
  margin-bottom: 6px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  font-family: "SUIT";
  font-weight: 500;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  background-color: #ffffff;
  color: black;
  padding: 13px;
  resize: none;
  height: 140px;
  line-height: 20px;

  &::placeholder {
    color: #c5c5c7;
    font-family: "SUIT";
    font-weight: 500;
    white-space: pre-line;
  }

  &:focus {
    border-color: #bbb;
  }
`;
