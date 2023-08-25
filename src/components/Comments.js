import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//img
import ex from "../images/ex.svg";

//context
// import { useAuth } from "..//../../contexts/AuthContext";

const Comments = ({ article }) => {
  //   const { BASE_URL } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Box>
        {/* <ArticleImage src={`${BASE_URL}${article.post_image}`} />
        <TextContainer>
          <Title>{article.title}</Title>
          <ArticleAuthor>by. {article.author}</ArticleAuthor>
        </TextContainer> */}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <UserContainer>
            <ArticleImage src={ex} />
            <UserName>강백호</UserName>
          </UserContainer>
          <Comment>저랑 취향이 비슷하시네요~</Comment>
        </div>
      </Box>
    </>
  );
};

export default Comments;

const Box = styled.div`
  display: flex;
  flex-direction: flex-start;
  padding: 10px 0px;

  align-items: center;
  border-bottom: 1px solid #4c4e53;
`;

const ArticleImage = styled.img`
  width: 29px;
  height: 29px;
  border-radius: 50%;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserName = styled.div`
  color: #fff;
  margin: 5px 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const Comment = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  margin-top: 9px;
  margin-bottom: 5px;
`;
