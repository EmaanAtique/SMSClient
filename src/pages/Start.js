import React from "react";
import "./Start.css"
import student from "./student.png"
import admin from "./teacher.png"
import { useHistory } from "react-router-dom";



const Start = () => {
  const history = useHistory()
  global.config.user_logged_in = ""
  return (
      <div>
          <h1> Welcome to the Student Management System </h1>
          <h2> Click on the image to select your role! </h2>
          <img className='studentImage'
        alt="Student"
        src={student}
        onClick={() => { history.push('/LandingPage') }}
        />

        <text className="S">
          Student
        </text>

      <img className='adminImage'
        alt="Admin"
        src={admin}
        onClick={() => { history.push('/ELandingPage') }}
        />

        <text className="A">
          Admin
        </text>
      </div>
  )
};

export default Start;