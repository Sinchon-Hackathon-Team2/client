import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//img
import ex from "../../images/ex.svg";

//context
// import { useAuth } from "..//../../contexts/AuthContext";

const Comments = ({ userName, comment }) => {
  //   const { BASE_URL } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <UserContainer>
            <div style={{ display: "flex" }}>
              <ArticleImage src={ex} />
              <UserName>{userName}</UserName>
            </div>
            <Del>삭제</Del>
          </UserContainer>
          <Comment>{comment}</Comment>
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
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Del = styled.div`
  color: var(--white, var(--white-text-color, #fff));
  text-align: right;

  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
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
