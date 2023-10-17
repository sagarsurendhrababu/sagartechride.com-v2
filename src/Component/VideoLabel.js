import React, { useContext } from 'react';
import { Context } from '../Home';


export default function Videos() {
  const [state,dispatch] = useContext(Context);
  return (
    <div className='welcomeVideoMinimal'>        
        <span className='playLabel' onClick={()=>{
          state.closeBigVideo = true;
        }}><i class="bi bi-play"></i> About Me <small>2 MIN</small></span>
    </div>
  )
}