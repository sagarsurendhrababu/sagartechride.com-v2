import React from 'react';
import Carousel from './Carousel';
import Profile from './Profile';
import Resume from './Resume';
import Portfolio from './Resume/Portfolio';
import ThisPC from './ThisPC';
import BigImg from '../BigImg';
import Figma from './Figma';
import Photoshop from './Photoshop';
import Illustractor from './Illustractor';
import Javascript from './Javascript';
import Sass from './Sass';
import Css from './Css';
import Wordpress from './Wordpress';
import Joomla from './Joomla';
import Opencart from './Opencart';
import Html from './Html';
import Career from './Career';
import Vision from './Vision';
import Games from './Games';
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
    {
      layout === 'figma'? <Figma/> : ''
    }  
    {
      layout === 'photoshop'? <Photoshop/> : ''
    } 
    {
      layout === 'illustractor'? <Illustractor/> : ''
    }  
    {
      layout === 'javascript'? <Javascript/> : ''
    } 
    {
      layout === 'sass'? <Sass/> : ''
    }   
    {
      layout === 'html'? <Html/> : ''
    } 
    {
      layout === 'css'? <Css/> : ''
    }                                   
    {
      layout === 'wordpress'? <Wordpress/> : ''
    } 
    {
      layout === 'joomla'? <Joomla/> : ''
    }   
    {
      layout === 'opencart'? <Opencart/> : ''
    }   
    {
      layout === 'games'? <Games/> : ''
    }                    
    </>
  )
}
