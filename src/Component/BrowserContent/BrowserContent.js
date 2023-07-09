import React from 'react';
import Carousel from './Carousel';
import {ContentData} from '../../Reducer/ContentData';

export default function BrowserContent(props) {
  let title;
  let subTitle;
  let imgArray;
  let iframeFlag;
  ContentData.map(e=>{
    if(props.contenName === e.id){
      title = e.id;
      subTitle = e.subtitle;
      subTitle = e.subtitle;
      imgArray = e.images;
      iframeFlag = e.iframe;
    }
  });

  return (
    <>
    {
      iframeFlag != null? 
      <div>
        <iframe src='https://stackoverflow.com/questions/64266421/displaying-linkedin-content-with-iframe' frameborder="1" ></iframe>
      </div> : ''
    }
      <div className ='col-12'>
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
      </div>
    </>
  )
}
