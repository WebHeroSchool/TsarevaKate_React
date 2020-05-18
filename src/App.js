import React from 'react';
import logo from './logo.svg';
import './App.css';

const flag= true, lessonNum = 14, text = 'lesson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>
          {flag && 'first app'}
        </p>
        <p style={{fontSize: 36-4}}>
          {lessonNum} {text}
          {null}
          {undefined}
          {false}
          {true}
        </p>
        <p>
          Осталось уроков {44 - lessonNum}
        </p>
        <p>
          {lessonNum < 30 ? 'Это только начало' : 'Еще не много'}
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
