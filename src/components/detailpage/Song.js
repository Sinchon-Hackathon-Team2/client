import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//img
import ex from "../../images/ex.svg";

//context
// import { useAuth } from "..//../../contexts/AuthContext";

const Song = ({ title, author }) => {
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
        <ArticleImage src={ex} />
        <TextContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </TextContainer>
      </Box>
    </>
  );
};

export default Song;

const Box = styled.div`
  display: flex;
  flex-direction: flex-start;
  padding: 10px 0px;

  align-items: center;
`;

const ArticleImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 4px;
`;

const TextContainer = styled.div`
  margin: 0px 10px;
`;

const Title = styled.div`
  color: #fff;
  margin: 5px 0px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const Author = styled.div`
  color: #bdb4b4;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
