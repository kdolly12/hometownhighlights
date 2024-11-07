import React from 'react'
import './fotter.css'
import { SiGoogleearth } from "react-icons/si"
import {ImFacebook} from 'react-icons/im'
import {BsTwitterX} from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
const Fotter = () => {
  return (
    <div className="fotter">
       <div  className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <SiGoogleearth className='icon'/>
              Dot
              </h1>
            </a>
          </div>
          <div className="social flex">
            <ImFacebook className='icon'/>
            <BsTwitterX className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>
        </div>
       
         
            <div className="footerLinks">
            <span className="linkTitle">
            Helpful Links
            </span>
            <li>
             <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">support</a>
            </li>
            <li>
              <a href="#">Teavel & conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Teavel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact us
          </span>
        <span className="phone">+91 7671082754</span>
          <span className="email">isratech8@outlook.com</span>
        </div>
          
       </div>
    </div>
  )
}

export default Fotter
