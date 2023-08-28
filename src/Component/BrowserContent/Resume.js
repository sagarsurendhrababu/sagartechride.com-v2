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
    <div className='d-flex infoNavBox'>
        <div className='col-sm-3 infoNav'>
            <h5>My Resume</h5>
            <ul>
                <li className={state.objective? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionObjective',
                  payload:true
                })}}><i className="bi bi-person-lines-fill"></i> Objective</li>
                <li className={state.workExp? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionWorkExp',
                  payload:true
                })}}><i class="bi bi-briefcase"></i>Work Experience</li>
                <li className={state.skills? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionSkills',
                  payload:true
                })}}><i class="bi bi-lightning-charge"></i>Skills</li>
                <li className={state.portfolio? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionPortfolio',
                  payload:true
                })}}><i class="bi bi-grid"></i>Portfolio</li>
                <li className={state.education? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionEducation',
                  payload:true
                })}}><i class="bi bi-mortarboard"></i>Education</li>
                <li>
                  <a className='downalodBtn' target='_blank' href="./IMG/SagarSurendhrababu-Resume.pdf">                    
                    <div>
                    <i class="bi bi-cloud-download-fill"></i>  Download<br/>
                    <small>Resume PDF (1.3MB)</small>
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
