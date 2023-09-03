import React,{ useContext } from 'react';
import MyInfo from './Profile/MyInfo';
import EmailAccount from './Profile/EmailAccount';
import SocialMedia from './Profile/SocialMedia';
import Vision from './Profile/Vision';
import History from './Profile/History';
import Goal from './Profile/Goal';
import { Context } from '../../App';


export default function LayoutSecond() {
  const[state,dispatch] = useContext(Context)
  return (
    <div className='d-sm-flex infoNavBox'>
        <div className='col-sm-4 infoNav' id="mobileView">
            <h5>Accounts</h5>
            <ul className='d-flex d-sm-flex'>
                <li className={state.myinfo? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionInfo',
                  payload:true
                })}}><i className="bi bi-person-lines-fill"></i><span> My info</span></li>
                <li className={state.emailAccount? 'activeTab' : ''} onClick={()=>{dispatch({
                  type:'tabActionEmail',
                  payload:true
                })}}><i className="bi bi-envelope"></i><span>Email & Accounts</span></li>

                <li className={state.socialMedia? 'activeTab' : ''} onClick={()=>{dispatch({
                  type:'tabActionSocial',
                  payload:true
                })}}><i className="bi bi-share"></i> <span>Social Media</span></li>

                <li className={state.vision? 'activeTab' : ''} onClick={()=>{dispatch({
                  type:'tabActionVision',
                  payload:true
                })}}><i class="bi bi-eye"></i> <span>My Vision</span></li>
                
                <li className={state.history? 'activeTab' : ''} onClick={()=>{dispatch({
                  type:'tabActionHistory',
                  payload:true
                })}} ><i class="bi bi-clock-history"></i> <span>Career Journey</span></li>
                <li>
                  <a className='downalodBtn' download href="./IMG/SagarSurendhrababu-Resume.pdf">                    
                    <div className='d-flex'>
                      <i class="bi bi-cloud-download-fill"></i>  
                      <div className='d-flex-column px-3'>
                        <span className='d-none d-sm-block'>Download</span>
                        <small className='d-none d-sm-block'>Resume PDF (1.3MB)</small>
                      </div>
                    </div>                    
                  </a>
                </li>
            </ul>
        </div>
        <div className='col-sm-8 bg-light infoCon'>
            {state.myinfo? <MyInfo/> : ''}
            {state.emailAccount? <EmailAccount/> : ''} 
            {state.socialMedia? <SocialMedia/> : ''}  
            {state.vision? <Vision/> : ''} 
            {state.history? <History/> : ''} 
            {state.goal? <Goal/> : ''}  
        </div>
    </div>
  )
}
