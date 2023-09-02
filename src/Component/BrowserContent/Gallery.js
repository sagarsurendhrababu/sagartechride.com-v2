import React, { useContext } from 'react';
import { Context } from '../../App';
import BigImg from '../BigImg';

export default function Gallery(props) {
  const [state, dispatch] = useContext(Context);
  return (
    <div className='row g-3 m-0 p-0 gallery'>
        {props.items.map((e,i) => (
          <div key={i} className="col-sm-4">
            <div className='border p-3 bg-light' onClick={()=>{
              dispatch({
                type:'bigImageAction',
                payload:true,
                path:`./IMG/${props.drive }${e}`,
              })
            }}>
                <img src={`./IMG/${props.drive }${e}`}/>
            </div>
          </div>
        ))
        } 
    </div>
  )
}
