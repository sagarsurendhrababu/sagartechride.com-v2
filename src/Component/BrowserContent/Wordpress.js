import React from 'react'

export default function Wordpress() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Wordpress</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/cT4NlI00hMw?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>WordPress is a popular, user-friendly content management system (CMS) for building websites and blogs. It offers customizable themes, plugins, and a user-friendly interface, making it accessible to beginners and developers alike. Users can create, edit, and manage content easily, while its open-source nature allows for extensive customization. WordPress powers a significant portion of the internet, making it a versatile and widely-used platform for online content and businesses.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
