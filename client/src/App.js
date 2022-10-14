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
import TrialRender from './TrialRender/TrialRender';
import Footer from './Footer/Footer';
function App() {
  const [isHod, setIsHod] = useState(null)
  const [isLec, setIsLec] = useState([])
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
          
          <Route exact path="/login" element={<Login setIsHod={setIsHod} setIsLec={setIsLec}/>}/>

          <Route  exact path="/trialrender" element={<TrialRender isLec={isLec}/>}/>

        </Routes>

        <Footer/>
    </>
    :
    <>
     <Login setIsHod={setIsHod}/>
    </>;
}

export default App;
