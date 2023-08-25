import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logo from "../images/Logo.svg";

const SignupPage = () => {
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [nickname, setNickname] = useState("");
  const [schoolName, setSchoolName] = useState("서강대학교");
  const [schoolEmail, setSchoolEmail] = useState("");

  const handleCheckToggle = () => {
    setCheck((prevState) => !prevState);
  };

  const handleVerificationCodeChange = (e) => {
    const value = e.target.value;

    // 숫자만 입력 가능하도록 정규식을 사용하여 검증
    if (/^\d{0,4}$/gm.test(value)) {
      setVerificationCode(value);
    }
  };

  const isBtnDisabled = check
    ? !nickname
    : !schoolName || !schoolEmail || !verificationCode;

  return (
    <>
      {check ? (
        <Container>
          <Logo src={logo} />
          <Explain>우리끼리 공유하는 음악 취향</Explain>
          <Explain2>
            서비스 이용을 위해 <br /> 학교 인증을 진행해주세요.
          </Explain2>
          <InputWrapper>
            <Ex>닉네임</Ex>
            <Input
              type="text"
              placeholder="닉네임을 작성해주세요"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
            <Btn onClick={() => navigate("/initial")} disabled={isBtnDisabled}>
              회원가입
            </Btn>
          </InputWrapper>
        </Container>
      ) : (
        <Container>
          <Logo src={logo} />
          <Explain>우리끼리 공유하는 음악 취향</Explain>
          <Explain2>
            서비스 이용을 위해 <br /> 학교 인증을 진행해주세요.
          </Explain2>
          <InputWrapper>
            <Ex>학교 이름</Ex>
            <Select
              onChange={(e) => setSchoolName(e.target.value)}
              value={schoolName}
            >
              <option>서강대학교</option>
              <option>연세대학교</option>
              <option>이화여자대학교</option>
              <option>홍익대학교</option>
            </Select>
            <Ex>학교 이메일</Ex>
            <Input
              type="email"
              placeholder="학교 이메일을 작성해주세요"
              onChange={(e) => setSchoolEmail(e.target.value)}
              value={schoolEmail}
            />
            <Ex>인증 번호</Ex>
            <Input
              type="text"
              placeholder="위 이메일로 보내진 인증번호를 작성해주세요"
              value={verificationCode}
              onInput={handleVerificationCodeChange}
            />
            <Btn onClick={handleCheckToggle} disabled={isBtnDisabled}>
              인증완료
            </Btn>
          </InputWrapper>
        </Container>
      )}
    </>
  );
};

export default SignupPage;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Ex = styled.div`
  color: #aeaeae;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
`;

const Select = styled.select`
  height: 49px;
  padding: 10px 10px;
  border-radius: 9px;
  border: 1px solid var(--gray-2, #bdb4b4);
  background: #fff;
  outline: none;

  margin-top: 10px;
  margin-bottom: 17px;
`;

const Input = styled.input`
  display: inline-flex;
  height: 30px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 17px;
  color: var(--black-1, #202329);

  padding-left: 10px;

  border-radius: 9px;
  border: 1px solid var(--gray-2, #bdb4b4);
  background: #fff;
  outline: none;

  font-family: "Pretendard-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 500;

  &::placeholder {
    color: var(--gray-2, #bdb4b4);
  }
`;

const Logo = styled.img`
  margin-bottom: 26px;
  margin-top: 142px;
`;

const Explain = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 155%; /* 21.7px */
  letter-spacing: -0.28px;
  text-align: center;
`;

const Explain2 = styled.div`
  color: #aeaeae;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%; /* 21.7px */
  letter-spacing: -0.28px;
  text-align: center;

  margin-top: 13px;
`;

const Btn = styled.button`
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-size: 15px;
  font-weight: 700;
  color: var(--white, #fff);

  width: 336px;
  height: 49px;
  padding: 10px 20px;
  text-align: center;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  border-radius: 40px;
  background: ${(props) =>
    props.disabled ? "var(--gray-3, #BDB4B4)" : "var(--main-1, #34aff4)"};
  border: none;
  cursor: pointer;
`;
