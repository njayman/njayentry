import React from 'react';
import './App.css';
import logo from './njay.png'

import Enter from './components/Enter'
const App = () => {
  return (
    <div className="main">
      <img src={logo} alt="logo" />
      <h1>Njayman</h1>
      <Enter />
    </div>
  );
}

export default App;
