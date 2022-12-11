import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import Axios from 'axios';
import './Home.css';

const Navbar = ({link, link2}) => {
  const history = useHistory()
    const [modal, setmodal] = useState(false)
    const [oldpassw, setOldPass] = useState("")
    const [newpassw, setNewPass] = useState("")
    const [drop, setDrop] = useState('none');
  const showDrop = () => {
    if(drop === 'none'){
        setDrop('block');
    }
    else{
        setDrop('none');
    }
}


const signOut = () => {
    history.push(link2)
    }

const UpdatePassword  = () => {
    Axios.post('https://dbproject-group22.herokuapp.com/api/update-password', {
        oldpassw: oldpassw,
        newpassw: newpassw}).then((response)=>{
            if (response.data.message !== "Wrong password"){
                alert(response.data.message)
            }
            else {
                alert(response.data.message)
            }
        })
    }
  return (
    <>
    <div style={{background: '#073b4c', padding: '1rem 1rem', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '2', marginBottom: '5rem', display: 'flex', justifyContent: 'space-between'}}>
        <span style={{color: 'white', fontSize: '1.5rem'}}>Student Management System</span>
        <span>
            <Link to={link}>
                <i className="fa fa-home" aria-hidden="true" style={{fontSize: '1.9rem', color: 'white', cursor: 'pointer', marginRight: '2rem'}}/>
            </Link>
            {link === '/home' ? <Link to='/student-profile'><i className="fa fa-user" aria-hidden="true" style={{fontSize: '1.9rem', color: 'white', cursor: 'pointer', marginRight: '2rem'}}/></Link>: <></>}
            <div className="dropdown">
                <i className="fa fa-ellipsis-v" aria-hidden="true" style={{fontSize: '1.9rem', color: 'white', cursor: 'pointer', marginRight: '1rem'}} onClick={showDrop}/>
                <div className="dropdown-content" style={{display: `${drop}`}}>
                    <span onClick={() => setmodal(true)}>Change Password</span>
                    <span onClick={signOut}>Log Out</span>
                </div>
            </div>
        </span>
    </div>
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
                    <button className="popupbutton" style={{borderRadius: '0.5rem', background: '#073b4c', height: '3rem', width: '10rem', color: 'white', marginLeft: '30%'}} onClick={UpdatePassword}> Submit
            </button>

                </ModalBody>
            </Modal>
    </>
  )
}

export default Navbar
