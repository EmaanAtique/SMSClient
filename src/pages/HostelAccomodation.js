import React from 'react';
import ReactDOM from 'react-dom';

const HostelAccomodation = ({open, onClose}) => {
    if(!open) return null;
    const apply = async() => {
        const endpointUrl = `https://dbproject-group22.herokuapp.com/student/apply`;
        const options = {
            method: "POST",
        };
        const response = await fetch(endpointUrl, options);
        const content = await response.json();
        if(content.hasOwnProperty('error')){
            alert(content.error);
        }
        else{
            onClose()
            alert('Your application is submitted successfully');
        }
    }
    return ReactDOM.createPortal(
        <>
            <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000'}} />
            <div style={{position: 'fixed', top: '50%', left: '50%', transform:'translate(-50%, -50%)', backgroundColor: 'transparent', padding: '20px', zIndex: '1000', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '500px', background: `white`, borderRadius: '2rem', display: 'flex', flexDirection: 'column'}}>
                    <span style={{width: '100%', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', padding: '1rem', background: '#073b4c', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', color: '#fff', fontWeight: 'bold'}}>Hostel Accomodation</span>
                    <span style={{width: '100%'}}>
                    <span style={{fontSize: '1.2rem', padding: '1rem', height: '100%', display: 'flex', textAlign: 'center', marginTop: '1rem', paddingTop: '0px'}}><b style={{color: '#073b4c'}}>Note: </b>Hostel Rooms will only be alloted to those students who are not from the city Lahore.</span>
                        <button style={{width: '230px', height: '50px', border: 'none', color: 'white', background: '#073b4c', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', marginLeft: '29%', marginBottom: '0.5rem'}} onClick={apply} type="button">Apply</button>
                    </span>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default HostelAccomodation
