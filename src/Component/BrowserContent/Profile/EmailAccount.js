import React from 'react'

export default function EmailAccount() {
  return (
    <>
        <h3>Email & Account</h3>
        <p className='m-0'>Please find below the email IDs...</p>
        <span className='spaceHeight'></span>       
        <div className='d-sm-flex align-items-center'>
            <img src='./IMG/windows-icon.png' className='smallIcon'/>
            <div className='d-flex flex-column'>                
                <h6><a href = "mailto:sagarts@live.com">sagarts@live.com</a></h6> 
                <h6><a href = "tel:9020561177">9020561177</a></h6>                  
            </div>
        </div>        
        <p>I want to assure you that I will personally respond to all your emails within a maximum of 24 hours. Whether you have questions, suggestions, or simply want to connect, I am here to ensure that your messages are acknowledged and addressed promptly.</p>
        <h6>Happy to assist you!</h6>
    </>
  )
}