import React from 'react'

export default function Figma() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>Figma Designing Tool</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>
                <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/Cx2dkpBxst8?controls=0&rel=0"  frameborder="0" ></iframe>                
                <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-white'>Figma is a collaborative interface design tool used by designers and teams to create, test, and share user interfaces for websites, apps, and other digital products. Figma offers a variety of features, including vector editing, prototyping, and collaboration tools that make it easy for designers to create high-fidelity designs that are both functional and visually appealing.</p>
                <p className='text-white'>In conclusion, Figma is a versatile designing tool that can help designers create, test, and share high-quality designs in real-time. Figma is easy-to-use and offers a range of features that help streamline the design process, making it an excellent choice for individual designers and teams alike.</p>
            </div>
        </div>               
    </div>
    
    </>
    
  )
}
