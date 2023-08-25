import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import cover1 from '../../images/cover1.png';
import cover2 from '../../images/cover2.png';
import cover3 from '../../images/cover3.png';
import cover4 from '../../images/cover4.png';
import cover5 from '../../images/cover5.png';
import cover6 from '../../images/cover6.png';

function UserPlaylist(props) {
    const { showCreateButton } = props;
    const navigate = useNavigate();

    const handleCreatePlaylist = () => {
        navigate('/createPlayList');
    }

    const handleDetailPlaylist = (post_id) => {
        navigate(`/detail/${post_id}`);
    }

    const playlist = [
        {
            cover: cover1,
            title: "20230825 오늘의 감성 멋대 학생들과 공유~",
            Tag: ["#댄스", "#랩/힙합"],
        },
        {
            cover: cover2,
            title: "불꽃남자의 농구할 때 듣는 노래",
            Tag: ["#댄스", "#록/메탈"],
        },
        {
            cover: cover3,
            title: "20230824 신나는 노동요 Playlist",
            Tag: ["#댄스"],
        },
        {
            cover: cover4,
            title: "힙해지고 싶을 때 듣는 팝송",
            Tag: ["#댄스", "#랩/힙합"],
        },
        {
            cover: cover5,
            title: "적당히 좋아하는게 되니 NEWJEANS 노래 모음",
            Tag: ["#댄스"],
        },
        {
            cover: cover6,
            title: "Chillin한 감성 채워주는 플레이리스트",
            Tag: ["#댄스", "#R&B/Soul"],
        },
    ]

    return (
        <>
        <Container>
            <Title>플레이리스트</Title>
            {showCreateButton && <Button onClick={handleCreatePlaylist}>플레이리스트 만들기</Button>}
        </Container>
        <PlaylistContainer>
            {playlist.map((item, index) => (
                <SubContainer key={index} onClick={()=>handleDetailPlaylist(index)}>
                    <Cover src={item.cover} alt={`Playlist Cover ${index}`} />
                    <SubTitle>{item.title}</SubTitle>
                    <Tag>{item.Tag.join('')}</Tag>
                </SubContainer>
            ))}
        </PlaylistContainer>
        </>
    );
}

const PlaylistContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* 가로 한 줄에 2개씩 박스 배치 */
    gap: 20px;
    padding: 20px;
`;


const Container = styled.div`
margin-left: 20px;
margin-right: 20px;
display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Cover = styled.img`

`;

const Title = styled.div`
    font-size: 24px;
    color: white;
    font-weight: 700;
`;

const Button = styled.button`
    color: #34AFF4;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
`;

const SubContainer = styled.div`
cursor: pointer;
`

const SubTitle = styled.div`
margin-top: 5px;
color: white;
font-size: 16px;
`;

const Tag = styled.div`
margin-top: 10px;
color: white;
font-size: 14px;
`;

export default UserPlaylist;