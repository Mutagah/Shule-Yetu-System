import React from "react";
import {NavLink} from "react-router-dom"
function HodNavbar({setIsHod}){
    function handleClick()
    {
        fetch("/logoutHod", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setIsHod(null);
            }
          })
    }
    return(
        <>
        <div className="container-fluid mt-1 py-3 rounded-3" style={{backgroundColor:"#4CE0D2"}}>
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid mx-2 rounded-3" style={{backgroundColor:"#4CE0D2"}}>
                <h3 className="display-6">Shule Yetu<sub>(Head of Department)</sub></h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <NavLink className="nav-link" to="/">View Units</NavLink>
                    <NavLink className="nav-link" to="/registerunit">Register Unit</NavLink>
                    <NavLink className="nav-link" to="/registerlecturer">Register Lecturer</NavLink>
                    <NavLink className="nav-link" to="/viewlecturers">View Lecturers</NavLink>
                    <NavLink className="nav-link" to="/trialrender">Trial Render</NavLink>
                    <button className="rounded-5" style={{backgroundColor:"#4caba1"}} onClick={handleClick}>Log out</button>
                </div>
                </div>
            </div>
        </nav>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default HodNavbar;