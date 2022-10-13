import React, { useState } from "react";
function Viewlecturers({lecturersinfo,setlecturersinfo}){
    const [searchCriteria, setSearchCriteria] = useState("")
    const [isviewClicked, setisViewClicked] = useState(false)
    function handleChange(event){
        setSearchCriteria(event.target.value)
    }
    function handleUnitsDisplay(){
        setisViewClicked(()=> !isviewClicked)
    }
    const dispclassnameviewUnits = isviewClicked === true ? " ": "visually-hidden"    
    const filteredLecturesDisplay = lecturersinfo.filter((lecturer)=> lecturer.name.toLowerCase().includes(searchCriteria.toLowerCase()))
    const lecturersDisplay = filteredLecturesDisplay.map((lecturer,index)=>{
        return (
            <div key={index} className="card mb-3" style={{width: "540px",border:"#136F63 5px solid"}}>
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
                            <div>
                                <h6 className={dispclassnameviewUnits}>
                                <ul>{(lecturer.units).map(unit => <li>{unit.name}</li>)}</ul>
                                </h6>
                                
                            </div>
                   
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                            <button className="rounded-pill" style={{backgroundColor:"#41B2E2"}} onClick={()=> handleUnitsDisplay()}>View/hide Units</button>
                            <button className="rounded-pill" style={{backgroundColor:"#41B2E2"}} onClick={()=>handleDeletelec(lecturer.id)}>Delete</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    })
    function handleDeletelec(lecId){
            fetch(`/lecturers/${lecId}`,{
              method : "DELETE",
            })
            const updatedlecturers = lecturersinfo.filter((lec)=>
            {
                return (lec.id !== lecId)
            })
            setlecturersinfo(updatedlecturers)
    }

    
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