import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";

//components
import Song from "../components/Song";
import Comments from "../components/Comments";
//images
import likes_on from "../images/likes_on.svg";
import likes_off from "../images/likes_off.svg";
import ex from "../images/ex.svg";

//context
// import { useAuth } from "../contexts/AuthContext";

const DetailPage = () => {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeToggle = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  // GET: 북마크한 아티클
  //   const { authToken, BASE_URL } = useAuth();
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   const [data, setData] = useState([]);
  //   const getData = () => {
  //     axios
  //       .get(`${BASE_URL}mypage/bookmark/`, {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       })
  //       .then((response) => {
  //         setData(response.data.data.bookmarkPost);
  //         console.log(response.data.data.bookmarkPost);
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "북마크 데이터를 불러오는 중 오류가 발생했습니다.",
  //           error
  //         );
  //       });
  //   };

  return (
    <Container>
      <Header>test</Header>

      <div style={{ position: "relative" }}>
        <PlaylistImg src={ex} />
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
            <Num>댓글 2</Num>
            <Num>좋아요 3</Num>
          </div>
          <Like
            src={isLiked ? likes_on : likes_off}
            onClick={handleLikeToggle}
          />
        </ResponseDiv>
        <BookMarkList>
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          {/* {data &&
          data.map((article) => (
            <TodayArticle
              key={article.post_id}
              article={article}
              BASE_URL={BASE_URL}
            />
          ))} */}
        </BookMarkList>
        <CommentBox>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CommentTitle>댓글 2</CommentTitle>
            <CommentMaking
              onClick={() => {
                navigate("/comment");
              }}
            >
              댓글 달기
            </CommentMaking>
          </div>
          <CommentList>
            <Comments />
            <Comments />
            {/* {data &&
            data.map((article) => (
              <TodayArticle
                key={article.post_id}
                article={article}
                BASE_URL={BASE_URL}
              />
            ))} */}
          </CommentList>
        </CommentBox>
      </BottomBar>
    </Container>
  );
};

export default DetailPage;

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
const Header = styled.div`
  color: #fff;
  width: 393px;
  height: 127px;
  background: #202329;
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

const BookMarkList = styled.div`
  margin: 30px 0px;
`;
