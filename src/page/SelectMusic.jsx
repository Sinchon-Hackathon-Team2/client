import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import search from "../images/searchIcon.svg";
import MusicData from "../components/MusicData";

function SelectMusic() {
  return (
    <Container>
      <Header title={"playlist"} headerRight={"완료"} />
      <SearchContainer>
        <FlexContainer>
          <TitleInput placeholder="검색"></TitleInput>
          <img src={search} alt="" />
        </FlexContainer>
        <Hrdiv />
      </SearchContainer>
      <MusicDataContainer>
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
        <MusicData />
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
