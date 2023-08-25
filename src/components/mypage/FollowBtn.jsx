import React from 'react';
import { styled } from 'styled-components';

function FollowBtn(props) {
    return (
        <FollowButton>
            팔로우
        </FollowButton>
    );
}

const FollowButton = styled.div`
/* width: 356px; */
height: 50px;
background-color: #34AFF4;
color: white;
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

export default FollowBtn;