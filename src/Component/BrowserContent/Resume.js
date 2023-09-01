import React, { useContext } from 'react'
import Objective from './Resume/Objective';
import WorkExperience from './Resume/WorkExperience';
import Skills from './Resume/Skills';
import Portfolio from './Resume/Portfolio';
import Education from './Resume/Education';

import { Context } from '../../App';

export default function Resume() {
  const [state, dispatch] = useContext(Context);
  return (
    <div className='d-sm-flex infoNavBox'>
        <div className='col-sm-3 infoNav' id="mobileView">
            <h5>My Resume</h5>
            <ul>
                <li className={state.objective? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionObjective',
                  payload:true
                })}}><i className="bi bi-person-lines-fill"></i> <span>Objective</span></li>
                <li className={state.workExp? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionWorkExp',
                  payload:true
                })}}><i class="bi bi-briefcase"></i><span>Work Experience</span></li>
                <li className={state.skills? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionSkills',
                  payload:true
                })}}><i class="bi bi-lightning-charge"></i><span>Skills</span></li>
                <li className={state.portfolio? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionPortfolio',
                  payload:true
                })}}><i class="bi bi-grid"></i><span>Portfolio</span></li>
                <li className={state.education? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionEducation',
                  payload:true
                })}}><i class="bi bi-mortarboard"></i><span>Education</span></li>
                <li>
                  <a className='downalodBtn' download href="./IMG/SagarSurendhrababu-Resume.pdf">                    
                    <div>
                    <i class="bi bi-cloud-download-fill"></i>  <span className='d-none d-sm-block'>Download</span><br/>
                    <small className='d-none d-sm-block'>Resume PDF (1.3MB)</small>
                    </div>                    
                  </a>
                </li>
            </ul>
        </div>
        <div className='col-sm-9 bg-light infoCon'>
            {state.objective? <Objective/> : ''} 
            {state.workExp? <WorkExperience/> : ''}
            {state.skills? <Skills/> : ''}
            {state.portfolio? <Portfolio/> : ''}
            {state.education? <Education/> : ''}          
        </div>
    </div>
  )
}
