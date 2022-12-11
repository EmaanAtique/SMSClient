import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Home.css';

const Allot = props => {
   const Employee_ID = props.location.state;
    // const Employee_ID = 1;
   const [appDiv, setAppDiv] = useState();
   const [cap1, setCap] = useState(null);
    let cap = 0;
   const approve = async(id) => {
    if(parseInt(cap1) === 0){
        alert('No more rooms are available!');
        return;
    }
    // setCap(cap1 - 1)
    // console.log(parseInt(cap1)-1)
    // let c = parseInt(cap1)-1
    const endpointUrl = `https://dbproject-group22.herokuapp.com/residence/applications/ucapacity?cap=${parseInt(cap)-1}`;
    const options = {
        method: "GET",
    };
    const response = await fetch(endpointUrl, options);
    const endpointUrl2 = `https://dbproject-group22.herokuapp.com/residence/applications/delete?id=${id}`;
    const response2 = await fetch(endpointUrl2, options);
   }
   
   useEffect(() => {
    const getData = async () => {
        const endpointUrl = `https://dbproject-group22.herokuapp.com/residence/applications/allot/info`;
        const options = {
            method: "GET",
        };
        const endpointUrl2 = `https://dbproject-group22.herokuapp.com/residence/applications/capacity`;
        const response2 = await fetch(endpointUrl2, options);
        const content2 = await response2.json();
        setCap(content2[0].remaining_capacity)
        cap = content2[0].remaining_capacity;
        const response = await fetch(endpointUrl, options);
        const content = await response.json();
        let appdiv = 
            <div>
            {
                content.map((application, key) => {
                    return(
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', background: 'whitesmoke'}} key={key}>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>{application.f_name + ' ' + application.l_name}</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>{application.city}</span>
                            <span style={{color: 'white', fontSize: '0.9rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>
                                <span style={{background: 'green', color: 'white', padding: '0.8rem 3rem', borderRadius: '1rem', height: '100%', cursor: 'pointer'}} onClick={() => approve(application.student_id)}>Allot Room</span>
                            </span>
                        </div>
                    )
                })
            }
            </div>
        setAppDiv(appdiv)
    }
    getData();
   }, [])
    
    return (
        <div style={{height: '100%', overflow: 'hidden'}}>
            <Navbar link='/rhome' link2='/elandingpage'/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', height: '91%', marginTop: '4rem', width: '20%', background: 'whitesmoke', position: 'absolute'}}>
                <Link style={{margin: '0.5rem', padding: '1rem', background: 'white', color: '#073b4c', fontSize: '1rem', borderRadius: '0.5rem', cursor: 'pointer', textDecoration: 'none'}} to='/rhome'>Applications</Link>
                <span style={{margin: '0.5rem', padding: '1rem', background: '#073b4c', color: 'white', fontSize: '1rem', borderRadius: '0.5rem', cursor: 'pointer'}}>Allot Rooms</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', margin: '1rem', marginTop: '4rem', marginLeft: '20%', width: '80%', paddingBottom: '0', marginBottom: '0', height: '100%', overflow: 'hidden'}}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#073b4c'}}>Allot Rooms</span>
                <span style={{fontSize: '1rem', fontWeight: 'bold', color: '#073b4c', marginTop: '0.5rem'}}><b>Building remaining capacity: </b>{cap1}</span>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', background: '#073b4c', borderRadius: '1.5rem 1.5rem 0 0', marginTop: '1rem'}}>
                    <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Name</span>
                    <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>City</span>
                    <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Allot</span>
                </div>
                <div style={{overflow: 'auto', height: '500px', width: '100%'}}>
                {appDiv}
                </div>
            </div>
            </div>
        </div>
    )
}



export default Allot;