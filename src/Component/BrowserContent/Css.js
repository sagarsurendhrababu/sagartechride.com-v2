import React from 'react'

export default function Css() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Cascading Style Sheets</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/OEV8gMkCHXQ?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>CSS, or Cascading Style Sheets, is a web technology used for styling and formatting HTML documents. It defines how elements on a web page should appear, controlling aspects like colors, fonts, spacing, and layout. CSS separates design from content, enabling consistent and responsive design across websites. It's a crucial component in modern web development, enhancing the visual presentation and user experience of web pages.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
