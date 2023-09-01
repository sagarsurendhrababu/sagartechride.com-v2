import React, {useContext} from 'react'
import { Context } from '../../../App';

export default function Portfolio() {
  const [state, dispatch] = useContext(Context);
  return (
    <div className='row g-2' id='portfolio'>      
        <div className='col-sm-6'>
            <div className='p-3 border bg-light d-flex flex-column' onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'logo-design',
                   })
            }}>
              <img src='./IMG/logo-design.jpg'/>
              <h6 className='p-0 mt-2 m-0'>Logo/Brand Design Collections</h6>
              <small className='m-0 p-0'>Adobe Illustractor, Photoshop, Figma</small>
            </div>
        </div>
        <div className='col-sm-6'>
            <div className='p-3 border bg-light d-flex flex-column' onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'graphic-design',
                   })
              }}>
              <img src='./IMG/graphic-design-banner.jpg'/>
              <h6 className='p-0 mt-2 m-0'>Graphic Design Collections</h6>
              <small className='m-0 p-0'>Adobe Illustractor, Photoshop, Figma</small>
            </div>
        </div>
        <div className='col-sm-6'>
            <div className='p-3 border bg-light d-flex flex-column' onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'website-design',
                   })
              }}>
              <img src='./IMG/website-design.jpg'/>
              <h6 className='p-0 mt-2 m-0'>Website Design Collections</h6>
              <small className='m-0 p-0'>Adobe Illustractor, Photoshop, Figma</small>
            </div>
        </div>
        <div className='col-sm-6'>
            <div className='p-3 border bg-light d-flex flex-column' onClick={()=>{
                   dispatch({
                    type:'browserWinArray',
                    payload:'app-design',
                   })
              }}>
              <img src='./IMG/app-design.jpg'/>
              <h6 className='p-0 mt-2 m-0'>Application Design Collections</h6>
              <small className='m-0 p-0'>Adobe Illustractor, Photoshop, Figma</small>
            </div>
        </div>                             
    </div>
  )
}
