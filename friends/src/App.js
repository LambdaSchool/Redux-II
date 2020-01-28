import React from 'react';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>An Authentic Friends Experience</h1>
      </header>
      <Login />
    </div>
  );
}

export default App;
