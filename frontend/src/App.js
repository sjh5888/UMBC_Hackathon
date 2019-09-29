import React from 'react';
import './assets/style.css';

import Navigation from './nav/Navigation';
import Routes from './nav/Routes';
import GroupCard from './body/home/groupComponent/GroupCard';
import Hackathon from './body/hackathon/Hackathon';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
