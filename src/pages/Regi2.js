import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import './LandingPage.css';
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

const Regi2 = () => {
    const history = useHistory()
    const [Major, setMajor] = useState("")
    const [Status, setStatus] = useState("")
    

    const submit = () => {
      Axios.post('https://dbproject-group22.herokuapp.com/api/ARegister', {Major: Major}).then((response)=>{
          if (response.data.message === "Success"){
            history.push('/Home')
          }
          else{
            setStatus("Choose your major!");
          }
          })
      
      }
  
    return (
        <div className="App">
        <div className="form">
            <h1> Student Registration </h1>
            <h2> Enter your academic details below</h2>
            <label> Major: </label>
            <Dropdown 
                  className="etype" 
                  options={options} 
                  onChange={(e)=>{
                      setMajor(e.value);
                      }}  
                  value={Major}  
                  placeholder="Major" 
              />
              <div>&nbsp;&nbsp;&nbsp;&nbsp; </div>
            <button onClick={submit}> Next </button>
            <text> {Status} </text>
        </div>
        </div>
    )
};
  
export default Regi2;