import React, { useContext } from 'react';
import { Context } from '../App'

export default function DesckTopIcons() {
    const [state,dispatch] = useContext(Context)
  return (
    <ul className='desckIcons'>
        <li onDoubleClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'pc',
            })
        }}
        onClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'pc',
            })
        }}        
        >
            <img src='../IMG/thisPC.svg'/>
            <h6>This PC</h6>
        </li>        
        <li onDoubleClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'games',
            })
        }}
        onClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'games',
            })
        }}        
        >
        <img src='../IMG/myGames.svg'/>
            <h6>Games</h6>
        </li>
        <li onDoubleClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'resume',
            })
        }}
        onClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'resume',
            })
        }}        
        
        >
        <img src='../IMG/myResume.svg'/>
            <h6>Resume</h6>
        </li> 

        <li onDoubleClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'myworks',
            })
        }}
        onClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'myworks',
            })
        }}
        >
        <img src='../IMG/myWorks.svg'/>
            <h6>My Works</h6>
        </li> 

        <li onDoubleClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'tutorials',
            })
        }}
        onClick={()=>{
            dispatch({
            type:'browserWinArray',
            payload:'tutorials',
            })
        }}>
        <img src='../IMG/tutorialVideos.svg'/>
            <h6>Tutorial Videos</h6>
        </li>                         
    </ul>
  )
}
