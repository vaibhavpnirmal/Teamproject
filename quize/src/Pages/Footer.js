import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='footer'>
      <h1>Have a question?</h1>
      <h4>Connect with us on Social Media:</h4>
      <div className='icon'>
       <a href='https://www.facebook.com/'><FaFacebookF></FaFacebookF></a> 
       <a href='https://vctcpune.com/'><FaInstagram></FaInstagram></a> 
       <a href='https://vctcpune.com/'><TiSocialTwitter></TiSocialTwitter></a> 
        </div>
      
    </div>
  )
}

export default Footer
