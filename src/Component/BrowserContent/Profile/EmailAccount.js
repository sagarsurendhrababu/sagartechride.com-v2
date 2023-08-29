import React from 'react'

export default function EmailAccount() {
  return (
    <>
        <h3>Email & Accounts</h3>
        <span className='spaceHeight'></span>       
        <div className='d-flex align-items-center'>
            <img src='./IMG/windows-icon.png' className='smallIcon'/>
            <div className='d-flex flex-column'>                
                <h6><a href = "mailto:sagarts@live.com">sagarts@live.com</a></h6>                
            </div>
        </div>
        <div className='d-flex item-align-center mt-2 align-items-center'>
            <img src='./IMG/chrome-icon.png' className='smallIcon'/>
            <div className='d-flex flex-column'>
                <h6><a href = "mailto:sagarsurendhrababu@gmail.com">sagarsurendhrababu@gmail.com</a></h6>                                              
            </div>
        </div>        
        <p>Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.</p>
        <h6>Sign in with a Microsoft account insted</h6>    
    </>
  )
}