import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'
import React1 from "../assets/VSC1.jpg"
import React2 from "../assets/HTML1.jpg"
import React3 from "../assets/Bootstrap1.png"
import React4 from "../assets/React1.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im full-stack web developer.
                I create a responsive website using HTML, CSS, BOOTSTRAP,
                REACT JS.
            </p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
            
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React4} className="img" alt="true" />
                </div>
                {/* <div className="img-stack middle1">
                    <img src={React2} className="img" alt="true" />
                </div>
                <div className="img-stack middle2">
                    <img src={React3} className="img" alt="true" />
                </div> */}
                <div className="img-stack buttom">
                    <img src={React1} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent