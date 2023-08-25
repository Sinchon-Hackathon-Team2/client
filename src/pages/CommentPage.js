import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";

//components
import Song from "../components/Song";
import Comments from "../components/Comments";

//context
// import { useAuth } from "../contexts/AuthContext";

const CommentPage = () => {
  const navigate = useNavigate();

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
      <CommentInput placeholder="내용을 입력해주세요." />
    </Container>
  );
};

export default CommentPage;

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

const CommentInput = styled.input`
  width: 351px;

  color: white;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
