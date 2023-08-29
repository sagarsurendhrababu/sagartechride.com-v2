import React, { useContext,useEffect, useState } from 'react'
import WinStartBar from './WinStartBar';
import { Context } from '../App';
import { Data } from '../Reducer/Data';
import {ContentData} from '../Reducer/ContentData';

export default function WinNav(){

  const [state,dispatch] = useContext(Context);
 
  function checkIcon(ele){
    let icons;
    ContentData.map(e=>{
      if(ele === e.id){
        icons = e.icon;
      }
    });
    return icons;
  }

  function getBrowserOpen(n){
     const arrayAllBrowser = document.querySelectorAll('.browserWin');
     arrayAllBrowser.forEach((e,i)=>{
       if(n === i){
        arrayAllBrowser[i].classList.add('topBrowser');
        arrayAllBrowser[i].classList.remove('hideBrowser');
       }else{
        arrayAllBrowser[i].classList.remove('topBrowser');
       }
     })
  }
  useEffect(()=>{
    const FullDate = new Date();
    let year = FullDate.getFullYear();
    let month = FullDate.getMonth();
    let day = FullDate.getDate();

    let hour = FullDate.getHours();
    let minutes = FullDate.getMinutes();

    document.querySelector(".dateToday").innerHTML = `${day}-${month+1}-${year}`;
    document.querySelector(".todayTime").innerHTML = `${hour}:${minutes}`;
  });
  return (
    <div className="winNav">      
      {state.winStart? <WinStartBar/> : ''}
    <div className="col-sm-1 d-flex winNavLeft">
        <a href="#" onClick={()=>{dispatch({
          type:'WinStartBtn',
          payload:!state.winStart          
        });  
        document.documentElement.requestFullscreen();      
        }}>
        <img src="../IMG/windows-icon.svg"/>
        </a>
        <a href="#"><img src="../IMG/windows-search-icon.svg"/></a>
    </div>
    <div className='col-sm-8 d-sm-flex winNavMinBrowser'>
        <ul className='col-sm-12 d-sm-flex'>
          {
          Data.browserWinArray.map((item,index)=>(                       
            <li key={item} onClick={()=>{getBrowserOpen(index);}}>                           
              <img className='browserIconShow' src={`../IMG/${checkIcon(item)}`}/>
            </li>
           ))
          }           
        </ul>
    </div>
    <div className="col-sm-3 d-flex justify-content-sm-end winNavRight">
        <a href='#'><i class="bi bi-youtube"></i></a>
        <a href="#"><i class="bi bi-behance"></i></a>
        <a href="#"><i class="bi bi-linkedin"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><img src="../IMG/speaker-icon.svg"/></a>
        <a href="#">ENG</a>
        <div className='date-time'>
          <span className='todayTime'></span>
          <span className='dateToday'></span>          
        </div>               
        <a href="#"><img src="../IMG/chat-icon.svg"/></a>        
    </div>  
  </div> 
  )
}
