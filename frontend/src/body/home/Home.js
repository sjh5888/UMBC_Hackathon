import React from 'react';

import UserInfo from './userInfo/UserInfo';
import Feed from './feed/Feed';
import HackathonSideBar from './HackathonSideBar/HackathonSideBar';
import './assets/style.css';

function Home() {
  return (
    <div className="home">
      <UserInfo />
      <Feed />
    </div>
  );
}

export default Home;
