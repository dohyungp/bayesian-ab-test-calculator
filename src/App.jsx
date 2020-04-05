import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getWinProb } from "./utils/StatUtils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{getWinProb([1000, 100], [1000, 120])}</p>
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
