import React, { useEffect, useState} from 'react';
import Navbar from './Navbar';
import './profile.css';

const Profile = () => {
    let fname = '';
    let lname = '';
    let gender = '';
    let age = '';
    let phone = '';
    let cnic = '';
    let house_number = '';
    let area = '';
    let city = '';
    let email = '';
    let gContact = '';
    let vacStatus = '';

    const [check, setCheck] = useState(true);
    const [edit, setEdit] = useState('Edit Profile');
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(false);
    const [data, setData] = useState(null);
    const [responseStatus, setResponseStatus] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const endpointUrl = `https://dbproject-group22.herokuapp.com/student`;
            const options = {
                method: "GET",
            };
            const response = await fetch(endpointUrl, options);
            setResponseStatus(response.status);
            
            const content = await response.json();
            if(content.hasOwnProperty('error')){
                setError(content.error)
            }
            else{
                const d = content[0];
                setData(d);
            }
        }
        getData();
    }, [load])

    const editDetails = async(event) => {
        event.preventDefault()
        if(check){
            setCheck(false);
            setEdit('Save');
            setError('')
        }
        else{
            setEdit('Edit Profile');
            const endpointUrl2 = `https://dbproject-group22.herokuapp.com/student/edit?f_name=${event.target[1].value}&l_name=${event.target[2].value}&age=${event.target[3].value}&contact_num=${event.target[4].value}&house_num=${event.target[5].value}&city=${event.target[6].value}&area=${event.target[7].value}&email=${event.target[8].value}&gender=${event.target[9].value}&cnic=${event.target[10].value}&guardian_contact=${event.target[11].value}&vacc_status=${event.target[12].value}`
            
            const options2 = {
                method: "PUT",
            };
            
            const response = await fetch(endpointUrl2, options2);
            const content = await response.json();

            if(content.hasOwnProperty("errno")){
                setError(content.code)
            }
            else{
                setError(<text style={{color: 'green'}}>Your information is successfully updated!</text>)
            }
            setCheck(true);
            setLoad(!load);
        }
    }
    if((data !== null && responseStatus === 200) || (error !== null && responseStatus === 200)){
        if(error === null){
            if(data.f_name){fname = data.f_name;}
            if(data.l_name){lname = data.l_name;}
            if(data.gender){gender = data.gender;}
            if(data.age){age = data.age;}
            if(data.cnic_num){cnic = data.cnic_num;}
            if(data.house_number){house_number = data.house_number;}
            if(data.gender){gender = data.gender;}
            if(data.contact_num){phone = data.contact_num;}
            if(data.area){area = data.area;}
            if(data.city){city = data.city;}
            if(data.vacc_status){
                if(data.vacc_status === 1){
                    vacStatus = 'Yes';
                }
                else{
                    vacStatus = 'No';
                }
                
            }
            if(data.guardian_contact){gContact = data.guardian_contact;}
            if(data.email){email = data.email}
        }
        else{
            fname = '';
            lname = '';
            gender = '';
            age = '';
            phone = '';
            cnic = '';
            house_number = '';
            city = '';
            area = '';
            email = '';
            gContact = '';
            vacStatus = '';
        }
        return (
            <>
            <Navbar link='/home' link2='/landingpage'/>
            <div style={{width: '670px', margin: 'auto', marginBottom: '4rem', paddingTop: '1rem', overflow: 'auto', marginTop: '5rem'}}>
              <div style={{display: 'flex', flexDirection: 'column', margin: '0px 20px'}}>
                        <text style={{color: '#073b4c', fontWeight: 'bold', fontSize: '1.8rem'}}>Personal Information</text>
                        <form id="form1" onSubmit={editDetails}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div style={{margin: '25px 0px', backgroundColor: '#f0f2f4', border: '2px solid #073b4c', borderRadius:'100%', width: '100px', height: '100px', display: 'inline-flex'}}>
                                <i className='fa fa-user' style={{fontSize: '50px', color: '#073b4c', padding: '19px', paddingLeft: '26px'}}/>
                            </div>
                            <button type='submit' style={{padding: '8px 15px', fontSize: '14px', fontWeight: 'bold', height: '45px', width: '140px', marginTop: '50px', borderRadius: '10px', backgroundColor: '#073b4c', color: 'white', border: '0px'}}>{edit}</button>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>First name</text>
                                <input type ='text' className='name profile' placeholder='First name' name="fname" defaultValue={fname} readOnly={check}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Last name</text>
                                <input type ='text' className='name profile' placeholder='Last name' name="lname" defaultValue={lname} readOnly={check}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Age</text>
                                <input type ='text' className='name profile' placeholder="Age" name="age" defaultValue={age} readOnly={check}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Phone number</text>
                                <input type='text' id='number' className='name profile' placeholder='+92311111111' defaultValue={phone} readOnly={check}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>House Number</text>
                                <input type ='text' className='name profile' placeholder="House number" name="house_num" defaultValue={house_number} readOnly={check}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>City</text>
                                <input type='text' id='number' className='name profile' placeholder='City' defaultValue={city} readOnly={check}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Area</text>
                            <input className='name profile address' placeholder="Area" name="area" defaultValue={area} readOnly={check}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                            <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Email Address</text>
                            <input className='name profile address' placeholder="Email address" name="address" defaultValue={email} readOnly={check}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Gender</text>
                                <input type ='text' className='name profile' placeholder="Gender" name="gender" defaultValue={gender} readOnly={check}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>CNIC number</text>
                                <input type ='text' className='name profile' placeholder='CNIC number e.g. 1212111112223' name="cnic" defaultValue={cnic} readOnly={check}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Guardian contact number</text>
                                <input type ='text' className='name profile' placeholder="Guardian number e.g. +923112223333" name="gContact" defaultValue={gContact} readOnly={check}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                                <text style={{color: '#a9b3d5', fontWeight: 'bold'}}>Vacination Status (Yes/No)</text>
                                <input type ='text' className='name profile' placeholder='Vacination status' name="vacStatus" defaultValue={vacStatus} readOnly={check}/>
                            </div>
                        </div>
                        </form>
                        <text style={{width: '620px', margin: '20px 0px', marginBottom: '0', fontSize: '1rem', color: 'red'}}>{error}</text>
                    </div>
            </div>
            </>
          )
    }
    else{
        return(
            <>
                <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000'}} />
                <div style={{position: 'fixed', top: '50%', left: '50%', transform:'translate(-50%, -50%)', backgroundColor: 'transparent', padding: '20px', zIndex: '1000', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                    <text style={{color: 'white', fontSize: '40px', fontWeight: 'bold'}}>Loading...</text>
                </div>
            </>
        )
    }
}

export default Profile
