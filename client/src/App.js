import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Menu/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Route exact path="/" render={<Header />} />
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
