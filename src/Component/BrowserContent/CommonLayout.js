import React from 'react'

export default function CommonLayout(props) {
  return (
    <div className ='col-12'>
        <h1>{props.title}</h1>
        <h4>{props.subTitle}</h4>
    </div>
  )
}
