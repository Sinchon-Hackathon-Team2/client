import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import DetailPage from "./pages/DetailPage";
import CommentPage from "./pages/CommentPage";
import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path={"/detail"} element={<DetailPage />}></Route>
          <Route path={"/comment"} element={<CommentPage />}></Route>
          <Route path={"/initial"} element={<InitialPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
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
