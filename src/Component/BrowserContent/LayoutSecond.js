import React,{ useContext } from 'react';
import MyInfo from './MyInfo';
import EmailAccount from './EmailAccount';
import SocialMedia from './SocialMedia';
import { Context } from '../../App';


export default function LayoutSecond() {
  const[state,dispatch] = useContext(Context)
  return (
    <div className='d-flex infoNavBox'>
        <div className='col-sm-5 infoNav'>
            <h5>Accounts</h5>
            <ul>
                <li className={state.myinfo? 'activeTab' : ''}  onClick={()=>{dispatch({
                  type:'tabActionInfo',
                  payload:true
                })}}><i className="bi bi-person-lines-fill"></i> My info</li>
                <li className={state.emailAccount? 'activeTab' : ''} onClick={()=>{dispatch({
                  type:'tabActionEmail',
                  payload:true
                })}}><i className="bi bi-envelope"></i>Email & Accounts</li>
                <li className={state.socialMedia? 'activeTab' : ''} onClick={()=>{dispatch({
                  type:'tabActionSocial',
                  payload:true
                })}}><i className="bi bi-share"></i>Social Media</li>
                <li><i className="bi bi-heart"></i>Hobbies</li>
                <li><i className="bi bi-gem"></i>Achievement</li>
                <li><i className="bi bi-people-fill"></i>Family & Others</li>
            </ul>
        </div>
        <div className='col-sm-7 bg-light infoCon'>
            {state.myinfo? <MyInfo/> : ''}
            {state.emailAccount? <EmailAccount/> : ''} 
            {state.socialMedia? <SocialMedia/> : ''}            
        </div>
    </div>
  )
}
