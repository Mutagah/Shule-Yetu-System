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
function App() {
  const [isHod, setIsHod] = useState("")
  const [isLec, setIsLec] = useState(0)
  const [lecturersinfo, setlecturersinfo] = useState([])
  useEffect(()=>{
    fetch("/me").then(res=> res.json()).then((data)=>setIsHod(data))
    fetch("/lecturers").then(res => res.json()).then(data =>setlecturersinfo(data))
   
},[])
function onAddingnewLecture(newLecturer){
  setlecturersinfo([...lecturersinfo,newLecturer])
} 

  if(!isHod)return  <Login setIsHod={setIsHod} setIsLec={setIsLec}/>
  return (
    <>
    { isHod ?
    <>
        <HodNavbar setIsHod={setIsHod}/>

        <Routes>

          <Route exact path="/registerlecturer" element={<RegisterLecturer onAddingnewLecture={onAddingnewLecture}/>}/>

          <Route exact path="/registerunit" element={<RegisterUnit/>}/>

          <Route exact path="/viewlecturers" element={<Viewlecturers lecturersinfo={lecturersinfo} setlecturersinfo={setlecturersinfo}/>} />

          <Route exact path="/" element={<ViewUnits/>} />
          {/* <Route exact path="/" element={<LecAfterLogin isLec={isLec}/>}/> */}

        </Routes>
    </>
    
    :
    <Login setIsHod={setIsHod} setIsLec={setIsLec}/>
    
    }
    </>
  );
}

export default App;
