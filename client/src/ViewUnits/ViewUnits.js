import React, { useState } from "react";
import {Link} from "react-router-dom"
function ViewUnits({units,handleEdit}){
    
    // const [units, setUnits] = useState([])
    // useEffect(()=>{
    //     fetch("/units").then((response)=> response.json()).then(units=> {
    //         setUnits(units)
    //         console.log(units)
    //     })
    // },[])
    // const [unit, setUnit] = useState([])
    

        const unitsDisplay = (Array.isArray(units) ? units : []).map((unit)=>{
            return(
                <div className="card text-dark mt-3 mb-3" style={{width:"18rem",backgroundColor:"#4caba1"}}>
                <div className="card-header">{unit.code}</div>
                <div className="card-body">
                    <h5 className="card-title">{unit.name}</h5>
                    <ul className="list-group list-group-flush">
                        {/* <li className="list-group-item my-2 rounded-5">Lecturer Name: {unit.lecturer["name"]}</li> */}
                        <li className="list-group-item my-2 rounded-5">Course : {(unit.cohort["course_id"] === 1) ? "Bsc(Mathematics and Computer Science)" : "Bsc(Statistics)"}</li>
                        <li className="list-group-item my-2 rounded-5">Year of Study : {unit.cohort["year_of_study"] === 1? "First year" : " "}
                        {unit.cohort["year_of_study"] === 2? "Second year" : " "}
                        {unit.cohort["year_of_study"] === 3 ? "Third year" : " "}
                        {unit.cohort["year_of_study"] === 4? "Fourth Year" : " "}
                        </li>
                    </ul>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col ">
                                <button className="rounded-4 ml-auto" onClick={()=> handleEdit(unit)}><Link to="/registerunit">Edit unit</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            )
        })
        

return(
    <>
    <div className="container-fluid my-3" style={{backgroundColor:"#fbf0d1"}}>
    <div className="row justify-content-around px-1">
        {unitsDisplay}
    </div>
    </div> 
    </>
    
)    
}
export default ViewUnits;