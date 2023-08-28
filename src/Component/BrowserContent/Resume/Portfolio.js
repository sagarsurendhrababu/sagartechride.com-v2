import React from 'react'

export default function Portfolio() {
  return (
    <div className='row g-2' id='portfolio'>
        <div className='col-6'>
            <div className='p-3 border bg-light d-flex flex-column'>
              <a href="https://www.behance.net/gallery/178644817/Logo-Design-Collections" target ="_blank"><img src='./IMG/windows.jpg'/></a>
              <h6 className='p-0 mt-2 m-0'>Logo/Brand Design Collections</h6>
              <small className='m-0 p-0'>Adobe Illustractor, Photoshop, Figma</small>
            </div>
        </div>
        <div className='col-6'>
            <div className='p-3 border bg-light d-flex flex-column'>
              <a href="https://www.behance.net/gallery/178644817/Logo-Design-Collections" target ="_blank"><img src='./IMG/windows.jpg'/></a>
              <h6 className='p-0 mt-2 m-0'>Logo/Brand Design Collections</h6>
              <small className='m-0 p-0'>Adobe Illustractor, Photoshop, Figma</small>
            </div>
        </div>             
    </div>
  )
}
