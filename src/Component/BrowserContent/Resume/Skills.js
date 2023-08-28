import React from 'react'
import { ContentData } from '../../../Reducer/ContentData'

export default function Skills() {
  const skillValues = ContentData[21].SkillMatter;
  return (
    <>
       <div class="row g-2 skillset">
            {skillValues.map((e,indx) => (
            <div class="col-6" key={indx}>   
              <div class="p-3 border bg-light d-flex justify-content-between">
                <h6>{e.title}</h6>  
                <a href={e.videoLink}><i class="bi bi-play-circle"></i></a>
              </div>         
            </div>
            ))}         
        </div>       
    </>
  )
}
