import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import DetailPage from "./pages/DetailPage";
import CommentPage from "./pages/CommentPage";
import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import CreatePlayList from "./page/CreatePlayList";

import Header from "./components/Header";



function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path={"/detail"} element={<DetailPage />}/>
          <Route path={"/comment"} element={<CommentPage />}/>
          <Route path={"/initial"} element={<InitialPage />}/>
          <Route path={"/login"} element={<LoginPage />}/>
          <Route path={"/signup"} element={<SignupPage />}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/createPlayList" element={<CreatePlayList />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  background-color: #202329;
  margin: 0 auto;
`;
