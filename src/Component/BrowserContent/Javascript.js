import React from 'react'

export default function Javascript() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Javascript programming Language</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/upDLs1sn7g4?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>JavaScript is a versatile, high-level programming language used for web development. It enables interactivity and dynamic behavior on websites, enhancing user experiences. JavaScript runs in web browsers, allowing developers to create interactive elements, validate forms, manipulate HTML and CSS, and communicate with web servers. It's a fundamental technology for modern web applications.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
