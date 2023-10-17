import React, { useContext } from 'react'
import { Context } from '../Home';

export default function Cms() {
  const [state,dispatch] = useContext(Context);
  return (
    <ul>
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'wordpress'
            })
        }}>
            <img src='../IMG/wordpress.svg'/>
            <label>Wordpress</label>
        </li>   
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'joomla'
            })
        }}>
            <img src='../IMG/joomla.svg'/>
            <label>Joomla</label>
        </li> 
        <li onClick={()=>{
            dispatch({
                type:'browserWinArray',
                payload:'opencart'
            })
        }}>
            <img src='../IMG/opencart.svg'/>
            <label>Opencart</label>
        </li>                
    </ul>
  )
}
