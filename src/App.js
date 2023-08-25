import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import CreatePlayList from "./page/CreatePlayList";
import SelectMusic from "./page/SelectMusic";
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/createPlayList" element={<CreatePlayList />} />
          <Route path="/selectMusic" element={<SelectMusic />} />
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
