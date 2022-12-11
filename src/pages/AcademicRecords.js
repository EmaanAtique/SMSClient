import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const AcademicRecords = () => {
    // const [program, setProgram] = useState('        ');
    // const [school, setSchool] = useState('      ');
    const [major, setMajor] = useState('        ');
    const [year, setYear] = useState('      ');
    const [active, setActive] = useState('      ');
    const [cgpa, setCgpa] = useState('      ');
    const [credFull, setCredFull] = useState('      ');
    const [remaining, setRemaining] = useState('        ');
    const [data, setData] = useState(null);
    const [responseStatus, setResponseStatus] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=> {
        const getData = async () => {
            
            const endpointUrl = `https://dbproject-group22.herokuapp.com/student/academic`;
            const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/academic/current`;
            const endpointUrl3 = `https://dbproject-group22.herokuapp.com/student/academic/past`;
            const options = {
                method: "GET",
            };
            const response = await fetch(endpointUrl, options);
            setResponseStatus(response.status);
            const content = await response.json();
            setData(content);
            if(content.hasOwnProperty('error')){
                setError(content.error)
                
            }
            else{
                console.log('here')
                const d = content[0];
                console.log(d)
                // setProgram(d.program);
                // setSchool(d.school);
                setMajor(d.major);
                let year1 = parseInt(d.year) === 1 ? 'Freshmen' : parseInt(d.year) === 2 ? 'Sophomore' : parseInt(d.year) === 3 ? 'Junior' : parseInt(d.year) === 4 ? 'Senior' : 'Super Senior';
                setYear(year1);
                let active1 = d.active_student === 1 ? 'Yes' : 'No';
                setActive(active1)
                setCgpa(d.cgpa);
                setCredFull(d.cr_hrs_fulfilled);
                setRemaining(d.cr_hrs_left);
                setData(d);
            }

            const response2 = await fetch(endpointUrl2, options);
            const response3 = await fetch(endpointUrl3, options);
            
            // const content = await response.json();
            const content2 = await response2.json();
            const content3 = await response3.json();
            
            let currDiv =
                <>
                    {content2.map((record, key) => {
                        return(
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem'}} key={key}>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>{record.course_id}</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Current</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Current</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Pending</span>
                        </div>)
                    })}
                </>;
            setData2(currDiv);

            let pastDiv =
                <>
                    {content3.map((record, key) => {
                        return(
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem'}} key={key}>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>{record.course_id}</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>{record.year}</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Past</span>
                            <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>{record.grade}</span>
                        </div>)
                    })}
                </>;
            setData3(pastDiv);
        }
        getData();
    }, [])
    if((data !== null && responseStatus === 200) || (error !== null && responseStatus === 200)){
        return (
            <div style={{height: '100%', overflow: 'hidden'}}>
            <Navbar link={'/home'} link2={'/landingpage'}/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', height: '91%', marginTop: '4rem', width: '20%', background: 'whitesmoke', position: 'absolute'}}>
                <span style={{margin: '0.5rem', padding: '1rem', background: '#073b4c', color: 'white', fontSize: '1rem', borderRadius: '0.5rem'}}>Course History</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', margin: '1rem', marginTop: '4rem', marginLeft: '20%', width: '80%', paddingBottom: '0', marginBottom: '0', height: '100%', overflow: 'hidden'}}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#073b4c'}}>Academic Records</span>
                <div style={{fontSize: '2rem'}}>{error}</div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '1rem', justifyContent: 'space-between'}}>
                    {/* <span style={{fontSize: '1rem', marginRight: '1rem'}}><b style={{color: '#073b4c'}}>Program: </b>{program}</span>
                    <span style={{fontSize: '1rem', marginRight: '1rem'}}><b style={{color: '#073b4c'}}>School: </b>{school}</span> */}
                    <span style={{fontSize: '1rem', marginRight: '1rem'}}><b style={{color: '#073b4c'}}>Major: </b>{major}</span>
                    <span style={{fontSize: '1rem'}}><b style={{color: '#073b4c'}}>Year: </b>{year}</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '1rem', justifyContent: 'space-between'}}>
                    <span style={{fontSize: '1rem', marginRight: '1rem'}}><b style={{color: '#073b4c'}}>Active Student: </b>{active}</span>
                    <span style={{fontSize: '1rem', marginRight: '1rem'}}><b style={{color: '#073b4c'}}>CGPA: </b>{cgpa}</span>
                    <span style={{fontSize: '1rem', marginRight: '1rem'}}><b style={{color: '#073b4c'}}>Fullfilled Credit Hours: </b>{credFull}</span>
                    <span style={{fontSize: '1rem'}}><b style={{color: '#073b4c'}}>Remaining Credit Hours: </b>{remaining}</span>
                </div>
                <div style={{width: '78%', height: '70%', top:'50%', position: 'absolute', background: 'whitesmoke', overflowY: 'auto', borderRadius: '1.5rem'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', background: '#073b4c', position: 'fixed', width: '78%', borderRadius: '1.5rem 1.5rem 0 0'}}>
                        <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Course ID</span>
                        <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Year</span>
                        <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Status</span>
                        <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '10%', textAlign: 'center'}}>Grade</span>
                    </div>
                    <div style={{marginTop: '4rem'}}>
                        {active === 'Yes' ? data2 : <></>}
                        {data3}
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }else{
        return(
            <>
                <Navbar link={'/home'} link2={'/landingpage'}/>
                <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000'}} />
                <div style={{position: 'fixed', top: '50%', left: '50%', transform:'translate(-50%, -50%)', backgroundColor: 'transparent', padding: '20px', zIndex: '1000', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                    <text style={{color: 'white', fontSize: '40px', fontWeight: 'bold'}}>Loading...</text>
                </div>
            </>
        )
    }
}

export default AcademicRecords
