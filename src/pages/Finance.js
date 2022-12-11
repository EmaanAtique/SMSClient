import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Finance = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [no, setNo] = useState(false);

    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);
    useEffect(()=> {
        const getData = async () => {
            const endpointUrl = `https://dbproject-group22.herokuapp.com/student/total-cred`;
            const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/hostelite`;
            const endpointUrl3 = `https://dbproject-group22.herokuapp.com/student/cgpa`;
            const endpointUrl4 = `https://dbproject-group22.herokuapp.com/student/paid`;
            const options = {
                method: "GET",
            };
            const response4 = await fetch(endpointUrl4, options);
            const content4 = await response4.json();
            if(content4[0].paid === 0){
                const response = await fetch(endpointUrl, options);
                const response2 = await fetch(endpointUrl2, options);
                const response3 = await fetch(endpointUrl3, options);
                const content = await response.json();
                const content2 = await response2.json();
                const content3 = await response3.json();
                if(content.hasOwnProperty('error')){
                    setError(content.error)
                }
                else{
                    setData(content[0])
                    setData2(content2[0])
                    setData3(content3[0])
                }
            }else{
                setNo(true)
            }
        }
        getData();
    }, [])
    if(no){
        return (
            <div style={{height: '100%', overflow: 'hidden'}}>
            <Navbar link='/home' link2='/landingpage'/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', height: '91%', marginTop: '4rem', width: '20%', background: 'whitesmoke', position: 'absolute'}}>
                <span style={{margin: '0.5rem', padding: '1rem', background: '#073b4c', color: 'white', fontSize: '1rem', borderRadius: '0.5rem'}}>Finances</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', margin: '1rem', marginTop: '4rem', marginLeft: '20%', width: '80%', paddingBottom: '0', marginBottom: '0', height: '100%', overflow: 'hidden'}}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#073b4c'}}>Charges Due</span>
                <span style={{color: 'green', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center'}}>There are no outstanding charges at this time</span>
            </div>
            </div>
            </div>
        )
    }
    if(data !== null && data2 !== null && data3 !== null){
        let t = 28000*parseInt(data.Total);
        let h = parseInt(data2.hostelite) === 1 ? 60000 : 0
        let s = parseFloat(data3.cgpa) >= 3.7 ? t*0.5 : parseFloat(data3.cgpa) >= 3.5 ? t*0.3 : 0;
        let to = t + h - s;
        return (
            <div style={{height: '100%', overflow: 'hidden'}}>
            <Navbar link='/home' link2='/landingpage'/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', height: '91%', marginTop: '4rem', width: '20%', background: 'whitesmoke', position: 'absolute'}}>
                <span style={{margin: '0.5rem', padding: '1rem', background: '#073b4c', color: 'white', fontSize: '1rem', borderRadius: '0.5rem'}}>Finances</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', margin: '1rem', marginTop: '4rem', marginLeft: '20%', width: '80%', paddingBottom: '0', marginBottom: '0', height: '100%', overflow: 'hidden'}}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#073b4c'}}>Charges Due</span>
                <div style={{fontSize: '2rem'}}>{error}</div>
                <div style={{width: '100%', marginTop: '1rem', background: 'whitesmoke', overflowY: 'auto', borderRadius: '1.5rem'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', background: '#073b4c', borderRadius: '1.5rem 1.5rem 0 0'}}>
                        <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Reason</span>
                        <span style={{color: 'white', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '19%', textAlign: 'center'}}>Charges</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #073b4c'}}>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Tution Charges</span>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '19%', textAlign: 'center'}}>Rs. 28,000 x {data.Total} = {t}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #073b4c'}}>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Hostel Charges</span>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '19%', textAlign: 'center'}}>Rs. {h}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #073b4c'}}>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Scholarship Adjustment</span>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '19%', textAlign: 'center'}}>- Rs. ${s.toFixed(2)}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem'}}>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '20%', textAlign: 'center'}}>Total</span>
                        <span style={{color: '#073b4c', fontSize: '1rem', fontWeight: 'bold', margin: '0 1rem', width: '19%', textAlign: 'center'}}>Rs. {to}</span>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }else{
        return(
            <>
                <Navbar />
                <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000'}} />
                <div style={{position: 'fixed', top: '50%', left: '50%', transform:'translate(-50%, -50%)', backgroundColor: 'transparent', padding: '20px', zIndex: '1000', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                    <text style={{color: 'white', fontSize: '40px', fontWeight: 'bold'}}>Loading...</text>
                </div>
            </>
        )
    }
}

export default Finance
