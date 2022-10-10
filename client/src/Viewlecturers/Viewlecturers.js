import React, { useEffect, useState } from "react";
function Viewlecturers(){
    const [lecturersinfo , setlecturerinfo] = useState([])
    const [searchCriteria, setSearchCriteria] = useState("")
    function handleChange(event){
        setSearchCriteria(event.target.value)
    }
    const filteredLecturesDisplay = lecturersinfo.filter((lecturer)=> lecturer.name.toLowerCase().includes(searchCriteria.toLowerCase()))

    useEffect(()=>{
        fetch("/lecturers").then(res => res.json()).then(data =>setlecturerinfo(data))
    },[])
    const lecturersDisplay = filteredLecturesDisplay.map((lecturer,index)=>{
        return (
            <div key={index} className="card mb-3" style={{width: "540px",border:"#136F63 5px solid"}}>
                {/* #84CAE7 */}
                {/* #41B2E2 */}
            <div className="row g-0">
                <div className="col-md-4">
                <img src={lecturer.image_url} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body" style={{border: "#41B2E2 4px solid", backgroundColor:"#fbf0d1"}}>
                    <h6 className="card-title text-center">Name: {lecturer.name}</h6>
                    <p className="card-text">
                        <h6 className="mb-2">Email address: {lecturer.email_address}</h6>
                        <h6 className="mb-2 ">Mobile Number: +{lecturer.phone_number}</h6>
                        <h6 className="mb-2">Field of Speciality: {lecturer.field_of_speciality}</h6>
                    </p>
                   
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                            <button className="rounded-pill" style={{backgroundColor:"#41B2E2"}}>View Units</button>
                            <button className="rounded-pill" style={{backgroundColor:"#41B2E2"}}>Delete</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    })
    
    return(
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                    <input type="text" placeholder="Search a lecturer by name" className="form-control form-control-lg" onChange={handleChange}/>
                    </div>
                </div>
            </div> 

            <div className="container-fluid mt-3">
                <div className="row mt-2 justify-content-around px-3">
                    {lecturersDisplay}
                </div>
            </div>
        </>
    )
}
export default Viewlecturers;