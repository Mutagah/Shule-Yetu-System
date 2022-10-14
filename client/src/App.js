// import logo from './logo.svg';
import './App.css';
import "./Login/Login.js"
import React,{useState,useEffect} from 'react';
import Viewlecturers from './Viewlecturers/Viewlecturers';
import Login from './Login/Login.js';
import {Route,Routes} from "react-router-dom"
import RegisterUnit from './RegisterUnit/RegisterUnit';
import HodNavbar from "./HodNavbar/HodNavbar.js"
import RegisterLecturer from './RegisterLecturer/RegisterLecturer';
import ViewUnits from './ViewUnits/ViewUnits';
import TrialRender from './TrialRender/trialrender';
import Footer from './Footer/Footer';
function App() {
  // i'm assuming that this is boolean are they both json variables >> They come as an array ama object either from the log in component
  const [isHod, setIsHod] = useState(null)//Json is set in this state after clicking the Hod Log in button
  const [lecturersinfo, setlecturersinfo] = useState([])
  const [units, setUnits] = useState([])
  useEffect(()=>{
    fetch("/me").then(res=> res.json()).then((data)=>setIsHod(data))
    fetch("/lecturers").then(res => res.json()).then(data =>setlecturersinfo(data))
    fetch("/units").then((response)=> response.json()).then(units=>setUnits(units))
   
},[])
function onAddingnewLecture(newLecturer){
  setlecturersinfo([...lecturersinfo,newLecturer])
} 
function onAddingNewUnit(newUnit){
  setUnits([...units,newUnit])
}
  return isHod ?
    <>
        <HodNavbar setIsHod={setIsHod}/>

        <Routes>

          <Route exact path="/registerlecturer" element={<RegisterLecturer onAddingnewLecture={onAddingnewLecture}/>}/>

          <Route exact path="/registerunit" element={<RegisterUnit onAddingNewUnit={onAddingNewUnit}/>} />

          <Route exact path="/viewlecturers" element={<Viewlecturers lecturersinfo={lecturersinfo} setlecturersinfo={setlecturersinfo}/>} />

          <Route exact path="/" element={<ViewUnits units={units}/>} />
          
          <Route exact path="/login" element={<Login setIsHod={setIsHod}/>}/>

          <Route  element/>

        </Routes>

        <Footer/>
    </>
    :
    <>
     <Login setIsHod={setIsHod}/>
    </>;
}

export default App;
