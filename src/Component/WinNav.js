import React, { useContext } from 'react'
import WinStartBar from './WinStartBar';
import { Context } from '../App';

export default function WinNav() {
  const [state,dispatch] = useContext(Context);
  return (
    <div className="winNav">      
      {state.winStart? <WinStartBar/> : ''}
    <div className="col-sm-6 d-sm-flex winNavLeft">
        <a href="#" onClick={()=>{dispatch({
          type:'WinStartBtn',
          payload:!state.winStart
        })}}><img src="../IMG/windows-icon.svg"/></a>
        <a href="#"><img src="../IMG/windows-search-icon.svg"/></a>
    </div>
    <div className="col-sm-6 d-sm-flex justify-content-sm-end winNavRight">
        <a href="#"><img src="../IMG/arrow-up-icon.svg"/></a>
        <a href="#"><img src="../IMG/battery-icon.svg"/></a>
        <a href="#"><img src="../IMG/wifi-icon.svg"/></a>
        <a href="#"><img src="../IMG/speaker-icon.svg"/></a>
        <a href="#">ENG</a>
        <div className='date-time'>
          <span>03:21 PM</span>
          <span>18-05-2023</span>
        </div>               
        <a href="#"><img src="../IMG/chat-icon.svg"/></a>
    </div>  
  </div> 
  )
}
