import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
// import localStorage from "localStorage";
import './LandingPage.css';


const LandingPage = () => {

    const history = useHistory()
    global.config.user_logged_in = "";
    const [RollNumber, setRollNumber] = useState("")
    const [Password, setPassword] = useState("")

    const [RollNumberL, setRollNumberL] = useState("")
    const [PasswordL, setPasswordL] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    const submitRegister = () => {
    Axios.post('https://dbproject-group22.herokuapp.com/api/check', {
        RollNumber: RollNumber,
        Password: Password}).then((response)=>{
            if (response.data.message !== "Success"){
                alert("Choose another ID!")
            }
            else{
                history.push('/Registration');
            }
        })
    }

    const submitLogin = () => {
    Axios.post('https://dbproject-group22.herokuapp.com/api/login', {RollNumber: RollNumberL, Password: PasswordL}).then((response)=>{
        if (response.data.message === "Success"){
            setLoginStatus(response.data.message)
            // localStorage.setItem('jwt', RollNumber)
            // localStorage.setItem("username", JSON.stringify(response.data[0].student_id))
            console.log(JSON.parse(localStorage.getItem('username')))
            global.config.user_logged_in = RollNumber;

            history.push('/home')
        }
        else {
            // console.log(response.data[0])
            setLoginStatus(response.data.message)
            console.log(response.data.message)
        }
    })
    // history.push('/home')
    }


    return (
    <div className="App"><h1 className="heading">Student Management System</h1>
    <div className="form">
        <h2> Registration </h2>
        <label> Roll Number: </label>
        <input type="text" name="RollNumber" onChange={(e)=>{setRollNumber(e.target.value)}}/>
        <label> Password: </label>
        <input type="password" name="Password"onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={submitRegister}> Submit </button>
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div className="form2">
        <h2> Log-in </h2>
        <label> Roll Number: </label>
        <input type="text" name="RollNumberL" onChange={(e)=>{setRollNumberL(e.target.value)}}/>
        <label> Password: </label>
        <input type="password" name="PasswordL"onChange={(e)=>{setPasswordL(e.target.value)}}/>
        <button onClick={submitLogin}> Submit </button>
    </div>
    <h1 className="error"> {loginStatus} </h1>
    </div>
    )
}

export default LandingPage;
