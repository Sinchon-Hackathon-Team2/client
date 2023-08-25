import React from "react";
import styled from "styled-components";
import { useState } from "react";
import plus from "../images/plus.png";
import { useNavigate } from "react-router-dom";
import Header from "../components/HeaderForCreatePlayList";
import SelectedMusicData from "../components/SelectedMusicData";
import wonderland from "../images/wonderland.png";
import preview from "../images/preview.png";
import darari from "../images/darari.jpg";
function CreatePlayList() {
  const [ballade, setBallade] = useState(false);
  const [dance, setDance] = useState(false);
  const [rap, setRap] = useState(false);
  const [RB, setRB] = useState(false);
  const [indie, setIndie] = useState(false);
  const handleCategoryClick1 = () => {
    setBallade((prev) => !prev);
  };
  const handleCategoryClick2 = () => {
    setDance((prev) => !prev);
  };
  const handleCategoryClick3 = () => {
    setRap((prev) => !prev);
  };
  const handleCategoryClick4 = () => {
    setRB((prev) => !prev);
  };
  const handleCategoryClick5 = () => {
    setIndie((prev) => !prev);
  };
  const movePage = useNavigate();
  const moveToSelectMusic = () => {
    movePage("/selectMusic");
  };
  const [randomColor, setRandomColor] = useState("");
  const changeColor = () => {
    setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };
  return (
    <Container>
      <Header title={"Playlist"} headerRight={"완료"} />
      <PhotoUploadBox color={randomColor} onClick={changeColor}>
        <ColorInfo>색을 변경하려면 클릭하세요.</ColorInfo>
      </PhotoUploadBox>
      <OverflowContainer>
        <CategoryContainer>
          <CategoryBtn1
            width="68px"
            onClick={handleCategoryClick1}
            isSelected={ballade}
          >
            #발라드
          </CategoryBtn1>
          <CategoryBtn2
            width="57px"
            onClick={handleCategoryClick2}
            isSelected={dance}
          >
            #댄스
          </CategoryBtn2>
          <CategoryBtn3
            width="73px"
            onClick={handleCategoryClick3}
            isSelected={rap}
          >
            #랩/힙합
          </CategoryBtn3>
          <CategoryBtn4
            width="88px"
            onClick={handleCategoryClick4}
            isSelected={RB}
          >
            #R&B/Soul
          </CategoryBtn4>
          <CategoryBtn5
            width="80px"
            onClick={handleCategoryClick5}
            isSelected={indie}
          >
            #인디음악
          </CategoryBtn5>
        </CategoryContainer>
      </OverflowContainer>
      <TitleInputContainer>
        <TitleInput placeholder="플레이리스트 제목을 작성해 주세요."></TitleInput>
        <Hrdiv />
        <Hrdiv2 />
      </TitleInputContainer>
      <AddMusicContainer onClick={moveToSelectMusic}>
        <img src={plus} alt="" />
        <AddMusic>곡 추가하기</AddMusic>
      </AddMusicContainer>
      <MusicDataContainer>
        <MusicListInfoContainer>
          <Info1>내가 추가한 곡</Info1>
          <Info2>3곡</Info2>
        </MusicListInfoContainer>
        <SelectedMusicData
          img={preview}
          title="CLAP!"
          singer="TREASURE(트레저)"
        />
        <SelectedMusicData
          img={wonderland}
          title="WONDERLAND"
          singer="TREASURE(트레저)"
        />
        <SelectedMusicData
          img={darari}
          title="다라리"
          singer="TREASURE(트레저)"
        />
        <SelectedMusicData />
        <SelectedMusicData />
        <SelectedMusicData />
      </MusicDataContainer>
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
  cursor: pointer;
  background-color: ${(props) => props.color};
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
  overflow: hidden;
`;
const CategoryBtn1 = styled.button`
  width: ${(props) => props.width};
  height: 25px;
  background-color: #202329;
  color: ${(props) => (props.isSelected ? "#34AFF4" : "#4c4e53")};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  border: 1px solid;
  cursor: pointer;
`;
const CategoryBtn2 = styled.button`
  width: ${(props) => props.width};
  height: 25px;
  background-color: #202329;
  color: ${(props) => (props.isSelected ? "#34AFF4" : "#4c4e53")};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  border: 1px solid;
  cursor: pointer;
`;
const CategoryBtn3 = styled.button`
  width: ${(props) => props.width};
  height: 25px;
  background-color: #202329;
  color: ${(props) => (props.isSelected ? "#34AFF4" : "#4c4e53")};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  border: 1px solid;
  cursor: pointer;
`;
const CategoryBtn4 = styled.button`
  width: ${(props) => props.width};
  height: 25px;
  background-color: #202329;
  color: ${(props) => (props.isSelected ? "#34AFF4" : "#4c4e53")};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  border: 1px solid;
  cursor: pointer;
`;
const CategoryBtn5 = styled.button`
  width: ${(props) => props.width};
  height: 25px;
  background-color: #202329;
  color: ${(props) => (props.isSelected ? "#34AFF4" : "#4c4e53")};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  border: 1px solid;
  cursor: pointer;
`;
const OverflowContainer = styled.div`
  width: 393px;
  height: 50px;
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
  font-size: 20px;
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
    font-size: 20px;
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
  margin-bottom: 15px;
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
  position: relative;
  bottom: 2px;
  img {
    margin-right: 5px;
  }
`;
const MusicDataContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-left: 20px;
  padding-right: 20px;
`;
const MusicListInfoContainer = styled.div`
  width: 340px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
`;
const Info1 = styled.div`
  color: var(--white-text-color, #fff);
  width: 98px;
  /* Body1 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;
const Info2 = styled.div`
  color: var(--gray-2, #bdb4b4);
  text-align: right;
  width: 43px;
  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const ColorInfo = styled.div`
  color: lightgray;
  background-color: transparent;
  font-size: 13px;
`;
