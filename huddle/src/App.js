import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(()=> {
    fetch('/time').then(res => res.json()).then(data => setCurrentTime(data.time));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>The current time is {currentTime}.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;