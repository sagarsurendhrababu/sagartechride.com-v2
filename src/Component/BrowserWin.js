import React, { useContext, useEffect } from 'react'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { Context } from '../App';
import {ContentData} from '../Reducer/ContentData';
import { click } from '@testing-library/user-event/dist/click';
import { Data } from '../Reducer/Data';
import BrowserContent from './BrowserContent/BrowserContent';


export default function BrowserWin(props) {    
  const [state,dispatch] = useContext(Context);
  let icons;
  ContentData.map(e=>{
    if(props.itemName === e.id){
      icons = e.icon;
    }
  });


  let allBrowserWin;

    useEffect(()=>{        
        gsap.registerPlugin(Draggable);
        Draggable.create(".browserWin", {
          type:"y,x",
          bounds: document.getElementById("displayContainer"),
          inertia: true,
        });                
      }); 

      useEffect(()=>{                
        allBrowserWin = document.querySelectorAll('.browserWin');

        function isFullScreen() {
          return (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
          );
        }
        if (!isFullScreen()) {
          document.documentElement.requestFullscreen();   
          document.createElement('div').classList.add('maskDesktop');
        }

      });  

  return (            
    <div className='browserWin'>
        <div className='headerBrowserWin'>
            <div>
              <span>
                <img className='browserIcon' src={`../IMG/${icons}`}/>
              </span>
              <span>
                <ul>
                  <li onClick={()=>{dispatch({
                    type:'browserMinimize',
                    payload:props.indexValue,
                    objectArray:allBrowserWin
                  })}}><img src='../IMG/minimize.svg'/></li>

                  <li onClick={()=>{dispatch({
                    type:'browserMaximize',
                    payload: props.indexValue,
                    objectArray:allBrowserWin                    
                  })}}><img src='../IMG/maximize.svg'/></li>

                  <li onClick={()=>{dispatch({
                    type:'browserClose',
                    payload: props.itemName
                  })}}><img src='../IMG/close.svg'/></li>

                </ul>
              </span>
            </div>
        </div>
        <div className='contentBrowserWin'>
              <BrowserContent contenName = {props.itemName}/>
        </div>
    </div>
  )
}
