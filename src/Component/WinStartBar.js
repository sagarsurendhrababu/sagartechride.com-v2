import React, { useContext } from 'react';
import Design from './Design';
import Development from './Development';
import Cms from './Cms';
import { Context } from '../App';

export default function WinStartBar() {
    const [state,dispatch] = useContext(Context)
  return (
    <div className='WinStartBar'>
        <div>
            <ul>
                <li>
                    <img src='../IMG/handburg.svg'/>
                    <h6>START</h6>
                </li>
            </ul>
            <ul>
                <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'profile',
                   })
                }}>
                    <img src='../IMG/profileIcon.svg'/> 
                    <h6>Profile</h6>                   
                </li>                 
                <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'document',
                   })
                }}>
                    <img src='../IMG/docIcon.svg'/>
                    <h6>Document</h6>
                </li>                
                <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'gallery',
                   })
                }}>
                    <img src='../IMG/imgIcon.svg'/>
                    <h6>Gallery</h6>
                </li>
                <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'settings',
                   })
                }}>
                    <img src='../IMG/settingIcon.svg'/>
                    <h6>Settings</h6>
                </li>
                <li onClick={()=>{
                    document.querySelector('.welcomeScreen').style.visibility="visible";
                }}>
                    <img src='../IMG/winPower.svg'/>
                    <h6>Power</h6>
                </li>                                
            </ul> 
        </div>
        <div>
            <ul className='px-0'>
                <li><label># My Skills</label></li>
                <li onClick={()=>{
                   dispatch({
                    type:'designSection',
                    payload:!state.designSec
                   })
                }}>
                    <img src='../IMG/folder.svg'/>
                    <label>UI/UX</label>
                    <img src='../IMG/arrow-down.svg' className='drop-down-arrow'/>
                </li>
                {!state.designSec? <Design/> : ''}
                <li onClick={()=>{
                   dispatch({
                    type:'devSection',
                    payload:!state.devSec
                   })
                }}>
                    <img src='../IMG/folder.svg'/>
                    <label>Development</label>
                    <img src='../IMG/arrow-down.svg' className='drop-down-arrow'/>
                </li>
                {!state.devSec? <Development/> : ''}
                <li onClick={()=>{
                   dispatch({
                    type:'cmsSection',
                    payload:!state.cmsSec
                   })
                }}>
                    <img src='../IMG/folder.svg'/>
                    <label>CMS</label>
                    <img src='../IMG/arrow-down.svg' className='drop-down-arrow'/>
                </li> 
                {!state.cmsSec? <Cms/> : ''}
            </ul>
        </div>
        <div>
        <ul className='social-media-icons d-flex flex-wrap'>
                 <li>
                    <img src='../IMG/recycle.svg'/>
                    <label>Recycle</label>
                 </li>
                 <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'works',
                   })
                }}>
                    <img src='../IMG/my-works.svg'/>
                    <label>My Works</label>
                 </li>
                 <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'career',
                   })
                }}>
                    <img src='../IMG/career.svg'/>
                    <label>Career History</label>
                 </li>
                 <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'vision',
                   })
                }}>
                    <img src='../IMG/vision.svg'/>
                    <label>My Vision</label>
                 </li> 
                 <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'resume',
                   })
                }}>
                    <img src='../IMG/resume.svg'/>
                    <label>My Resume</label>
                 </li> 
                 <li onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'profile',
                   })
                }}>
                    <img src='../IMG/profile.svg'/>
                    <label>Profile</label>
                 </li>                                                   
              </ul>            
        </div>
    </div>
  )
}
