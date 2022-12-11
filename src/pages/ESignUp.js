import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import localStorage from "localStorage";
import './LandingPage.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Administrator', 'Residence Officer', 'Instructor'
];


const ESignUp = () => {

    const history = useHistory()

    const [EmployeeID, setEmployeeID] = useState("")
    const [EmployeeFN, setEmployeeFN] = useState("")
    const [EmployeeLN, setEmployeeLN] = useState("")


    const [Password, setPassword] = useState("")

    const [EType, setEType] = useState()



    const submitSignUp = props => {
    Axios.post('https://dbproject-group22.herokuapp.com/api/employee-signup', {
        EmployeeID: EmployeeID,
        Password: Password, EmployeeFN: EmployeeFN, EmployeeLN: EmployeeLN, EType: EType}).then((response)=>{
            console.log(response.data.message);
        if (response.data.message == "Successful"){
            alert("Account created!")      
            if (EType == "Instructor"){
                history.push("/isignup")
            }
        }
        else {
            alert("This User ID already exists")
        }
    })
    }


    
    // if (global.config.user_logged_in === "") {
    //     return(
    //         <h1> ERROR: UNAUTHORIZED</h1>
    //         )
    //     }
    // else{
    return (
        <div className="App"><h1 className="heading">Employee Sign Up</h1>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div className="form2">
            <h2> Create an Account </h2>
            <label> Employee ID: </label>
            <input type="text" name="EmployeeID" onChange={(e)=>{setEmployeeID(e.target.value)}}/>
            <label> Employee First Name: </label>
            <input type="text" name="EmployeeFN" onChange={(e)=>{setEmployeeFN(e.target.value)}}/>
            <label> Employee Last Name: </label>
            <input type="text" name="EmployeeLN" onChange={(e)=>{setEmployeeLN(e.target.value)}}/>
            <label> Password: </label>
            <input type="password" name="Password"onChange={(e)=>{setPassword(e.target.value)}}/>
            <label> Employee Type: </label>
            {/* <div>&nbsp;</div> */}
            <Dropdown 
                className="etype" 
                options={options} 
                onChange={(e)=>{
                    setEType(e.value);
                    }}  
                value={EType}  
                placeholder="Employee Type" 
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <button onClick={submitSignUp}> Submit </button>
        </div>
        </div>
    )
}
    // }

export default ESignUp;
