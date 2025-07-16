import styled from "styled-components";

function Button(props) {
  const buttonClickEventHandler = () => {
    props.onClick();
  };

  return (
    <Container onClick={buttonClickEventHandler} disabled={props.disabled}>
      <Text disabled={props.disabled}>{props.text}</Text>
    </Container>
  );
}

export default Button;

const Container = styled.button`
  margin: 0 auto;
  width: 354px;
  height: 41px;
  background-color: ${(props) => (props.disabled ? "#C5C5C7" : "#4f78ff")};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:active {
    opacity: ${(props) => (props.disabled ? 1 : 0.8)};
  }

  &:focus {
    outline: none;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "SUIT";
  font-weight: 600;
  color: white;
`;
