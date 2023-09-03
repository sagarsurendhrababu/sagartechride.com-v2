import React from 'react'

export default function Joomla() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Joomla CMS</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/Qjnc0H8utks?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>Joomla is an open-source content management system (CMS) used for building websites and online applications. It provides a flexible and powerful platform for creating and managing digital content. Joomla offers a wide range of features, including customizable templates, extensions, and user management. It's known for its ease of use and robustness, making it suitable for a variety of web projects, from simple blogs to complex e-commerce sites. Its active community contributes to its ongoing development and enhancement.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
