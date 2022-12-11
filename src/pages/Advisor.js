import React from 'react';
import ReactDOM from 'react-dom';

const Advisor = ({open, fname, lname, email, dept, onClose}) => {
    if(!open) return null;
    
    return ReactDOM.createPortal(
        <>
            <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000'}} />
            <div style={{position: 'fixed', top: '50%', left: '50%', transform:'translate(-50%, -50%)', backgroundColor: 'transparent', padding: '20px', zIndex: '1000', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '600px', background: `white`, borderRadius: '2rem', display: 'flex', flexDirection: 'column'}}>
                    <span style={{width: '100%', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', padding: '1rem', background: '#073b4c', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', color: '#fff', fontWeight: 'bold'}}>Advisor Details</span>
                    <span style={{width: '100%'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <span style={{fontSize: '1.2rem', padding: '1rem', height: '100%', display: 'flex', textAlign: 'center'}}><b style={{color: '#073b4c', marginRight: '10px'}}>First Name: </b>{fname}</span>
                            <span style={{fontSize: '1.2rem', padding: '1rem', height: '100%', display: 'flex', textAlign: 'center'}}><b style={{color: '#073b4c', marginRight: '10px'}}>Last Name: </b>{lname}</span>
                        </div>
                        <span style={{fontSize: '1.2rem', padding: '1rem', height: '100%', display: 'flex', textAlign: 'center', paddingTop: '0'}}><b style={{color: '#073b4c', marginRight: '10px'}}>Email: </b>{email}</span>
                        <span style={{fontSize: '1.2rem', padding: '1rem', height: '100%', display: 'flex', textAlign: 'center', paddingTop: '0'}}><b style={{color: '#073b4c', marginRight: '10px'}}>Department: </b>{dept}</span>
                        <button style={{width: '230px', height: '50px', border: 'none', color: 'white', background: '#073b4c', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', marginLeft: '29%', marginBottom: '0.5rem'}} onClick={onClose} type="button">Close</button>
                    </span>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Advisor
