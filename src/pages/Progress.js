import React from 'react';
import ReactDOM from 'react-dom';
import { PieChart } from 'react-minimal-pie-chart';

const Progress = ({open, completed, remaining, onClose}) => {
    if(!open) return null;
    return ReactDOM.createPortal(
        <>
            <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1000'}} />
            <div style={{position: 'fixed', top: '50%', left: '50%', transform:'translate(-50%, -50%)', backgroundColor: 'transparent', padding: '20px', zIndex: '1000', borderRadius: '10px', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '400px', background: `white`, borderRadius: '2rem', display: 'flex', flexDirection: 'column'}}>
                    <span style={{width: '100%', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', padding: '1rem', background: '#073b4c', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', color: '#fff', fontWeight: 'bold', marginBottom: '2.5rem'}}>Academic Progress</span>
                    <span style={{width: '100%', justifyContent: 'center'}}>
                        <span style={{marginLeft: '2.1rem'}}>
                        <PieChart
                            data={[
                                { title: 'Remaining', value: remaining, color: '#800020' },
                                { title: 'Completed', value: completed, color: '#097969'},
                            ]}
                            viewBoxSize={[120, 120]}
                            segmentsShift={0.5}
                            radius={45}
                        />
                        </span>
                        <button style={{width: '230px', height: '50px', border: 'none', color: 'white', background: '#073b4c', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold', marginLeft: '22%', marginBottom: '0.5rem'}} onClick={onClose} type="button">Close</button>
                    </span>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Progress
