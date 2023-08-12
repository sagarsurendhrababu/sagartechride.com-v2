import React, { useContext } from 'react'
import { Context } from '../App'
import BrowserWin from './BrowserWin';
import { Data } from '../Reducer/Data';

export default function WinDesktop() {
  const [state,dispatch]=useContext(Context);  
  return (
    <div className="winDesktop" id='displayContainer' onClick={()=>{
      dispatch({
        type:'WinStartBtn',
        payload:false
      })
    }}>
      {
        Data.browserWinArray.map((item,indx)=>(
           <BrowserWin key={item} indexValue={indx} itemName={item}/>
           ))
      }    
    </div>
  )
}
