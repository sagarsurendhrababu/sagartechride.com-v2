import React from 'react';
import { ContentData } from '../../../Reducer/ContentData';

export default function Education() {
  const eduData = ContentData[23].education;
  return (
    <>  
    {eduData.map((e,i) => (
      <div className='mb-4 pb-4 border-bottom' key={i}>             
          <h6>{e.subject}</h6>
          <small className='text-secondary'>{e.year}</small>
          <p>{e.institute}</p>  
      </div>
    ))}
    </>
  )
}
