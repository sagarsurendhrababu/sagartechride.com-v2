import React, { useContext } from 'react'
import { Context } from '../Home';

export default function Development() {
    const [state,dispatch] = useContext(Context)
  return (
    <ul>
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'javascript'
            })
        }}>
            <img src='../IMG/js.svg'/>
            <label>Javascript</label>
        </li>
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'sass'
            })
        }}>
            <img src='../IMG/sass.svg'/>
            <label>SASS</label>
        </li>                
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'html'
            })
        }}>
            <img src='../IMG/html.svg'/>
            <label>HTML5</label>
        </li>  
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'css'
            })
        }}>
            <img src='../IMG/css.svg'/>
            <label>CSS3</label>
        </li>                    
    </ul>
  )
}
