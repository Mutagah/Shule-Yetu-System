import React, { useState } from "react";
import myImage from "../Images/undraw_teaching_re_g7e3 (1).svg"
function Login()
{
    const [userDetails, setUserDetails] = useState({})
    const [error, setErrors] = useState([])
    function handleChange(event){
        setUserDetails({...userDetails,[event.target.name]:event.target.value})
    }
    function handleHodClick(event){
        event.preventDefault()
        fetch("/department_heads",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body : JSON.stringify(userDetails)
    }).then(res=>{
        if(res.ok)
        {
            res.json().then(console.log("Hello guys")).finally(setUserDetails({name: "", password: ""}))
        }else{
            res.json().then(e => setErrors(Object.entries(e.error).flat().join(" : "))).finally(setUserDetails({name: "", password: ""}))
        }
    })
}
    console.log(userDetails)
    return (
    <>
    <div className="container-fluid mt-1 py-3 rounded-3" style={{backgroundColor:"#4CE0D2"}}>
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container-fluid">
                    <h3 className="fw-bolder display-6 ">Shule Yetu Management System</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse gx-4" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto pe-2 d-flex">
                        <li className="nav-item">
                        <h5 className="nav-link active" aria-current="page">Home</h5>
                        </li>
                        <li className="nav-item">
                        <h5 className="nav-link">Features</h5>
                        </li>
                        <li className="nav-item">
                        <h5 className="nav-link">Pricing</h5>
                        </li>
                     </ul>
                    </div>
                </div>    
                </nav>
                </div>
            </div>
    </div>
    <div className="container-fluid my-5 mx-2 px-5">
        <div className="row">
            <div className="col-md-6"><img src={myImage} alt="" className="img-fluid"/></div>
            <div className="col-md-6">
            <div className="card my-2 mt-5">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4"><u>Sign up / Login form</u></h3>
                        <h6 className="card-subtitle mb-2 text-muted text-center">Please enter you details below</h6>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" name="name" placeholder="Enter your name correctly" value={userDetails.name} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={userDetails.password} placeholder="Enter password" onChange={handleChange}/>
                            </div>
                            <div className="my-5">
                                <div className="row gx-2">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary mb-2 me-2">Sign up(lecturer)</button>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary mb-2 me-2">Login in(lecturer)</button>
                                    </div>     
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary" onClick={handleHodClick}>Login as Head of Department</button>
                                    </div>       
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
            {error}
            </div>
        </div>
    </div>
    </>
        
    )
}
export default Login;