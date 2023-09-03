import React from 'react'

export default function Opencart() {
  return (
    <>
    <div className='bg-dark px-2 py-2 mb-3 px-sm-5 py-sm-3'>
        <div className='d-flex justify-content-between'>
            <h3 className='mb-4 text-white'>OpenCart CMS</h3>
            <a href='https://www.youtube.com/@sagarsurendhrababu9260/featured' target='_blank'>
                <img src='./IMG/youtube.svg'/>
            </a>
        </div>
        <div className='col-12 row mb-3 m-0'>
            <div className='col-sm-8 mb-4'>                
            <iframe height="340" className='w-100'  src="https://www.youtube.com/embed/OoV2uyZCEl0?controls=0&rel=0"  frameborder="0" ></iframe>
            <h6 className='text-danger'>My original YouTube video will be available here soon. Meanwhile, enjoy this temporary video</h6>
            </div>            
            <div className='col-sm-4'>
                <p className='text-justify text-light'>OpenCart is an open-source e-commerce platform that enables businesses to create and manage online stores. It offers features like customizable templates, a user-friendly admin interface, and support for various payment gateways. OpenCart is known for its simplicity and scalability, making it suitable for small to medium-sized businesses. It allows users to sell products, manage inventory, and provide a seamless shopping experience for customers. Its extensive extension library adds additional functionality and customization options.</p>                
            </div>
        </div>               
    </div>    
    </>
  )
}
