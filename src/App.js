import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as lesson from './number';

const flag= true, text = 'lesson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: 36-4}}>
          count*length = {lesson.count * lesson.length}
        </p>
        <p>
          Осталось уроков {lesson.all - lesson.num}
        </p>
        <p>
          {lesson.num < 30 ? 'Это только начало' : 'Еще не много'}
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
