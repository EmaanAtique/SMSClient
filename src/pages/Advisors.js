import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import Axios from 'axios'
import './Home.css';
import Dropdown from 'react-dropdown';


const options = ['Comparative Literary and Cultural Studies','English','History',	'Law','Biology','Chemical Engineering','Chemistry',
    'Computer Science',
    'Electrical Engineering',
    'Mathematics',
    'Physics',
    'Accounting and Finance',
    'Anthropology / Sociology',
    'Economics',
    'Economics and Mathematics',
    'Management Science',
    'Political Science',
    'Politics and Economics']

const Advisors = () => {

    const [dept, setDept] = useState("");
    const [RollNo, setRollNo] = useState("");
    const history = useHistory()

    const Assign  = () => {
        Axios.post('https://dbproject-group22.herokuapp.com/api/add-advisors', {
        Dept:dept,RollNo:RollNo}).then((response)=>{
            console.log(response.data.message);
        if (response.data.message == "Success"){
            alert("Student is assigned an advisor!") ;    
        }
        else if (response.data.message == "Failure 1"){
            alert("Student ID Not Applicable!")
        }
        else{
            alert("Unable to assign advisor!")
        }

    })
}

    return(
        <div>
        <h1> Advisee Assignment </h1>
            <h2> Advisees are to be assigned to students currently unassigned via a random assignment algorithm, matching advisees and advisors in the same domain with just one click! </h2>
            <input className ='inp' placeholder="Enter Student ID" onChange={(e)=>{
                    setRollNo(e.target.value);
                    }}  />
            <Dropdown 
                  className="etypek" 
                  options={options} 
                  onChange={(e)=>{
                      setDept(e.value);
                      }}  
                  value={dept}  
                  placeholder="Choose a Department" 
              />
            <button className="adde" onClick={Assign}> Assign Advisees! </button>
        </div>
    )

}

export default Advisors;