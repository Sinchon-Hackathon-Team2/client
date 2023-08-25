
import React from "react";
import { styled } from "styled-components";
import Header from "../components/Header";
import UserInfo from "../components/mypage/UserInfo";
import ShareProfileBtn from "../components/mypage/ShareProfileBtn";
import UserPlaylist from "../components/mypage/UserPlaylist";

function MyPage(props) {
  return (
    <Container>
      <Header title={"Profile"} headerRight={""} />
      <Content>
        <UserInfo />
        <ShareProfileBtn />
        <UserPlaylist showCreateButton={true} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  /* height: 852px;
overflow-y: scroll;
display: none; */
`;
const Content = styled.div`
  overflow-y: scroll;
  height: 725px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default MyPage;
