import React from 'react';
import Gallery from './Gallery';

export default function CommonLayout(props) {
  return (
    <div className ='col-12'>
        {/* <h3>{props.title}</h3> */}
        <p>{props.subTitle != null? props.subTitle : ''}</p>
        {props.view? <Gallery items={props.view} drive={props.folder}/> : ''}
    </div>
  )
}
