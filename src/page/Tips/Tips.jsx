import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LikeDisabled from "../../assets/images/like/LikeDisabled.png";
import LikeEnabled from "../../assets/images/like/LikeEnabled.png";
import BottomMenu from "../../components/common/BottomMenu/BottomMenu";
import { useGetVideos } from "../../apis/video";
import ReactPlayer from "react-player";

function Tips() {
  const { data } = useGetVideos();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeout = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();

    if (scrollTimeout.current) return; // 스크롤 딜레이 처리

    if (e.deltaY > 0) {
      // 아래로 스크롤 -> 다음 영상
      setCurrentIndex((prev) => Math.min(prev + 1, data.videos.length - 1));
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
      {data && data.videos[currentIndex] && (
        <Container>
          <BottomBar>
            <VideoInfo>
              <ProfileBox>
                <ProfileImage src={data.videos[currentIndex].writerProfile} />
                <ProfileName>{data.videos[currentIndex].writer}</ProfileName>
              </ProfileBox>
              <Caption>{data.videos[currentIndex].title}</Caption>
            </VideoInfo>
            <LikeBox>
              <Icon src={data.videos[currentIndex].isLiked ? LikeEnabled : LikeDisabled} />
              <LikeNum>{data.videos[currentIndex].likeCnt}</LikeNum>
            </LikeBox>
          </BottomBar>
        </Container>
      )}
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
