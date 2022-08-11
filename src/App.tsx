import React from 'react';
import logo from './logo.svg';
import FindPage from "./containers/FindPage/FindPage";

let test: string = 'test';
test = 'test2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          Learn React
        </a>
        <span>Api key= 777</span>
        <FindPage/>
      </header>
    </div>
  );
}

export default App;
