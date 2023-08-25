import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import CreatePlayList from "./page/CreatePlayList";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
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
