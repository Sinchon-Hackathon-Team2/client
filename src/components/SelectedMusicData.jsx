import styled from "styled-components";

import check from "../images/check.svg";
import notCheck from "../images/notCheck.svg";
function SelectedMusicData({ img, title, singer }) {
  return (
    <Container>
      <img src={img} alt="" />
      <MusicInfoContainer>
        <MusicTitle>
          {title}
          <span>{singer}</span>
        </MusicTitle>
      </MusicInfoContainer>
    </Container>
  );
}
export default SelectedMusicData;
const Container = styled.div`
  width: 372px;
  height: 46px;
  margin-top: 15px;
  display: flex;
  margin-bottom: 15px;
  img {
    border-radius: 10px;
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
