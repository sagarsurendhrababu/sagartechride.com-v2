import React from 'react'

export default function Illustractor() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Illustractor Designing Tool</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube-nocookie.com/embed/-wzoQ2CR57E?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-white text-justify'>Illustrator is a vector graphics software developed by Adobe. It's primarily used for creating and editing vector-based artwork, which is resolution-independent and perfect for logos, illustrations, and graphic design projects. Illustrator offers a wide range of tools for drawing, coloring, and manipulating shapes, allowing users to create intricate and scalable graphics. Its features include precise control over anchor points, layers, and gradients, making it a go-to choice for designers. Illustrator is vital for producing clean, scalable, and high-quality graphics for print, web, and multimedia. It plays a crucial role in industries such as advertising, branding, and digital art.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
