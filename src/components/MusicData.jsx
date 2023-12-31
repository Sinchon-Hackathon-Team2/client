import React, { useState, useEffect } from "react";
import styled from "styled-components";
import preview from "../images/preview.png";
import check from "../images/check.svg";
import notCheck from "../images/notCheck.svg";

function MusicData({ title, thumbnail, channelTitle, url }) {
  const [checked, setChecked] = useState(false);
  const handleToggleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const moveTourl = () => {
    window.location.href = `${url}`;
  };
  return (
    <Container onClick={moveTourl}>
      <img src={thumbnail} alt="" />
      <MusicInfoContainer>
        <MusicTitle>
          {title.substr(0, 20)}
          <span>{channelTitle}</span>
        </MusicTitle>
        <img
          src={checked ? check : notCheck}
          alt=""
          style={{ alignItems: "center", position: "relative", top: "5px" }}
          onClick={handleToggleCheck}
        />
      </MusicInfoContainer>
    </Container>
  );
}
export default MusicData;
const Container = styled.div`
  width: 372px;
  height: 46px;
  margin-top: 15px;
  display: flex;
  margin-bottom: 15px;
  img {
    border-radius: 10px;
    width: 46px;
    height: 46px;
  }
`;
const MusicInfoContainer = styled.div`
  height: 46px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  img {
    width: 25px;
    height: 25px;
  }
`;
const MusicTitle = styled.div`
  color: var(--white-text-color, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #bdb4b4;

    /* Body1 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;
