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
    const filteredLecturesDisplay = (Array.isArray(lecturersinfo) ? lecturersinfo : []).filter((lecturer)=> lecturer.name.toLowerCase().includes(searchCriteria.toLowerCase()))
    const lecturersDisplay = (Array.isArray(filteredLecturesDisplay)? filteredLecturesDisplay : []).map((lecturer,index)=>{
        return (
            <div key={index} className="mt-3 card mb-3" style={{width: "540px",border:"#136F63 5px solid",backgroundColor:"#4caba1"}}>
            <div className="row g-0">
                <div className="col-md-4" style={{backgroundColor:"#4caba1"}}>
                <img src={lecturer.image_url} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 ps-2" style={{backgroundColor:"#4caba1"}}>
                <div className="card-body ms-2" style={{backgroundColor:"#4caba1"}}>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item my-2 rounded-5">Name: {lecturer.name}</li>
                    
                    <li className="list-group-item my-2 rounded-5">
                    Email address: {lecturer.email_address}
                    </li>
                    <li className="list-group-item my-2 rounded-5">Field of Speciality:
                    {lecturer.field_of_speciality}
                    </li>
                    </ul>
                            <div>
                                <h6 className={dispclassnameviewUnits}>
                                <ul>{(lecturer.units).map(unit => <li>{unit.name}</li>)}</ul>
                                </h6>
                                
                            </div>
                   
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col d-flex justify-content-between">
                            <button className="rounded-pill p-2" style={{backgroundColor:"666B6A"}} onClick={()=> handleUnitsDisplay()}>View/hide Units</button>
                            <button className="rounded-pill" style={{backgroundColor: "red"}} onClick={()=>handleDeletelec(lecturer.id)}>Delete</button>
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
            <div className="container mt-3" style={{backgroundColor:"#fbf0d1"}}>
                <div className="row">
                    <div className="col">
                    <input type="text" placeholder="Search a lecturer by name" className="form-control form-control-lg" onChange={handleChange}/>
                    </div>
                </div>
            </div> 

            <div className="container-fluid mt-3" style={{backgroundColor:"#fbf0d1"}}>
                <div className="row mt-2 justify-content-around px-3">
                    {lecturersDisplay}
                </div>
            </div>
        </>
    )
}
export default Viewlecturers;