import React, { useEffect } from 'react';
import gsap from "gsap";


export default function Welcome() {
  useEffect(()=>{
    // let timeLine = gsap.timeline();
    // timeLine.from(".t1", {y:150, duration:1, opacity:0, ease:"back"})
    // timeLine.from(".t2", {y:150, duration:1, opacity:0, ease:"back"})
    // timeLine.from(".t3", {y:150, duration:1, opacity:0, ease:"back"})
    // timeLine.from(".t4", {y:150, duration:1, opacity:0, ease:"back"})
    // timeLine.from(".t5", {y:150, duration:1, opacity:0, ease:"back"})    
    // timeLine.from(".actionBtns", {y:150, duration:1, opacity:0, ease:"back"})
  })
  return (
    <div className='welcomeScreen'>
        <span className='t1'>Hi</span>
        <span className='t2'>Good to see you here</span>
        <span className='t3'>I'm Sagar <b>Surendhranbabu</b>, a passionate <b>frontend developer</b>.</span>
        <span className='t4'>This website is a showcase of my skills, projects, and tutorial videos.</span>
        <span className='t5'>I hope you'll find this space informative and inspiring.</span>
        <div className='d-flex gap-3 actionBtns'>
          <button onClick={()=>{
              document.documentElement.requestFullscreen();
              document.querySelector('.welcomeScreen').style.visibility = "hidden";
          }}>Skip</button>
          <button onClick={()=>{
              document.documentElement.requestFullscreen();
              document.querySelector('.welcomeScreen').style.visibility = "hidden";
          }}>Lets Start</button>          
        </div>
    </div>
  )
}
