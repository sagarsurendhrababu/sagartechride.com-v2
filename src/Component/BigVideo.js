import React, { useContext } from 'react';
import { Context } from '../App';
import { useReducer } from 'react';

export default function BigVideo() {
  const [state,dispatch] = useContext(Context)
  return (
    <div className='bigVideoBg'>
    <span className="bigVideoCloseBtn" onClick={()=>{
      state.closeBigVideo = false;
    }}><i class="bi bi-x-lg"></i></span>
    <video controls autoPlay width="700" height="400">
        <source src="./video/sagar-intro.mp4" type="video/mp4" />          
    </video>
    <h4 className='letsTalk' onClick={()=>{
              dispatch({
              type:'browserWinArray',
              payload:'profile',
              })
              state.closeBigVideo = false;
            }}>Lets Talk</h4>                     
    </div>
  )
}
