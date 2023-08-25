import "./App.css";
import styled from "styled-components";
import SelectMusic from "./page/SelectMusic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import CommentPage from "./pages/CommentPage";
import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import CreatePlayList from "./page/CreatePlayList";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/createPlayList" element={<CreatePlayList />} />
          <Route path="/selectMusic" element={<SelectMusic />} />
          <Route path={"/detail/:post_id"} element={<DetailPage />} />
          <Route path={"/comment"} element={<CommentPage />} />
          <Route path={"/initial"} element={<InitialPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
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
