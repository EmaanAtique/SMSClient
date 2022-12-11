import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import './Home.css';
import Dropdown from 'react-dropdown';

const options = ["Year Off", "Graduation Clearance", "Withdrawal"]

const Applications = props => {
    const [ApplicationType, setApplicationType] = useState("");
    const [StudentInfo, setStudentInfo] = useState("")

    const clickApps = () => {
        Axios.post('https://dbproject-group22.herokuapp.com/api/manage-apps', {StudentInfo:StudentInfo, ApplicationType: ApplicationType}).then((response)=>{
                if (response.data.message){
                    alert(response.data.message);
                }
    
    })}

    return(
    <div>
        <h1> Manage Student Applications</h1>
        <input className="adde" placeholder="Enter Student Roll Number" onChange={(e)=>{setStudentInfo(e.target.value)}}></input>
        <div> &nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Dropdown 
                className="appslist" 
                options={options} 
                onChange={(e)=>{
                    setApplicationType(e.value);
                    }}  
                value={ApplicationType}  
                placeholder="Application Type" 
            />
        <button className= "searching" onClick={clickApps}> Search </button>


    </div>
    )
}


export default Applications;