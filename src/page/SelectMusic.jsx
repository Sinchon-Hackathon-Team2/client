import React from "react";
import styled from "styled-components";

function SelectMusic() {
  return (
    <Container>
      <SearchContainer>
        <TitleInput placeholder="검색"></TitleInput>
      </SearchContainer>
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
  height: 150px;
  border: 2px solid pink;
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
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 181%; /* 39.82px */
  letter-spacing: 0.44px;
  &:focus {
    outline: none;
  }
  &:placeholder-shown {
    color: var(--main-1, #34aff4);

    /* Body2 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;
