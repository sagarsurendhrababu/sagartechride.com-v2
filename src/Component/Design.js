import React, { useContext } from 'react'
import { Context } from '../App'

export default function Design() {
  const [state,dispatch] = useContext(Context)
  return (
    <ul>
    <li onClick={()=>{
      dispatch({
        type:'browserWinArray',
        payload:'figma'
      })
    }}> 
        <img src='../IMG/figma.svg'/>
        <label>Figma</label>
    </li>
    <li onClick={()=>{
      dispatch({
        type:'browserWinArray',
        payload:'Illustractor'
      })
    }}>
        <img src='../IMG/Illustractor.svg'/>
        <label>Illustractor</label>
    </li>                                     
    <li onClick={()=>{
      dispatch({
        type:'browserWinArray',
        payload:'photoshop'
      })
    }}>
        <img src='../IMG/photoshop.svg'/>
        <label>Photoshop</label>
    </li>                     
    </ul>    
  )
}
