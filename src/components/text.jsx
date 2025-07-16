import styled from "styled-components";

export default function Text() {
  return (
    <Container>
      <Title>Text</Title>

      {}
      <BubbleWrapper>
        <BubbleRow>
          <Avatar />
          <BubbleGray>집에 가고싶다 그치?</BubbleGray>
          <BubbleBlue>집에 가고싶다 그치?</BubbleBlue>
        </BubbleRow>
      </BubbleWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const BubbleWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BubbleBase = styled.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

const BubbleGray = styled(BubbleBase)`
  background-color: #f1f1f1;
  align-self: flex-start;
  border-radius: 16px 16px 16px 4px;
  color: black;
  font-family: "SUIT";
  font-weight: 500;
  font-size: 14px;
`;

const BubbleBlue = styled(BubbleBase)`
  background-color: #2977f5;
  align-self: flex-end;
  border-radius: 16px 16px 4px 16px;
  color: white;
  font-family: "SUIT";
  font-weight: 500;
  font-size: 14px;
`;

const BubbleRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ccc;
  background-image: url("/src/assets/profile.jpg");
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;
