import React from 'react';
import Carousel from './Carousel';
import Profile from './Profile';
import Resume from './Resume';
import Portfolio from './Resume/Portfolio';
import ThisPC from './ThisPC';
import BigImg from '../BigImg';
import Career from './Career';
import Vision from './Vision';
import CommonLayout from './CommonLayout';
import {ContentData} from '../../Reducer/ContentData';


export default function BrowserContent(props) {

  let title;
  let subTitle;
  let Folder;
  let galleryArray;
  let imgArray;
  let iframeFlag;
  let layout;
  ContentData.map(e=>{
    if(props.contenName === e.id){
      title = e.title;
      subTitle = e.subtitle;
      Folder = e.galleryFolder;
      galleryArray = e.gallery;
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
      title != null? <CommonLayout title={title} subTitle={subTitle} view={galleryArray} folder={Folder}/> : ''
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
    {
      layout === 'work'? <Portfolio/> : ''
    }       
    {
      layout === 'pc'? <ThisPC/> : ''
    } 
    {
      layout === 'career'? <Career/> : ''
    }   
    {
      layout === 'vision'? <Vision/> : ''
    }       
    
    </>
  )
}
