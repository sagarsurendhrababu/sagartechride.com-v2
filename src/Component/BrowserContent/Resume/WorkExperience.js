import React from 'react';
import { ContentData } from '../../../Reducer/ContentData';

export default function WorkExperience() {
  const ExpData = ContentData[22].workExp;
  return (
    <>
    {ExpData.map((e,i) => (
      <div className='mb-4 pb-4 border-bottom'>             
        <div className='col-12 d-sm-flex mb-3 justify-content-between'>
        <img className='companyLogo' src={`./IMG/${e.logo}`}/><br></br>
        <small className='text-secondary'>{e.date}</small>
        </div>
        <p><b className='text-seondary'>{e.designation}</b></p>
        <p>{e.desc}</p>
        <h6 className='text-secondary'>
          <a href={e.website} target='_blank'>website</a> | <a href={e.linkedin}>linkedin</a>
        </h6>          
      </div>
    ))}
                 
    </>
  )
}
