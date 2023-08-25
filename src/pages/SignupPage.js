import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../images/Logo.svg";

const SignupPage = () => {
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const [code, setVerificationCode] = useState("");
  const [nickName, setNickname] = useState("");
  const [univName, setSchoolName] = useState("서강대학교");
  const [email, setSchoolEmail] = useState("");

  const handleVerificationCodeChange = (e) => {
    const value = e.target.value;

    // 숫자만 입력 가능하도록 정규식을 사용하여 검증
    if (/^\d{0,5}$/gm.test(value)) {
      setVerificationCode(value);
    }
  };

  const handleCheckToggle = () => {
    // 인증 요청 버튼을 눌렀을 때 실행될 함수
    console.log("hi");
    try {
      const response = axios.post("https://testmate.o-r.kr/account/request/", {
        email,
        univName,
      });

      console.log("인증 요청 성공:", response);
    } catch (error) {
      console.error("인증 요청 에러:", error);
    }
  };

  const handleSignup = () => {
    // 회원가입 버튼을 눌렀을 때 실행될 함수
    try {
      const response = axios.post("https://testmate.o-r.kr/account/check/", {
        email,
        univName,
        code,
        nickName,
      });

      console.log("회원가입 성공:", response.data);

      // 회원가입이 성공하면 초기 페이지로 이동합니다.
      navigate("/initial");
    } catch (error) {
      console.error("회원가입 에러:", error);
    }
  };
  return (
    <>
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
            value={univName}
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
            value={email}
          />
          <Btn onClick={handleCheckToggle}>인증요청</Btn>
          <Ex>인증 번호</Ex>
          <Input
            type="text"
            placeholder="위 이메일로 보내진 인증번호를 작성해주세요"
            value={code}
            onInput={handleVerificationCodeChange}
          />
          <Ex>닉네임</Ex>
          <Input
            type="text"
            placeholder="닉네임을 작성해주세요"
            onChange={(e) => setNickname(e.target.value)}
            value={nickName}
          />
          <Btn onClick={handleSignup}>회원가입</Btn>
        </InputWrapper>
      </Container>
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

  margin-bottom: 15px;

  border-radius: 40px;
  background: var(--main-1, #34aff4);
  border: none;
  cursor: pointer;
`;
