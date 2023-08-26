import React, { useContext } from 'react';
import { Context } from '../App';


export default function Videos() {
  const [state,dispatch] = useContext(Context);
  return (
    <div className='welcomeVideo'>        
        <span className='playBtn' onClick={()=>{
          state.closeBigVideo = true;
        }}><i class="bi bi-play-fill"></i></span>
        <span className='playLabel' onClick={()=>{
          state.closeBigVideo = true;
        }}>About Me <small>2 MIN</small></span>
        <span className='minPlayBox' onClick={() => {
          state.smallVideo = false;
        }}><i class="bi bi-dash"></i></span>
        <video  width="230" height="100%" autoPlay loop muted>
        <source src="./video/sagar-intro.mp4" type="video/mp4" />          
        </video>
    </div>
  )
}
