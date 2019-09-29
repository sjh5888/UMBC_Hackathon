import React from 'react';
import './assets/style.css';

import Navigation from './nav/Navigation';
import Routes from './nav/Routes';
import GroupCard from './body/home/groupComponent/GroupCard';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes />
      <GroupCard />
    </div>
  );
}

export default App;
