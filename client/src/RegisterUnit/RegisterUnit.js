import React, { useEffect, useState } from "react";
import myImage2 from "..//Images/undraw_mathematics_-4-otb.svg"
function RegisterUnit({onAddingNewUnit}){
    const [lecturers, setlecturers] = useState([])
    const [fieldSpeciality, setSpecialityField] = useState("")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({})
    const [cohortId, setCohortid] = useState(0)
    useEffect(()=>{
    fetch("/lecturers").then(resp=> resp.json()).then(data=>setlecturers(data))
    },[])
    console.log(errors)

    const filteredLec = (Array.isArray(lecturers)? lecturers: []).filter((lecturer)=>
        fieldSpeciality === lecturer.field_of_speciality
    )
   
    function handleInputChange(event){
        setFormData({...formData,[event.target.name]: event.target.value})
    }
    function handleSubmit(){
    fetch("/units",{
        method : "POST",
        headers:{
            "Content-Type":"application/json"
            },
            body :JSON.stringify({...formData,cohort_id: cohortId})}).then(response => {
            if(response.ok){
                response.json().then(data=> onAddingNewUnit(data)).finally(
                    setCohortid(0),
                    setFormData({code:"",name:"",lecturer_id:0})
                    )
                }else{
                    response.json().then(errorObj => setErrors(errorObj.errors))
                }
            })
    }
return(
    <>
      <div className="container-fluid  mx-2 px-5" style={{backgroundColor:"#fbf0d1"}}>
        <div className="row py-4">
            <div className="col-md-6"><img src={myImage2} alt="" className="img-fluid"/></div>


            <div className="col-md-6 mx-auto">
                    <div className="card my-4 align-items-center mx-2 rounded-5" style={{backgroundColor:"#22AAA1"}}>
                    <div className="row g-3 align-items-center ">
                        <div className="col mt-5 mb-2 mx-3">
                            <label className="col-form-label">Unit name</label>
                        <div className="col-auto">
                            <input type="text" className="form-control" onChange={handleInputChange} value={formData.name} name="name"/>
                        </div>
                        <div className="col-auto">
                            <span className="form-text">
                            Include title
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col my-1 mx-3">
                            <label className="col-form-label">Unit Code</label>
                        <div className="col-auto">
                            <input type="text" className="form-control" onChange={handleInputChange} name="code" value={formData.code}/>
                        </div>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col mt-2 mb-2 mx-3">
                            <label className="col-form-label">Involved Field</label>
                        <div className="col-auto">
                        <select  className="form-control" onChange={(event)=>{
                            const lecturer = lecturers.find((lec)=> lec.field_of_speciality === event.target.value)
                            setFormData({...formData,lecturer_id : lecturer.id})
                            setSpecialityField(event.target.value)
                        }}>
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
                    <div className="row g-3 align-items-center">
                        <div className="col mt-2 mb-2 mx-3">
                            <label className="col-form-label">Assign Lecturer</label>
                        <div className="col-auto">
                        <select  className="form-control" onChange={handleInputChange} name="lecturer_id" value={formData.lecturer_id}>
                            {filteredLec.map((lec,index)=>
                              {
                          return(<option value={lec.id} key={index}>{lec.name}</option>)
                                })
                            }
                    </select>
                        </div>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col mt-2 mb-2 mx-3">
                            <label className="col-form-label">Select Cohort</label>
                        <div className="col-auto">
                        <select  className="form-control" onChange={(event)=> setCohortid(parseInt(event.target.value))}>
                    
                        <option value={parseInt("5")} className="text-center">Statistics(1)</option>
                        <option value="6" className="text-center">Statistics(2)</option>
                        <option value="7" className="text-center">Statistics(3)</option>
                        <option value="8" className="text-center">Statistics(4)</option>
                        <option value="1" className="text-center">Maths $ Computer Science(1)</option>
                        <option value="2" className="text-center">Maths $ Computer Science(2)</option>
                        <option value="3" className="text-center">Maths $ Computer Science(3)</option>
                    <option value="4" className="text-center">Maths $ Computer Science(4)</option>
                    </select>
                        </div>
                        </div>
                    </div>
                            <button className="p-2 d-grid my-3 rounded-5" onClick={handleSubmit} >Submit Button</button>

                    </div>
                    </div>
        </div>
    </div>
    </>
)
}
export default RegisterUnit;