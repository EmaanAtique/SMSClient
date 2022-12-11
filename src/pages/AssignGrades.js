import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import './LandingPage.css';



const AssignGrades = () => {
    
    const GradeAssign = props => {
        Axios.post('https://dbproject-group22.herokuapp.com/api/assign-grade', {CID:CID,SID:SID, Grade: Grade}).then((response)=>{
                if (response.data.message === "Success"){
                    alert("Grade updated");
                }
                else{
                    alert("Try again later!");
                }
    
    })}

    const [CID, setCID] = useState("")
    const [SID, setSID] = useState("")
    const [Grade, setGrade] = useState("")

    return (
        <div>
    <label className="l1" > Enter Course ID</label> 
    <input onChange={(e)=>{setCID(e.target.value)}}/> 

    <label className="l1"> Enter Student ID</label> 
    <input onChange={(e)=>{setSID(e.target.value)}}/> 

    <label className="l1"> Enter Grade</label> 
    <input onChange={(e)=>{setGrade(e.target.value)}}/>
    
    <button className="submitGrade" onClick={GradeAssign}> Submit</button>
    </div>
)
}


export default AssignGrades;
