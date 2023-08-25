//loginpage
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//image
import logo from "../images/Logo.svg";

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Logo src={logo} />
        <Explain>우리끼리 공유하는 음악 취향</Explain>
        <Explain2>회원가입이 완료되었습니다!</Explain2>
        <InputWrapper>
          <Login
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인 하러가기
          </Login>
        </InputWrapper>
      </Container>
    </>
  );
};

export default InitialPage;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #202329;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Login = styled.div`
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-size: 15px;
  font-weight: 700;
  color: var(--white, #fff);

  width: 299px;
  height: 30px;
  padding: 10px 20px;
  text-align: center;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  background: var(--main-1, #34aff4);
  cursor: pointer;
`;

const Logo = styled.img`
  margin-top: 289px;
  margin-bottom: 26px;
`;

const Name = styled.img`
  margin-top: 22px;
  margin-bottom: 10px;
  width: 84px;
  height: 65px;
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
  margin-bottom: 70px;
`;
