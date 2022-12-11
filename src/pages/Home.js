import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Advisor from "./Advisor";
import HostelAccomodation from "./HostelAccomodation";
import Clearance from "./Clearance";
import Withdraw from "./Withdraw";
import YearOff from "./YearOff";
import Progress from "./Progress";
import './Home.css';


const Home = () => {
    const [showAdvisor, setShowAdvisor] = useState(false);
    const [showHostel, setShowHostel] = useState(false);
    const [showClearance, setShowClearance] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [fname, setFname] = useState('        ');
    const [lname, setLname] = useState('        ');
    const [email, setEmail] = useState('        ');
    const [dept, setDept] = useState('      ');
    const [remaining, setRemaining] = useState(null);
    const [completed, setCompleted] = useState(null);
    const application = async() => {
        const endpointUrl = `https://dbproject-group22.herokuapp.com/student/hostelite`;
        const options = {
            method: "GET",
        };
        const response = await fetch(endpointUrl, options);
        const content = await response.json();
        if(content[0].hostelite === '0'){
            const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/check/application`;
            const response2 = await fetch(endpointUrl2, options);
            const content2 = await response2.json();
            if(content2)
                setShowHostel(true);
            else
                alert("Your application is already submitted. You are not allowed to submit it again")
        }
        else{
            alert("You are already a hostelite so you can't apply again.")
        }
    }
    const clearance = async() => {
        const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/check/clearance`;
        const options = {
            method: "GET",
        };
        const response2 = await fetch(endpointUrl2, options);
        const content2 = await response2.json();
        if(content2)
            setShowClearance(true)
        else
            alert("Your application is already submitted. You are not allowed to submit it again")
    }
    const withdraw = async() => {
        const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/check/withdraw`;
        const options = {
            method: "GET",
        };
        const response2 = await fetch(endpointUrl2, options);
        const content2 = await response2.json();
        if(content2)
            setShowWithdraw(true)
        else
            alert("Your application is already submitted. You are not allowed to submit it again")
    }
    const yearOff = async() => {
        const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/check/year`;
        const options = {
            method: "GET",
        };
        const response2 = await fetch(endpointUrl2, options);
        const content2 = await response2.json();
        if(content2)
            setShowYear(true)
        else
            alert("Your application is already submitted. You are not allowed to submit it again")
    }
    const progress = async() => {
        const endpointUrl = `https://dbproject-group22.herokuapp.com/student/fulfilled`;
        const options = {
            method: "GET",
        };
        const response = await fetch(endpointUrl, options);
        const content = await response.json();
        setCompleted(content[0].cr_hrs_fulfilled);
        setRemaining(content[0].cr_hrs_left);
        setShowProgress(true)
    }
    useEffect(() => {
        const getData = async () => {
            const endpointUrl = `https://dbproject-group22.herokuapp.com/student/advisor`;
            const options = {
                method: "GET",
            };
            const response = await fetch(endpointUrl, options);
            const content = await response.json();
            if(content.hasOwnProperty('error')){
                // setError(content.error)
            }
            else{
                setFname(content[0].f_name);
                setLname(content[0].l_name);
                setDept(content[0].dept);
                setEmail(content[0].email);
            }
        }
        getData();
    }, [])
    return (
        <>
        {/* <div style={{marginTop: '5rem'}}>
            <h1> Home Page</h1>
            <button className="logbutton" onClick={signOut} > Sign Out</button>
            <button className="passbutton" onClick={() => setmodal(true)}> Update Password
            </button>
            <Link to={'/student-profile'}>
            <button className="profilebutton"> Profile
            </button>
            </Link>
            <Link to={'/academic-records'}>
            <button className="academic"> AcademicRecords
            </button>
            </Link>
        </div> */}
        <Navbar link='/home' link2='/landingpage'/>
        <div style={{display: 'flex', flexDirection: 'row', width: '80%', height: '100%', flexWrap: 'wrap', margin: 'auto', marginTop: '5rem', justifyContent: 'space-around', textDecoration: 'none'}}>
            <Link to='/academic-records' style={{textDecoration: 'none'}}>
                <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold'}}>
                    Academic Records
                </div>
            </Link>
            <Link to='/finance' style={{textDecoration: 'none'}}>
                <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold'}}>
                    Financial Account
                </div>
            </Link>
            <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {progress()}}>
                Graduation Progress
            </div>
            <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold', cursor: 'pointer'}}  onClick={() => {application()}}>
                Hostel Accomodation
            </div>
            <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {withdraw()}}>
                Apply for Withdrawl
            </div>
            <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {yearOff()}}>
                Apply for a year off
            </div>
            <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {setShowAdvisor(true)}}>
                Meeting with Faculty Advisor
            </div>
            <div style={{width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center', color: 'white', background: '#073b4c', fontSize: '1.3rem', borderRadius: '2rem', margin: '1.5rem', fontWeight: 'bold', cursor: 'pointer'}}  onClick={() => {clearance()}}>
                Graduation Clearance
            </div>
        </div>
        <Advisor open={showAdvisor} fname={fname} lname={lname} email={email} dept={dept} onClose={() => setShowAdvisor(false)}/>
        <HostelAccomodation open={showHostel} onClose={() => setShowHostel(false)}/>
        <Clearance open={showClearance} onClose={() => setShowClearance(false)}/>
        <Withdraw open={showWithdraw} onClose={() => setShowWithdraw(false)}/>
        <YearOff open={showYear} onClose={() => setShowYear(false)}/>
        <Progress open={showProgress} remaining={remaining} completed={completed} onClose={() => setShowProgress(false)} />
        </>
    )
}



export default Home;