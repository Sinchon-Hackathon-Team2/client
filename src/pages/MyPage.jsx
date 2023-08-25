import React from 'react';
import { styled } from 'styled-components';
import Header from '../components/Header';
import UserInfo from '../components/mypage/UserInfo';

function MyPage(props) {
    return (
        <div>
            <Header title={'Profile'} headerRight={''}/>
            <UserInfo/>
        </div>
    );
}

export default MyPage;