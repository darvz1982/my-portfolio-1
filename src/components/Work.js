import "./WorkCartStyles.css"
import WorkCart from "./WorkCart";
import WorkCartData from "./WorkCartData";


import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCartData.map((val, ind) =>{
                return (
                  <WorkCart 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                  />  
                )
            })}
        </div>
    </div>
  )
}

export default Work;