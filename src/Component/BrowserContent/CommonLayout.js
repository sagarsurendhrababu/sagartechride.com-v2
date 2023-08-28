import React from 'react';
import Gallery from './Gallery';

export default function CommonLayout(props) {
  return (
    <div className ='col-12'>
        <h5>{props.title}</h5>
        <p>{props.subTitle != null? props.subTitle : ''}</p>
        {props.view? <Gallery items={props.view}/> : ''}
    </div>
  )
}
