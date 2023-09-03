import React from 'react'

export default function Photoshop() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Photoshop Designing Tool</h3>
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
                <p className='text-white text-justify'>Adobe Photoshop is a sophisticated, industry-standard raster graphics editing software. It's renowned for its versatility in manipulating, enhancing, and creating images. Photoshop enables users to edit photos, create digital artwork, and design graphics for print or web. Its robust toolset includes layers, filters, masks, and precise selection tools, making tasks like retouching, color correction, and compositing seamless. Photoshop supports various file formats and offers features like content-aware fill and 3D modeling. It's essential for photographers, designers, and visual artists for its ability to bring creative visions to life and has a significant impact on graphic design, advertising, and multimedia production.</p>                
            </div>
        </div>               
    </div>
    
    </>
    
  )
}
