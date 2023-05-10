import "./HeroimgStyles.css";

import React from 'react'

import IntroImg from "../assets/background1.jpg";
import MyImg from "../assets/mypicture.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <img className="pic-img" src={MyImg} alt="mypic"/>
            <p>HI, IM DARBY PUSOD</p>
            <h1>Front-End Developer</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg