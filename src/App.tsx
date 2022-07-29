import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Hello from './components/Hello'
import LikeButtion from "./components/LikeButtion";
import MouseTracker from "./components/MouseTracker";

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => {setShow(!show)}}>Toggle Tracker</button>
        {show && <MouseTracker></MouseTracker>}
        <LikeButtion />
        <Hello message={"hello world 2"}/>
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
