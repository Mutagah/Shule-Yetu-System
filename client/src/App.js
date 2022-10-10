// import logo from './logo.svg';
import './App.css';
import "./Login/Login.js"
import React,{useState} from 'react';
import Viewlecturers from './Viewlecturers/Viewlecturers';
import Login from './Login/Login.js';
function App() {
  const [isHod, setIsHod] = useState("")
  if(!isHod) return  <Login setIsHod={setIsHod}/>
  return (
    <>
    {/* <Login setIsHod={setIsHod}/> */}
    <Viewlecturers/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
