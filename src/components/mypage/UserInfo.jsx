import React from 'react';
import { styled } from 'styled-components';

function UserInfo(props) {
    return (
        <Container>
            <Box>
                <Profile></Profile>
                <Follower>
                    <Num>2.2만</Num>
                    <Title>팔로워</Title>
                </Follower>
                <Following>
                    <Num>8</Num>
                    <Title>팔로잉</Title>
                </Following>
                <Playlist>
                    <Num>10</Num>
                    <Title>플레이리스트</Title>
                </Playlist>
            </Box>
            <SubBox>
                <UserName>
                    정대만
                </UserName>
                <UserIntro>
                    안녕하세요 :) 멋사대학교 학생분들과 제 취향을 공유하고 싶어요~ 제 취향을 여러분께 공유합니다~
                </UserIntro>
            </SubBox>
            
        </Container>
    );
}

const Container = styled.div`
margin-left: 10px;
margin-right: 10px;
margin-top: 30px;
    height: 300px;
    background-color: yellow;
    /* display: flex;
    justify-content: space-between; */
`;
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: skyblue;
`
const SubBox = styled.div`
    background-color: red;
    margin-top: 20px;
    margin-bottom: 10px;
`

const UserName = styled.div`
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
`

const UserIntro = styled.div`
font-size: 14px;
line-height: 150%;
`

const Profile = styled.div`
    width: 101px;
    height: 101px;
    background-color: #d9d9d9;
    border-radius: 50%;
`;

const Num = styled.div`
    font-size: 20px;
    font-weight: 700;
`

const Title = styled.div`
    font-size: 14px;
`

const Follower = styled.div`
    height: 101px;
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const Following = styled.div`
height: 101px;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Playlist = styled.div`
height: 101px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default UserInfo;