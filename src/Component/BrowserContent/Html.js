import React from 'react'

export default function Html() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'> Hypertext Markup Language</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/mzPxo7Y6JyA?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>HTML5, the fifth major revision of the Hypertext Markup Language, is a core technology for structuring and presenting content on the World Wide Web. It introduced new elements and features for multimedia, graphics, and interactive content. HTML5 supports video, audio, canvas for drawing, and improved semantics, making it crucial for modern web development. It enhances cross-browser compatibility, accessibility, and user experience across various devices and platforms.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
