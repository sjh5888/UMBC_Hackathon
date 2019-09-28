import React from 'react';
import logo from './logo.svg';
import './assets/style.css';

import Navigation from './nav/Navigation';
import Routes from './nav/Routes';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
