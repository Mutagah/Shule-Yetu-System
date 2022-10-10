// import logo from './logo.svg';
import './App.css';
import "./Login/Login.js"
import React,{useState} from 'react';
import Viewlecturers from './Viewlecturers/Viewlecturers';
import Login from './Login/Login.js';
import {Route,Routes} from "react-router-dom"
import HodNavbar from "./HodNavbar/HodNavbar.js"
import RegisterLecturer from './RegisterLecturer/RegisterLecturer';
function App() {
  const [isHod, setIsHod] = useState("")
  if(!isHod) return  <Login setIsHod={setIsHod}/>
  return (
    <>
    <HodNavbar/>
    <Routes>
      <Route exact path="/registerlecturer" element={<RegisterLecturer/>}/>
      <Route exact path="/viewlecturers" element={<Viewlecturers/>} />
    </Routes>
    </>
  );
}

export default App;
