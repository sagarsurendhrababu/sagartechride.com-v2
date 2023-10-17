import React, { useContext } from 'react'
import { Context } from '../Home'

export default function BigImg(props) {
  const [state,dispatch] = useContext(Context);
  return (
    <div className='popupBg' onClick={()=>{
      dispatch({
        type: 'bigImageAction',
        bigImg: false,
      })
    }}>
      <img src={state.imgName}/>
    </div>
  )
}
