//loginpage
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//image
import logo from "../images/Logo.svg";

//context
// import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  //   // 리렌더링용 변수
  //   const [render, setRender] = useState(0);
  //   // 받을 변수들
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  //   //사용자 상태 관리
  //   const { login } = useAuth();

  //   const BASE_URL = "https://juliaheo.pythonanywhere.com/";
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     await axios
  //       .post(`${BASE_URL}account/login/`, {
  //         username: username,
  //         password: password,
  //       })
  //       .then((response) => {
  //         //로그인 성공했을 때
  //         setRender(render + 1);
  //         navigate(`/`);

  //         // 로그인 로직 후 토큰을 설정
  //         login(
  //           response.data.data.id,
  //           response.data.data.nickname,
  //           response.data.data.access_token
  //         );

  //         console.log(response.data.data);
  //       })
  //       .catch((error) => console.log(error, username, password));
  //   };

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
          <Select>
            <option>서강대학교</option>
            <option>연세대학교</option>
            <option>이화여자대학교</option>
            <option>홍익대학교</option>
          </Select>
          <Ex>학교 이메일</Ex>
          <Input type="email" placeholder="학교 이메일을 작성해주세요" />
          <LoginBtn
            onClick={() => {
              navigate("/");
            }}
          >
            로그인
          </LoginBtn>
          <Signup
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입하기
          </Signup>
        </InputWrapper>
      </Container>
    </>
  );
};

export default LoginPage;

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

  font-family: "Pretendard-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
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
  margin-top: 142px;
  margin-bottom: 26px;
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

const LoginBtn = styled.button`
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
  background: var(--main-1, #34aff4);
  cursor: pointer;
`;

const Signup = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  margin-top: 19px;
  margin-left: 130px;
  cursor: pointer;
`;
