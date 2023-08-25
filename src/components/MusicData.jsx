import styled from "styled-components";
import preview from "../images/preview.png";
import check from "../images/check.png";
function MusicData() {
  return (
    <Container>
      <img src={preview} alt="" />
      <MusicInfoContainer>
        <MusicTitle>
          CLAP!<span>TREASURE(트레저)</span>
        </MusicTitle>
        <img src={check} alt="" />
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
  }
`;
const MusicInfoContainer = styled.div`
  height: 46px;
  width: 200px;
  display: flex;
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
