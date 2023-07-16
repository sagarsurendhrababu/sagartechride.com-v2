import React, { useContext, useEffect } from 'react'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { Context } from '../App';
import { click } from '@testing-library/user-event/dist/click';
import { Data } from '../Reducer/Data';
import BrowserContent from './BrowserContent/BrowserContent';


export default function BrowserWin(props) {    
  const [state,dispatch] = useContext(Context);
  
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
      });  
      

  return ( 
           
    <div className='browserWin'>
        <div className='headerBrowserWin'>
            <div>
              <span>
                <img src='../IMG/folder-small.svg'/>
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
            <div>
              <ul className='headerTopMenu'>
                  <li>File</li>
                  <li>Home</li>
                  <li>Share</li>
                  <li>View</li>
              </ul>
            </div>
        </div>
        <div className='contentBrowserWin'>
              <BrowserContent contenName = {props.itemName}/>
        </div>
    </div>
  )
}
