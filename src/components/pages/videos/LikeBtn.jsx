import styled from "styled-components";
import LikedDisabled from "../../../assets/images/like/LikeDisabled.png";
import LikedEnabled from "../../../assets/images/like/LikeEnabled.png";

function LikeBtn(props) {
  const likeBtnClickEventHandler = () => {};

  return (
    <Container onClick={likeBtnClickEventHandler}>
      <Image src={props.disabled ? LikedDisabled : LikedEnabled} />
      <Text>{props.cnt}</Text>
    </Container>
  );
}

export default LikeBtn;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-family: "SUIT";
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
`;
