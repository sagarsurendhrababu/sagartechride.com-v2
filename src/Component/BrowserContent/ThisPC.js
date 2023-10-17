import React, { useContext } from 'react'
import { Context } from '../../Home'

export default function ThisPC() {
    const [state, dispatch] = useContext(Context);
  return (
    <>
        <div className='row row-cols-sm-2'>
            <div className='col-sm-7'>
                <h6 className='bg-light p-2'>Website Specifications</h6>
                    <ul className='specDetails m-0 my-3 px-2'>
                        <li>Domain Name :  <span>sagartechride.com</span></li>
                        <li>IP address : <span>89.117.27.9</span></li>
                        <li>Libaries: <span>React JS</span></li>
                        <li>Languages : <span>HTML, SASS, Javscript</span></li>
                        <li>webhosting: <span>hostinger</span></li>
                        <li>Nameservers: <span>ns1.dns-parking.com ns2.dns-parking.com</span></li>
                        <li>Database : <span>MySQL</span></li>
                    </ul>
                <h6 className='bg-light p-2'>Hosting Details</h6>
                    <ul className='specDetails m-0 my-3 px-2'>
                        <li>Disk Space	<span>100 GB</span></li>
                        <li>RAM	<span>1024 MB</span></li>
                        <li>CPU Cores	<span>1</span></li>
                        <li>Inodes	<span>400000</span></li>
                        <li>Addons/Websites	<span>100</span></li>
                        <li>Active Processes	<span>40</span></li>
                        <li>Entry Processes	<span>20</span></li>
                        <li>Bandwidth	<span>Unlimited</span></li>
                    </ul>
                <h6 className='bg-light p-2'>Domain Ownership</h6>
                    <ul className='specDetails m-0 my-3 px-2'>
                        <li>Name:<span>Sagar Surendrababu</span></li>
                        <li>Address:<span>Confident Atria 3, Kerala, Ernakulam, India, 683561</span></li>
                        <li>Email:<span>hakonclub@gmail.com</span></li>
                        <li>Phone:<span>+91 9020561177</span></li>
                    </ul>
            </div>
            <div className='col-sm-5 px-3 mt-4 mt-sm-0'>                
                <h6 className='bg-white p-2'>Folders</h6>
                <ul className='d-flex flex-wrap row-cols-3 thisPCicons p-0 mt-4'>
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'myworks',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>Portfolio</h6>
                    </li>
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'resume',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>My Resume</h6>
                    </li> 
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'profile',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>About Me</h6>
                    </li> 
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'gallery',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>Photos</h6>
                    </li> 
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'games',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>Games</h6>
                    </li>  
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'tutorials',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>Videos</h6>
                    </li>  
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'document',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>Documents</h6>
                    </li>  
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'career',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>My Career</h6>
                    </li> 
                    <li onClick={()=>{
                        dispatch({
                        type:'browserWinArray',
                        payload:'vision',
                        })}}>
                        <img src='../IMG/myWorks.svg'/>
                        <h6>My Vision</h6>
                    </li>                                                                                                                                                          
                </ul> 
            </div>
        </div>
    </>
  )
}
