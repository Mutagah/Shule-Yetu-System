import React from "react";
import {NavLink} from "react-router-dom"
function HodNavbar(){
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
                    <NavLink className="nav-link active">Home</NavLink>
                    <NavLink className="nav-link" to="registerlecturer">Register Lecturer</NavLink>
                    <NavLink className="nav-link" to="viewunits">View Units</NavLink>
                    <NavLink className="nav-link" to="viewlecturers">View Lecturers</NavLink>
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