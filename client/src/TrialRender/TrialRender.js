import React, { useEffect } from "react";
import {NavLink} from "react-router-dom"
function TrialRender({isLec}){
    console.log(isLec)
    return(
        <>
        <div className="container-fluid mt-1 py-3 rounded-3" style={{backgroundColor:"#4CE0D2"}}>
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid mx-2 rounded-3" style={{backgroundColor:"#4CE0D2"}}>
                <h3 className="display-6">Shule Yetu<sub>(Lecturer)</sub></h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <NavLink className="nav-link" to="lecafterlogin">Lec after login</NavLink>
                </div>
                </div>
            </div>
        </nav>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    Hello guys
                </div>
            </div>
        </div>
        
        </>
    )
}
export default TrialRender;