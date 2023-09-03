import React, { useEffect } from 'react';

export default function Welcome() { 
  return (
    <div className='welcomeScreen'>
        <span className='t1'>Hello World!</span>
        <span className='t3'>I'm <b>Sagar Babu</b> a passionate <b>frontend developer</b> & <b>UI designer</b> from INDIA. This website is a showcase of my skills, projects, and tutorial videos. I hope you'll find this space informative and inspiring.</span>
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
