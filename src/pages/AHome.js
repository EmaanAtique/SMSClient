import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import Axios from 'axios'
import './Home.css';

const AHome = props => {
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
            newpassw: newpassw
            }).then((response)=>{
                if (response.data.message !== "Wrong password"){
                    alert("Password updated")
                }
                else {
                    alert("Wrong password")
                }
            })
        }

    const Search  = () => {
       history.push("/asearch");
    }
    

    const addEmployee = () => {
        history.push("/employee-signup")
    }

    const addAdvisors = () => {
        history.push("/add-advisors")
    }

    const manageCharges = () => {
        history.push("/ManageCharges")
    }

    const Applications = () => {
        history.push("/Applications")
    }
    
    // if (global.config.user_logged_in === "") {
    //     return(
    //         <h1> ERROR: UNAUTHORIZED</h1>
    //         )
    //     }
    // else{
    return (
        <div>
            <h1 className="mainHead"> Admin Page</h1>
            <button className="logbutton" onClick={signOut} > Sign Out</button>
            <button className="added" onClick={addEmployee}> Add Employee</button>
            <button className="search" onClick={Search}> Search and Update Student Payment Status </button>
            <button className="assign" onClick={addAdvisors}> Assign Advisors to Advisees</button>
            <button className="charges" onClick={manageCharges}> Manage Student Charges</button>
            <button className="apps" onClick={Applications}> Manage Student Applications</button>
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
        )
    }
// }

export default AHome;