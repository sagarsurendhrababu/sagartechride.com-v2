import React, { useContext } from 'react'
import { Context } from '../../App'

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
            <div className='col-sm-5 px-3'>
                
                <h6>Folders</h6>
                <ul className='d-flex flex-wrap gap-5 thisPCicons p-0 mt-3'>
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
                </ul>                
                {/* <h5>Two-Fold Purpose:</h5>
                <p>The purpose of this website is twofold. First and foremost, it's a platform for me to share my technical expertise and insights. Through engaging blog posts, video tutorials, and insightful articles, I hope to unravel the mysteries of coding, design, and all things tech. Whether you're a beginner looking to dip your toes into the coding world or a seasoned developer seeking new perspectives, there's something here for everyone.</p>
                <p>Secondly, I'm excited to open the doors to collaboration. Are you a company seeking a creative and skilled developer to enhance your team? I'm open to both full-time and part-time opportunities. My hands-on experience in React.js, HTML, Sass, and JavaScript, combined with a deep passion for innovation, makes me a valuable addition to any tech-savvy workforce.</p>
                <h5>The Foundation: Reacting with React</h5>
                <p>My website stands tall on the sturdy shoulders of React.js, a dynamic and versatile JavaScript library for crafting captivating user interfaces. React's component-based structure allows me to build modular, reusable elements that ensure a seamless browsing experience for you, the visitor.</p>
                <h5>Crafting the Visual Symphony: HTML, Sass, and JavaScript</h5>
                <p>HTML provides the structure, while Sass adds the flair. Together, they create a symphony of visual elements that bring the website to life. JavaScript, the language of interactivity, adds the magic touch, turning static pages into dynamic playgrounds.</p> */}
            </div>
        </div>
    </>
  )
}
