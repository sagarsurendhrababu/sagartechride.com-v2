import React, { useContext, useEffect } from 'react'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { Context } from '../App';
import { click } from '@testing-library/user-event/dist/click';



export default function BrowserWin(props) {    
  const [state,dispatch] = useContext(Context);

  let allBrowserWin;
  let lastZindexValue;

  window.addEventListener('click', ()=>{
    console.log("working");
  });

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
        if(allBrowserWin.length != 0){
          lastZindexValue = allBrowserWin[allBrowserWin.length-1].style.zIndex;
          console.log(lastZindexValue);         
        }    

      });     
  return (    
    <div className='browserWin'style={{zIndex: 100 + props.indexValue}} >
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
            <div>2</div>
        </div>
        {props.itemName}
    </div>
  )
}
