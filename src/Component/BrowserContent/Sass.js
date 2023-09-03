import React from 'react'

export default function Sass() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Syntactically Awesome Style Sheets</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/akDIJa0AP5c?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>Sass, is a preprocessor scripting language for CSS. It extends CSS with features like variables, nesting, mixins, and functions, making stylesheets more maintainable and reusable. Sass code is compiled into standard CSS, which browsers can interpret. It simplifies CSS development, improves code organization, and reduces redundancy, making it a valuable tool for front-end web developers.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
