import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import cover1 from '../images/cover1.png';
import cover2 from '../images/cover2.png';
import cover3 from '../images/cover3.png';
import cover4 from '../images/cover4.png';
import cover5 from '../images/cover5.png';
import cover6 from '../images/cover6.png';
// import axios from "axios";

//components
import Header from "../components/Header";

//images
import follow_off from "../images/follow_off.svg";
import follow_on from "../images/follow_on.svg";

//context
// import { useAuth } from "../contexts/AuthContext";

const MainPage = () => {
  const navigate = useNavigate();

  const [follow, setFollow] = useState(false);
  const handleCategoryToggle = () => {
    setFollow((prevState) => !prevState);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDetailPlaylist = (post_id) => {
        navigate(`/detail/${post_id}`);
    }

  // 더미 카테고리 데이터
  const categories = [
    "#발라드",
    "#랩/힙합",
    "#댄스",
    "#R&B/Soul",
    "인디음악",
    "락/메탈",
  ];

  // 더미 플레이리스트 박스 데이터
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
    <Container>
      <Header title={"Main"} headerRight={"Profile"} />
      <FollowBox>
        <FollowImg
          src={follow ? follow_on : follow_off}
          onClick={handleCategoryToggle}
        />
        <span>팔로우한 사람만 보기</span>
      </FollowBox>
      <CategoryList>
        {categories.map((category) => (
          <Category
            key={category}
            onClick={() => handleCategoryClick(category)}
            isSelected={selectedCategory === category}
          >
            {category}
          </Category>
        ))}
      </CategoryList>
      <PlaylistContainer>
            {playlist.map((item, index) => (
                <SubContainer key={index} onClick={()=>handleDetailPlaylist(index)}>
                    <Cover src={item.cover} alt={`Playlist Cover ${index}`} />
                    <SubTitle>{item.title}</SubTitle>
                    <Tag>{item.Tag.join('')}</Tag>
                </SubContainer>
            ))}
        </PlaylistContainer>
    </Container>
  );
};

export default MainPage;

//전체 styled
const PlaylistContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* 가로 한 줄에 2개씩 박스 배치 */
    gap: 20px;
    padding: 20px;
    height: 549px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
  }
`;

const Cover = styled.img`

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Font = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-style: normal;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;
`;

const FollowBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  margin: 18px 20px;

  span {
    text-align: right;
    color: #fff;
    font-family: "Pretendard-Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 15px */
    letter-spacing: -0.3px;
  }

`;

const FollowImg = styled.img`
  width: 41px;
  height: 20.936px;
  margin-left: 13px;
  cursor: pointer;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0px;
  padding: 0px 20px;
  gap: 10px;
  box-sizing: border-box;

  overflow-x: scroll;
  width: 390px;

  &::-webkit-scrollbar {
    display: none;
  }

`;

const Category = styled.div`
  color: ${(props) =>
    props.isSelected ? "var(--main-1, #34aff4)" : " var(--gray-1, #4C4E53)"};
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid
    ${(props) =>
      props.isSelected ? "var(--main-1, #34aff4 )" : "var(--gray-1, #4C4E53)"};
  background: var(--black-1, #202329);
`;
