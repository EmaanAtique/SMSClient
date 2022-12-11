import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import localStorage from "localStorage";
import './LandingPage.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Administrator', 'Residence Officer', 'Instructor'
];


const ELandingPage = () => {

    const history = useHistory()
    global.config.user_logged_in = "";

    const [EmployeeID, setEmployeeID] = useState("")
    const [Password, setPassword] = useState("")


    const [loginStatus, setLoginStatus] = useState("")
    const [EType, setEType] = useState()



    const submitLogin = props => {
    Axios.post('https://dbproject-group22.herokuapp.com/api/elogin', {
        EmployeeID: EmployeeID,
        Password: Password, EType: EType}).then((response)=>{
        if (response.data.message === "Success"){
            setLoginStatus(response.data.message)
            global.config.user_logged_in = EmployeeID;
            if (EType == "Instructor"){
                history.push({pathname:'/ehome', state: EmployeeID})
            }
            else if (EType == "Administrator"){
                history.push({pathname:'/ahome', state: EmployeeID})
            }
            else if (EType == "Residence Officer"){
                history.push({pathname:'/rhome', state: EmployeeID})
            }
        }
        else {
            // console.log(response.data[0])
            setLoginStatus(response.data.message)
        }
    })
    // history.push('/home')
    }

    

    return (
    <div className="App"><h1 className="heading">Student Management System</h1>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div className="form2">
        <h2> Log-in </h2>
        <label> Employee ID: </label>
        <input type="text" name="EmployeeID" onChange={(e)=>{setEmployeeID(e.target.value)}}/>
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
        <button onClick={submitLogin}> Submit </button>
    </div>
    <h1 className="error"> {loginStatus} </h1>
    </div>
    )
}

export default ELandingPage;
