import styled from "styled-components";
import BottomMenu from "../../components/common/BottomMenu/BottomMenu";
import ProfileEditBtn from "../../assets/images/button/ProfileEditBtn.svg";
import TipsEnabled from "../../assets/images/nav_icon/TipsEnabled.svg";
import TipsDisabled from "../../assets/images/nav_icon/TipsDisabled.svg";
import LikeEnabled from "../../assets/images/like/LikeEnabled.svg";
import LikeDisabled from "../../assets/images/like/LikeDisabledGray.svg";
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../../apis/user";
import { useGetLikedVideos, useGetMyVideos } from "../../apis/video";

function Mypage() {
  const userData = useGetUserInfo().data;
  const myVideoData = useGetMyVideos().data;
  const likedVideoData = useGetLikedVideos().data;
  const [selectedMenu, SetSelectedMenu] = useState("created");

  const CreatedTipsBtnClickHandler = () => {
    SetSelectedMenu("created");
  };

  const LikedTipsBtnClickHandler = () => {
    SetSelectedMenu("liked");
  };

  if (!userData || !myVideoData || !likedVideoData) return <div></div>;

  return (
    <Container>
      <TopInfoContainer>
        <Profile src={userData.profile} />
        <UserInfoTextContainer>
          <UserHandleText>@{userData.accountId}</UserHandleText>
          <UsernameText>{userData.name}</UsernameText>
        </UserInfoTextContainer>
        <EditBtn src={ProfileEditBtn} />
      </TopInfoContainer>

      <ButtonContainer>
        <Button src={selectedMenu === "created" ? TipsEnabled : TipsDisabled} onClick={CreatedTipsBtnClickHandler} />
        <Button src={selectedMenu === "liked" ? LikeEnabled : LikeDisabled} onClick={LikedTipsBtnClickHandler} />
      </ButtonContainer>
      <TipsContainer>
        {selectedMenu === "created"
          ? myVideoData.videos.map((video, idx) => {
              return <VideoThumbnail key={idx} src={video.thumbnailUrl} />;
            })
          : likedVideoData.map((video, idx) => {
              return <VideoThumbnail key={idx} src={video} />;
            })}
      </TipsContainer>

      <BottomMenu />
    </Container>
  );
}

export default Mypage;

const Container = styled.div``;

const TopInfoContainer = styled.div`
  position: relative;
  padding-top: 98px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TipsContainer = styled.div`
  width: "100%";
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const UserInfoTextContainer = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 25px;
`;

const UserHandleText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #8c8c90;
  font-weight: 500;
`;

const UsernameText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
`;

const Profile = styled.img`
  margin-right: 22px;
  width: 75px;
  height: 75px;
  border-radius: 100px;
`;

const EditBtn = styled.img`
  position: absolute;
  top: 113px;
  right: 20px;
  width: 24px;
  height: 24px;
`;

const VideoThumbnail = styled.img`
  width: 129px;
  height: 129px;
  object-fit: cover;
`;

const Button = styled.img`
  width: 197px;
  height: 38px;
  object-fit: contain;

  &:active {
    opacity: 0.8;
  }
`;
