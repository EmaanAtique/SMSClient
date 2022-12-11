import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import './LandingPage.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'M','F'
  ];

const depts = ['Comparative Literary and Cultural Studies','English','History',	'Law','Biology','Chemical Engineering','Chemistry',
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

const ISignUp = () => {

    const history = useHistory()

    const [Gender, setGender] = useState("")
    const [Dept, setDept] = useState("")
    const [Email, setEmail] = useState("")


    const submitSignUp = props => {
    Axios.post('https://dbproject-group22.herokuapp.com/api/i-signup', {
        Gender: Gender,
        Dept: Dept, Email: Email}).then((response)=>{
            console.log(response.data.message);
        if (response.data.message == "Success"){
            alert("Account created!")      
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
        <div className="App"><h1 className="heading">Instructor Sign Up</h1>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div className="form2">
            <h2> Enter these details </h2>
            <label> Gender: </label>
          <Dropdown 
                className="etype" 
                options={options} 
                onChange={(e)=>{
                    setGender(e.value);
                    }}  
                value={Gender}  
                placeholder="Gender" 
            />
            <label> Department: </label>
            {/* <div>&nbsp;</div> */}
            <Dropdown 
                className="etype" 
                options={depts} 
                onChange={(e)=>{
                    setDept(e.value);
                    }}  
                value={Dept}  
                placeholder="Department" 
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>           
            <label> Email: </label>
            <input type="text" name="Email"onChange={(e)=>{setEmail(e.target.value)}}/>

            <button onClick={submitSignUp}> Submit </button>
        </div>
        </div>
    )
}

export default ISignUp;
