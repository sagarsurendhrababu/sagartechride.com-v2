import React from 'react';
import Carousel from './Carousel';
import Profile from './Profile';
import Resume from './Resume';
import CommonLayout from './CommonLayout';
import {ContentData} from '../../Reducer/ContentData';

export default function BrowserContent(props) {
  let title;
  let subTitle;
  let imgArray;
  let iframeFlag;
  let layout;
  ContentData.map(e=>{
    if(props.contenName === e.id){
      title = e.title;
      subTitle = e.subtitle;
      imgArray = e.images;
      iframeFlag = e.iframe;
      layout = e.layout;
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
    {
      title != null? <CommonLayout title={title} subTitle={subTitle}/> : ''
    }
    {
      layout == null? '': ''
    }
    {
      layout === 'second'? <Profile/> : ''
    }
    {
      layout === 'resume'? <Resume/> : ''
    }
    </>
  )
}
