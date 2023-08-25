import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

  // 더미 카테고리 데이터
  const categories = ["#발라드", "#힙합", "#댄스", "#R&B"];

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
    </Container>
  );
};

export default MainPage;

//전체 styled

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
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0px;
  padding-left: 20px;
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

  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid
    ${(props) =>
      props.isSelected ? "var(--main-1, #34aff4 )" : "var(--gray-1, #4C4E53)"};
  background: var(--black-1, #202329);
`;
