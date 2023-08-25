import React from 'react';
import { styled } from 'styled-components';
import HeaderBackBtn from '../images/HeaderBackBtn';
import { useNavigate } from 'react-router-dom';


function Header({title, headerRight}) {
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate(-1);
    }

    return (
        <Container>
                <StyledHeaderBackBtn onClick={onClickBack}/>

                <Title>{title}</Title>
                <HeaderRight>{headerRight}</HeaderRight>

        </Container>
    );
}

const Container = styled.div`
  width: 393px;
  height: 127px;
  display: flex;
  align-items: center;
`;

const StyledHeaderBackBtn = styled(HeaderBackBtn)`
    margin-top: 60px;
    margin-left: 15px;
    width: 50px;
`;


const Title = styled.div`
    font-size: 20px;
    margin-top: 60px;
    font-weight: 700;
    color: white;
    width: 293px;
    display: flex;
    justify-content: center;
    
`;

const HeaderRight = styled.div`
font-size: 16px;
    margin-top: 60px;
    margin-right: 15px;
    color: #34AFF4;
    width: 50px;
`;

export default Header;