import React, { useState } from "react";
function RegisterLecturer({onAddingnewLecture}){
const [age, setAge] = useState(0)
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [emailAddress, setEmailAddress] = useState("")
const [field_of_speciality, setFieldOfSpeciality] = useState("Statistics")
const [imageUrl, setImageUrl] = useState("https://image.shutterstock.com/image-photo/portrait-african-american-male-teacher-260nw-388588393.jpg")
const [errors, setErrors] = useState([])
        const LecRegister = {
            age: age,
            name: name,
            password: password,
            image_url: `${imageUrl}`,
            phone_number: phoneNumber,
            email_address: emailAddress,
            field_of_speciality: field_of_speciality
        }
        function handleLecSubmission(){  
                fetch("/lecturers",{
                    method: "POST",
                    headers :{
                        "Content-Type":"application/json"
                    },
                    body : JSON.stringify(LecRegister)}).then(response => 
                        {
                            if(response.ok)
                            {
                                response.json().then(data=> onAddingnewLecture(data)).finally(
                                    setAge(0),
                                    setName(""),
                                    setErrors([]),
                                    setPassword(""),
                                    setPhoneNumber(""),
                                    setEmailAddress(""),
                                    setFieldOfSpeciality("Statistics"),
                                    setImageUrl("https://image.shutterstock.com/image-photo/portrait-african-american-male-teacher-260nw-388588393.jpg")
                                )
                            }else{
                                response.json().then(errorObj => setErrors(errorObj.errors))
                            }
                        })   
                    }
    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"#fbf0d1"}}>
                <div className="row">
                    <div className="col-5 mx-auto">
                    <div class="card my-4 align-items-center mx-2 rounded-5" style={{backgroundColor:"#22AAA1"}}>
                    <div class="row g-3 align-items-center ">
                        <div class="col mt-5 mb-2 mx-3">
                            <label class="col-form-label">Name</label>
                        <div class="col-auto">
                            <input type="text" class="form-control" value={LecRegister.name} onChange={((event)=> setName(event.target.value))}/>
                        </div>
                        <div class="col-auto">
                            <span class="form-text">
                            Include title
                            </span>
                        </div>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col my-1 mx-3">
                            <label class="col-form-label">Age</label>
                        <div class="col-auto">
                            <input type="number" class="form-control" onChange={((event)=> setAge(event.target.value))} value={LecRegister.age}/>
                        </div>
                        <div class="col-auto">
                            <span class="form-text">
                            Must be greater than 30
                            Less than 58
                            </span>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col mt-2 mb-2 mx-3">
                            <label class="col-form-label">Phone Number</label>
                        <div class="col-auto">
                            <input type="tel" class="form-control" placeholder="254-000-0000" onChange={((event)=> setPhoneNumber(event.target.value))} value={LecRegister.phone_number}/>
                        </div>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col mt-2 mb-2 mx-3">
                            <label class="col-form-label">Email address</label>
                        <div class="col-auto">
                            <input type="text" class="form-control" onChange={((event)=> setEmailAddress(event.target.value))} value={LecRegister.email_address}/>
                        </div>
                        <div class="col-auto">
                            <span class="form-text">
                            </span>
                        </div>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col mt-2 mb-2 mx-3">
                            <label class="col-form-label">Image Url</label>
                        <div class="col-auto">
                            <input type="text" class="form-control" onChange={((event)=> setImageUrl(event.target.value))} value={LecRegister.image_url}/>
                        </div>
                        <div class="col-auto">
                            <span class="form-text">
                            Your Own face image
                            </span>
                        </div>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col mt-2 mb-2 mx-3">
                            <label class="col-form-label">Field of Speciality</label>
                        <div class="col-auto">
                        <select onChange={event=> setFieldOfSpeciality(event.target.value)} class="form-control">
                        <option value="Statistics">Statistics</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Applied Mathematics">Applied Mathematics</option>
                        <option value="Economics">Economics</option>
                        <option value="Multimedia Systems">Multimedia Systems</option>
                        <option value="Computer Networks">Computer Networks</option>
                        <option value="Computer/System Programming">Computer/System Programming</option>
                        <option value="Pure Mathematics">Pure Mathematics</option>
                        <option value="Computer Graphics">Computer Graphics</option>
                        <option value="Database Systems">Database Systems</option>
                        <option value="Internet Application">Internet Application</option>
                    </select>
                        </div>
                        </div>
                    </div>
                     <div class="row g-3 align-items-center">
                        <div class="col mt-2 mb-3 mx-3">
                            <label class="col-form-label">Password </label>
                        <div class="col-auto">
                            <input type="password" class="form-control" onChange={((event)=> setPassword(event.target.value))} value={LecRegister.password}/>
                        </div>
                        <div class="col-auto">
                            <span class="form-text">
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-7 mt-4">
                    <div class="card mb-3 px-2 rounded-5" style={{backgroundColor:"#4CE0D2"}}>
                <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body ">
                        <h5 class="card-title text-center">Your Card</h5>
                        <ul class="list-group list-group-flush">

                            <li class="list-group-item mb-3">Name: {name}</li>

                            <li class="list-group-item mb-3">Phone number: {phoneNumber}</li>

                            <li class="list-group-item mb-3">Email address: {emailAddress} </li>

                            <li class="list-group-item mb-3">Age:  {age}
                            </li>

                            <li class="list-group-item mb-3">Field of Speciality:  {field_of_speciality}
                            </li>

                            <li class="list-group-item mb-2" style={{backgroundColor:"#041B15"}}>  
                            </li>
                        </ul>
                        <p class="card-text text-center">Welcome to our school department</p>
                    </div>
                    </div>
                    <div class="col-md-4 mt-5">
                    <img src={imageUrl} class=" rounded-3 img-fluid rounded-start" alt="..."/>
                    </div> 
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {errors.length > 0 && (
                                <ul style={{color:"red"}}className="fs-5">
                                    {errors.map(error => <li key={error}>{error}</li>)}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <button className="rounded-pill p-3" style={{backgroundColor:"#22AAA1"}} onClick={handleLecSubmission}>
                            Register Lecturer
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                    
                </div>
            </div>
        </>
    )
}
export default RegisterLecturer;