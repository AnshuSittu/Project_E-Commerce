import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import insta from "../../assets/Insta.png"
import facebook from "../../assets/Facebook.png"
import link from "../../assets/whatsapp.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt='Footer Logo' height="50px" />
            <p>Avir's Mart</p>
        </div>
        <ul className='footer-links'>
          <li>About</li>
          <li>Products</li>
          <li>Offices</li>
          <li>Comapny</li>
          <li>Contacts</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
               <img src={insta} alt='logo' width='20px' height='20px'/>
            </div>
            <div className='footer-icon-container'>
                <img src={facebook} alt='logo'idth='20px' height='20px'/>
            </div>
            <div className='footer-icon-container'>
                <img src={link} alt='logo'idth='20px' height='20px'/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 20025 All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer