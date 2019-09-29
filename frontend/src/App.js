import React from 'react';
import './assets/style.css';

import Navigation from './nav/Navigation';
import Routes from './nav/Routes';
import GroupCard from './body/projects/ProjectCard';
import Hackathon from './body/hackathon/Hackathon';
import NewProject from './body/projects/NewProject';


function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes />
      
    </div>
  );
}

export default App;
