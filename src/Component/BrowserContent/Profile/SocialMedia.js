import React from 'react'

export default function SocialMedia() {
  return (
    <>
      <h3>SocialMedia</h3>
      <p className='m-0'>Please find below the social media links..</p>
      <div className='col-12 row g-2 mt-3 socialmediazone'>
          <div className='col-6'>
              <div className='p-2' onClick={()=>{window.open('https://www.instagram.com/SagarTechRide/')}}>
                  <i class="bi bi-instagram"></i>
              </div>
          </div>
          <div className='col-6'>
              <div className='p-2' onClick={()=>{window.open('https://www.linkedin.com/in/sagarsurendhrababu/')}}>
                  <i class="bi bi-linkedin"></i>
              </div>
          </div>
          <div className='col-6'>
              <div className='p-2' onClick={()=>{window.open('https://www.youtube.com/@sagarsurendhrababu9260/featured')}}>
                <i class="bi bi-youtube"></i>
              </div>
          </div>
          <div className='col-6'>
              <div onClick={()=>{window.open('https://www.behance.net/sagarsurendhrababu')}} className='p-2'>
                <i class="bi bi-behance"></i>
              </div>
          </div>                                                 
      </div>
    </>
  )
}
