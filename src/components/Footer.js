import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Bagakay</p>
                        <p>Ozamis City, Philippines</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                0999-841-4148</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                pusoddarby@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>Im DARBY BENEDICT M. Pusod, a career shifter from civil engineering to full-stack web development.</p>
                <p>I studied at Kodego boot camp program where, in four months, we were exposed to various web project</p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                    <FaGithub size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer