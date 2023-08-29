import React, { useEffect } from 'react';

export default function Welcome() { 
  return (
    <div className='welcomeScreen'>
        <span className='t1'>Hi</span>
        <span className='t2'>Good to see you here!</span>
        <span className='t3'>I'm <b>Sagar Babu</b> a passionate <b>frontend developer</b> & <b>UI designer</b>.</span>
        <span className='t4'>This website is a showcase of my skills, projects, and tutorial videos.</span>
        <span className='t5'>I hope you'll find this space informative and inspiring.</span>
        <div className='d-flex gap-3 actionBtns'>
          <button className='skipBtn' onClick={()=>{
              document.exitFullscreen()
          }}>Esc</button>
          <button onClick={()=>{
              document.documentElement.requestFullscreen();
              document.querySelector('.welcomeScreen').style.visibility = "hidden";
          }}>Enter</button>           
        </div>
    </div>
  )
}
