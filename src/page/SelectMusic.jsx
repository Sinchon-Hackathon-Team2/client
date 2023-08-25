import React from "react";
import styled from "styled-components";
import Header from "../components/HeaderForSelectMusic";
import search from "../images/searchIcon.svg";
import MusicData from "../components/MusicData";
import { useState } from "react";
import axios from "axios";

function SelectMusic() {
  const [keyword, setKeyword] = useState("");
  const [musicData, setMusicData] = useState([]);
  const getSearch = async () => {
    try {
      const response = await axios.post(
        "https://testmate.o-r.kr/post/searchYoutube/",
        { word: keyword }
      );
      setMusicData(response.data);
    } catch (error) {
      console.log("sending error");
    }
  };
  //console.log("data:", data);
  console.log("data:", musicData);
  return (
    <Container>
      <Header title={"playlist"} headerRight={"완료"} />
      <SearchContainer>
        <FlexContainer>
          <TitleInput
            placeholder="검색"
            onChange={(e) => setKeyword(e.target.value)}
          ></TitleInput>
          <img src={search} alt="" onClick={getSearch} />
        </FlexContainer>
        <Hrdiv />
      </SearchContainer>
      <MusicDataContainer>
        {musicData.map((item, idx) => (
          <MusicData
            key={idx}
            title={item.title}
            thumbnail={item.thumbnail}
            channelTitle={item.channelTitle}
            url={item.url}
          ></MusicData>
        ))}
      </MusicDataContainer>
    </Container>
  );
}
export default SelectMusic;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const TitleInput = styled.input`
  width: 321px;
  height: 40px;
  display: block;
  background-color: #202329;
  border: 0;
  padding: 0;
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  line-height: 181%; /* 39.82px */
  letter-spacing: 0.44px;
  &:focus {
    outline: none;
  }
  &:placeholder-shown {
    color: #34aff4;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
const Hrdiv = styled.div`
  width: 351px;
  height: 1px;
  background: #34aff4;
`;
const MusicDataContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-left: 20px;
  padding-right: 20px;
`;
