import React from 'react';
import { styled } from 'styled-components';
import profileImg from '../../images/profile.png';
function UserInfo(props) {
    return (
        <Container>
            <Box>
                <Profile>
                    <img src={profileImg} alt="프로필이미지"/>
                </Profile>
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
margin-left: 20px;
margin-right: 20px;
margin-top: 30px;
    height: 220px;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;

`;

const SubBox = styled.div`
    margin-top: 20px;
`;

const UserName = styled.div`
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
color: white;
`;

const UserIntro = styled.div`
font-size: 14px;
line-height: 150%;
color: white;
`;

const Profile = styled.div`
    width: 101px;
    height: 101px;
    border-radius: 50%;
`;

const Num = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: white;
`

const Title = styled.div`
    font-size: 14px;
    color: white;
`

const Follower = styled.div`
    height: 101px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const Following = styled.div`
height: 101px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Playlist = styled.div`
height: 101px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default UserInfo;