import styled from "styled-components";

const OutlineInput = (props) => {
  return (
    <Container>
      <Label>{props.title}</Label>
      <Input
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChange}
      />
      <Text>{`0/${props.maxLength}`}</Text>
    </Container>
  );
};

export default OutlineInput;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Label = styled.p`
  margin: 0px;
  font-size: 14px;
  color: black;
  margin-bottom: 6px;
  font-weight: 600;
`;

const Input = styled.input`
  height: 40px;
  padding: 0 13px;
  font-family: "SUIT";
  font-weight: 500;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  background-color: #ffffff;
  color: black;
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

const Text = styled.p`
  font-family: "SUIT";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #c5c5c7;
  position: absolute;
  right: 10px;
  top: 25px;
`;
