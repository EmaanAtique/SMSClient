import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import Axios from 'axios'
import './Home.css';

const EHome = props => {
    const history = useHistory()
    const [modal, setmodal] = useState(false)
    const [oldpassw, setOldPass] = useState("")
    const [newpassw, setNewPass] = useState("")
    
    const EmployeeID = props.location.state;
    

    const signOut = () => {
        global.config.user_logged_in = ""
        history.push('/ELandingPage')
        }

    const UpdatePassword  = () => {
        Axios.post('https://dbproject-group22.herokuapp.com/api/eupdate-password', {
            oldpassw: oldpassw,
            newpassw: newpassw}).then((response)=>{
                if (response.data.message !== "Wrong password"){
                    alert("Password updated")
                }
                else {
                    alert('Wrong password')
                }
            })
        }
    
    const viewAdvisees  = props => {
        history.push({pathname:'/advisees', state: EmployeeID })
    }
    
    const AssignGrades  = props => {
        history.push("/AssignGrades")
    }


    // if (global.config.user_logged_in === "") {
    //     return(
    //         <h1> ERROR: UNAUTHORIZED</h1>
    //         )
    //     }
    // else{
        return (
            <>
            <div>
                <h1 className="mainHead"> Instructor Page</h1>
                <button className="logbutton" onClick={signOut} > Sign Out</button>
                <button className="advisee" onClick={viewAdvisees}> View Advisees</button>
                <button className="grade" onClick={AssignGrades}> Assign Grades </button>


                <Modal
                    // size= 'lg'
                    isOpen={modal}
                    toggle={()=>setmodal(!modal)}
                    >

                    <ModalHeader
                    toggle={()=>setmodal(!modal)}
                    > Update your password </ModalHeader>
                    <ModalBody> 
                        <form> 
                            <Row>
                                <Col>
                                    <div>
                                        <label>
                                            Old Password
                                        </label>
                                        <input
                                        type="text"
                                        className = "form-control"
                                        placeholder="Enter Old Password"
                                        onChange={(e)=>{setOldPass(e.target.value)}}
                                        />
                                    </div>

                                </Col>
                                <Col>
                                    <div>
                                        <label>
                                            New Password
                                        </label>
                                        <input
                                        type="text"
                                        className = "form-control"
                                        placeholder="Enter New Password"
                                        onChange={(e)=>{setNewPass(e.target.value)}}/>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </form>
                        <div>&nbsp;</div>
                        <button className="popupbutton" onClick={UpdatePassword}> Submit
                </button>

                    </ModalBody>
                </Modal>
                <button className="passbutton" onClick={() => setmodal(true)}> Update Password
                </button>
            </div>
            </>
        )
    }
// }


export default EHome;