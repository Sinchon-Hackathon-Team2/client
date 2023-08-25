import React from 'react';
import { styled } from 'styled-components';

function ShareProfileBtn(props) {
    return (
        <ShareBtn>
            프로필 공유하기
        </ShareBtn>
    );
}

const ShareBtn = styled.div`
/* width: 356px; */
height: 50px;
background-color: #D9D9D9;
border-radius: 5px;
margin-left: 20px;
margin-right: 20px;
display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 60px;
`;

export default ShareProfileBtn;