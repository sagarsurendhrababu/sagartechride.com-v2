import React from 'react'
import { Link } from 'react-router-dom';

export default function AlligatorDentistTooth() {
  return (
    <div className='gameCanvas'>
        <div className="container">
            <div className='gameHeader d-flex align-items-center'>
                  <Link to='/' className='d-flex align-items-center text-white backBtn'>
                    <i className="bi bi-backspace"></i>
                    <label className='mx-2'>Back</label>
                  </Link>
                <h5 className='text-white px-5 m-0'>Alligator Dentist Tooth</h5>
            </div>
            <div className='gameContent'>
                <p className='text-white'>Coming Soon...</p>                               
            </div>
        </div>
    </div>    
  )
}
