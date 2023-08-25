import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";

//components
import Song from "../components/detailpage/Song";
import Comments from "../components/detailpage/Comments";
import Header from "../components/Header";

//images
import likes_on from "../images/likes_on.svg";
import likes_off from "../images/likes_off.svg";
import ex from "../images/ex.svg";

//context
// import { useAuth } from "../contexts/AuthContext";

const PlayListDetail = () => {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeToggle = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  // 더미 댓글 데이터
  const commentData = [
    { userName: "강백호", comment: "저랑 취향이 비슷하시네요~" },
    { userName: "서태웅", comment: "저와 한 번 심도 깊은 대화를 나눠보시죠" },
  ];
  const commentNum = commentData.length;

  // 더미 노래 데이터
  const songData = [{ title: "Clap!", author: "TREASURE(트레저)" }];

  return (
    <Container>
      <Header title={"Playlist"} headerRight={"Profile"} />
      <div style={{ position: "relative" }}>
        <PlaylistImg />
        <UserProfile src={ex} />
        <UserName>강백호</UserName>
      </div>
      <BottomBar>
        <Tag>#댄스 #랩/힙합</Tag>
        {/* <TagBox>
            {article.hashtag.map((tag, tagIndex) => (
              <Tag key={tagIndex}>#{tag.hashtag}</Tag>
            ))}
          </TagBox> */}
        <Title>20230825 오늘의 감성 멋대 학생들과 공유~</Title>
        <ResponseDiv>
          <div style={{ display: "flex" }}>
            <Num>댓글 {commentNum}</Num>
            <Num>좋아요 3</Num>
          </div>
          <Like
            src={isLiked ? likes_on : likes_off}
            onClick={handleLikeToggle}
          />
        </ResponseDiv>
        <SongList>
          {songData.map((song, index) => (
            <Song key={index} title={song.title} author={song.author} />
          ))}
        </SongList>
        <CommentBox>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CommentTitle>댓글 {commentNum}</CommentTitle>
            <CommentMaking
              onClick={() => {
                navigate("/comment");
              }}
            >
              댓글 달기
            </CommentMaking>
          </div>
          <CommentList>
            {commentData.map((comment, index) => (
              <Comments
                key={index}
                userName={comment.userName}
                comment={comment.comment}
              />
            ))}
          </CommentList>
        </CommentBox>
      </BottomBar>
    </Container>
  );
};

export default PlayListDetail;

//전체 styled

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Font = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-style: normal;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;
`;
const BottomBar = styled.div`
  background: #202329;
  height: 570px;

  padding: 0px 20px;
  overflow-y: scroll;

  position: relative;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// const TagBox = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const PlaylistImg = styled.img`
  position: relative;
  z-index: 1;

  width: 393px;
  height: 201px;
  background: #c65d5d;
  border: none;
`;

const UserProfile = styled.img`
  width: 29px;
  height: 29px;
  border-radius: 50%;

  position: absolute;
  z-index: 5;
  bottom: 21px;
  left: 23px;
`;

const UserName = styled(Font)`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  position: absolute;
  z-index: 5;
  bottom: 27px;
  left: 64px;
`;

const Tag = styled(Font)`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
`;

const Title = styled(Font)`
  font-size: 22px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ResponseDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Num = styled(Font)`
  font-size: 14px;
  font-weight: 400;
  margin-right: 5px;
`;

const Like = styled.img``;

const CommentBox = styled(Font)`
  font-size: 22px;
  font-weight: 600;
`;

const CommentTitle = styled(Font)`
  font-size: 22px;
  font-weight: 600;
`;

const CommentMaking = styled(Font)`
  font-size: 16px;
  font-weight: 400;
  color: #34aff4;
  text-decoration-line: underline;
  cursor: pointer;
`;

const CommentList = styled.div`
  margin: 30px 0px;
`;

const SongList = styled.div`
  margin: 30px 0px;
`;
