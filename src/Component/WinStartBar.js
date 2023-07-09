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
                </li>
            </ul>
            <ul>
                <li>
                    <img src='../IMG/profileIcon.svg'/>
                </li>                 
                <li>
                    <img src='../IMG/docIcon.svg'/>
                </li>                
                <li>
                    <img src='../IMG/imgIcon.svg'/>
                </li>
                <li>
                    <img src='../IMG/settingIcon.svg'/>
                </li>
                <li>
                    <img src='../IMG/winPower.svg'/>
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
                 <li>
                    <img src='../IMG/skype.svg'/>
                    <label>Skype</label>
                 </li>
                 <li onClick={()=>{window.open('https://www.linkedin.com/in/sagarsurendhrababu/')}}>
                    <img src='../IMG/linkedin.svg'/>
                    <label>LinedIn</label>
                 </li>
                 <li onClick={()=>{window.open('https://www.youtube.com/@sagarsurendhrababu9260/featured')}}>
                    <img src='../IMG/youtube.svg'/>
                    <label>Youtube</label>
                 </li> 
                 <li onClick={()=>{window.open('https://drive.google.com/file/d/1Il7az32od0bzTO0YCk7XXkwUXZ63fXTt/view?usp=drive_link')}}>
                    <img src='../IMG/resume.svg'/>
                    <label>My Resume</label>
                 </li>                                  
              </ul>            
        </div>
    </div>
  )
}
