import React from 'react'
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/men.webp"

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
 <h2>Best Deals !! Best Prices !!</h2>
     
      <div className='hero-hand-icon'>
        <p>New</p>
        <img src={hand_icon} alt="Hand-Icon" height="60px" />
      </div>
      <p>Collection </p>
      <p>For Everyone</p>
       <div className='hero-latest-btn'>
        <div>Latest Collections </div>
        <img src={arrow_icon} alt='arrow Icon' height="30px" />
       </div>
       </div>
      
     <div className='hero-right'>
       <img src={men} alt='Men' height="400px"/>
     </div>
    </div>
  )
}

export default Hero