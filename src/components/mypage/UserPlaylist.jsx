import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import playlistCover from '../../images/playlistCover.png';


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
            cover: playlistCover,
            title: "20230825 오늘의 감성 멋대 학생들과 공유~",
            Tag: ["#태그1", "#태그2"],
        },
        {
            cover: playlistCover,
            title: "불꽃남자의 농구할 때 듣는 노래",
            Tag: ["#태그1", "#태그2", "#태그3"],
        },
        {
            cover: playlistCover,
            title: "20230824 신나는 노동요 Playlist",
            Tag: ["#태그1", "#태그2"],
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
color: white;
`;

const Tag = styled.div`
color: white;
`;

export default UserPlaylist;