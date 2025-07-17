import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LikeDisabled from "../../assets/images/like/LikeDisabled.png";
import BottomMenu from "../../components/common/BottomMenu/BottomMenu";

const videos = [
  {
    id: 1,
    backgroundImage:
      "url('https://i.pinimg.com/236x/22/d0/f4/22d0f468fae0323aa854b54bd6128075.jpg')",
    profileImage:
      "https://i.pinimg.com/236x/22/d0/f4/22d0f468fae0323aa854b54bd6128075.jpg",
    profileName: "닉네임1",
    caption: "계란찜은 이렇게 만들면 되는거에요",
    likeNum: 1004,
  },
  {
    id: 2,
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdhoOEhflpa6Q_Cff4X90EteqzMKAjiPfkA&s')",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdhoOEhflpa6Q_Cff4X90EteqzMKAjiPfkA&s",
    profileName: "닉네임2",
    caption: "맛있는 김치찌개 비법 대공개!",
    likeNum: 2300,
  },
  {
    id: 3,
    backgroundImage:
      "url('https://i.pinimg.com/originals/50/4e/25/504e25328e621d6dc4e2d21e99667b4a.jpg')",
    profileImage:
      "https://i.pinimg.com/originals/50/4e/25/504e25328e621d6dc4e2d21e99667b4a.jpg",
    profileName: "닉네임3",
    caption: "초간단 샌드위치 만들기",
    likeNum: 500,
  },
];

function Tips() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeout = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();

    if (scrollTimeout.current) return; // 스크롤 딜레이 처리

    if (e.deltaY > 0) {
      // 아래로 스크롤 -> 다음 영상
      setCurrentIndex((prev) => Math.min(prev + 1, videos.length - 1));
    } else if (e.deltaY < 0) {
      // 위로 스크롤 -> 이전 영상
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 800); // 0.8초 간격 제한
  };

  // 모바일 터치 이벤트로도 가능하게 추가하려면 추후 구현 가능

  return (
    <Wrapper onWheel={handleWheel}>
      <Container
        style={{ backgroundImage: videos[currentIndex].backgroundImage }}
      >
        <BottomBar>
          <VideoInfo>
            <ProfileBox>
              <ProfileImage src={videos[currentIndex].profileImage} />
              <ProfileName>{videos[currentIndex].profileName}</ProfileName>
            </ProfileBox>
            <Caption>{videos[currentIndex].caption}</Caption>
          </VideoInfo>
          <LikeBox>
            <Icon src={LikeDisabled} />
            <LikeNum>{videos[currentIndex].likeNum}</LikeNum>
          </LikeBox>
        </BottomBar>
      </Container>
      <BottomMenu />
    </Wrapper>
  );
}

export default Tips;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 83px;
  overflow: hidden; /* 스크롤바 숨김 */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
`;

const BottomBar = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 40px 20px 24px;
  background-image: linear-gradient(to bottom, transparent, black);
`;

const VideoInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const ProfileName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LikeNum = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: white;
`;

const Caption = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;
