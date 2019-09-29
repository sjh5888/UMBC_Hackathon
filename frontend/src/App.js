import React from 'react';
import './assets/style.css';

import Navigation from './nav/Navigation';
import Routes from './nav/Routes';


function App() {
  document.cookie += "e7292d5ba58672ce7f6fc3c0b646ab63";

  return (
    <div className="wrapper">
      <Navigation />
      <Routes />

    </div>
  );
}

export default App;
