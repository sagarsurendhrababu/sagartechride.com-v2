import React from 'react'

export default function Gallery(props) {
  return (
    <div className='row g-3 m-0 p-0 gallery'>
        {props.items.map(e => (
          <div className="col-4">
            <div className='border p-3 bg-light'>
                <img src={`./IMG/logo-collections/${e}`}/>
            </div>
          </div>
        ))
        }                      
    </div>
  )
}
