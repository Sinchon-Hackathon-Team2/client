import React from "react";
import styled from "styled-components";
import photoIcon from "../img/photo.png";
import plus from "../img/plus.png";

function CreatePlayList() {
  return (
    <Container>
      <PhotoUploadBox>
        <img src={photoIcon} alt="" />
      </PhotoUploadBox>
      <OverflowContainer>
        <CategoryContainer>
          <CategoryBtn width="68px">#발라드</CategoryBtn>
          <CategoryBtn width="57px">#댄스</CategoryBtn>
          <CategoryBtn width="73px">#랩/힙합</CategoryBtn>
          <CategoryBtn width="88px">#R&B/Soul</CategoryBtn>
          <CategoryBtn width="80px">#인디음악</CategoryBtn>
        </CategoryContainer>
      </OverflowContainer>
      <TitleInputContainer>
        <TitleInput placeholder="플레이리스트 제목을 작성해 주세요."></TitleInput>
        <Hrdiv />
        <Hrdiv2 />
      </TitleInputContainer>
      <AddMusicContainer>
        <img src={plus} alt="" />
        <AddMusic>곡 추가하기</AddMusic>
      </AddMusicContainer>
    </Container>
  );
}

export default CreatePlayList;
const Container = styled.div`
  width: 393px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const PhotoUploadBox = styled.div`
  width: 393px;
  height: 224px;
  background-color: #5f5dc6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryContainer = styled.div`
  width: 420px;
  height: 25px;
  display: flex;
  justify-content: space-around;

  margin-left: 10px;
  overflow: scroll;
`;
const CategoryBtn = styled.button`
  width: ${(props) => props.width};
  height: 25px;
  background-color: #202329;
  color: #4c4e53;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  border: 1px solid;
  cursor: pointer;
`;
const OverflowContainer = styled.div`
  width: 393px;
  height: 25px;
  overflow: scroll;
  margin-top: 26px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TitleInputContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 26px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const TitleInput = styled.input`
  width: 351px;
  height: 40px;
  display: block;
  background-color: #202329;
  border: 0;
  padding: 0;
  color: white;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 181%; /* 39.82px */
  letter-spacing: 0.44px;
  &:focus {
    outline: none;
  }
  &:placeholder-shown {
    color: var(--gray-1, #4c4e53);
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 181%; /* 39.82px */
    letter-spacing: 0.44px;
  }
`;
const Hrdiv = styled.div`
  width: 351px;
  height: 1px;
  opacity: 0.2;
  background: #b1b5bd;
`;
const Hrdiv2 = styled.div`
  width: 351px;
  height: 1px;
  opacity: 0.2;
  background: #b1b5bd;
  margin-top: 40px;
`;
const AddMusicContainer = styled.div`
  margin-top: 26px;
  width: 100%;
  height: 15px;
  display: flex;
  padding-left: 25px;
  align-items: baseline;
  img {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const AddMusic = styled.div`
  color: var(--main-1, #34aff4);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.32px;
  text-decoration-line: underline;

  img {
    margin-right: 5px;
  }
`;