import React from "react";
function Footer(){
return(
    <div className="container-fluid p-3 d-block" style={{backgroundColor:"#67e1d2"}}>
        <div className="row gx-3 my-3 p-3 rounded-5 d-flex justify-content-between" style={{backgroundColor:"#d9d9d9", border:"red 2px solid"}}>
            <div className="col-4 text-center">
                <h5>Head of department Contacts</h5>
                shuleyetu@gmail.com
            </div>
            <div className="col-4 text-center">
                <h5>Dean of School Contacts</h5>
                schoolcontact@gmail.com
            </div>
            <div className="col-4 text-center">
                <h5>University Contacts</h5>
                universitycontact@gmail.com
            </div>
        
                </div>
    </div>
)
}
export default Footer