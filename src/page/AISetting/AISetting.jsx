import styled from "styled-components";
import BannerImage from "../../assets/images/banner/AISetting.png";
import OutlineInput from "../../components/common/Inputs/OutlineInput";
import TextAreaInput from "../../components/common/Inputs/TextAreaInput";
import AddImageBtn from "../../assets/images/button/addImageBtn.png";
import Button from "../../components/common/Button/Button";

function AISetting() {
  return (
    <Container>
      <Banner src={BannerImage} />

      <InnerContainer>
        <AddImageButton src={AddImageBtn} />
        <OutlineInput title="이름" placeholder="ex. 아빠" maxLength={10} />
        <TextAreaInput
          title="설명"
          placeholder={"캐릭터의 특징, 행동, 감정 표현에 대해서 써주시면 개성있는 캐릭터를 만들 수 있어요! \n ex. 아빠는 다정한 성격을 갖고 계시며, 온갖 레시피를 알고 계셔서 설명을 잘 해주신다."}
          maxLength={10}
        />
      </InnerContainer>

      <Button text={"회원가입"} />
    </Container>
  );
}

export default AISetting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.img``;

const AddImageButton = styled.img`
  width: 125px;
  height: 125px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  margin: 30px 0 70px;
  padding: 22px 0 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 354px;
  margin: 30px, auto, 100px;
  border: 1px solid #c5c5c7;
  gap: 12px;
`;
