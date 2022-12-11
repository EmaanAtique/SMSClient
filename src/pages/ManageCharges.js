import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import './Home.css';

const ManageCharges = () => {
    const [StudentInfo, setStudentInfo] = useState("")
    const [FeeDetails, setFeeDetails] = useState("")

    const HandleStudent = () => {
        Axios.post('https://dbproject-group22.herokuapp.com/api/fee-info', {StudentInfo:StudentInfo}).then((response)=>{
            console.log(response)
                if (response.data.message){
                    alert(response.data.message);
                }
                // else{
                //     alert("Try again later!");
                // }
    
    })}

    return(
        <div>
            <h1> Student Financial Account </h1>
            <h2> Update the fee payment information of students by their roll number, including their tuition, scholarship and charges payable</h2>
            <input className="adde" placeholder="Enter Student Roll Number" onChange={(e)=>{setStudentInfo(e.target.value)}}></input>
            <button onClick={HandleStudent}> Generating fee information</button>
            {/* <h1> {FeeDetails} </h1> */}
        </div>
    )
}

export default ManageCharges;