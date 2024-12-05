import React from 'react';
import './Footer.css';
import { TiSocialFacebook } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className='f1'>Shopper.</div>
     
      <div className='support'>
        <div className='s item'>
          Support
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Size Guide</li>
            <li>Shopping & Return</li>
          </ul>
        </div>
        <div className='s item'>
          SHOP
          <ul>
            <li>Womens Shopping</li>
            <li>Mens Shopping</li>
            <li>Kids Shopping</li>
            <li>Discount</li>
          </ul>
        </div>
        <div className='s item'>
          Company
          <ul>
            <li>Our Story</li>
            <li>Career</li>
            <li>Terms & Condition</li>
            <li>Privacy & Cookie</li>
          </ul>
        </div>
        <div className='s item'>
          Contact
          <ul>
            <li>123456789</li>
            <li>123456789</li>
            <li>help@shopper.com</li>
          </ul>
        </div>
      </div>
      <div className='icon'>
        <TiSocialFacebook />
        <CiYoutube />
        <CiTwitter />
        <FaInstagram />
      </div>
      <p className='foot'>Want style Ideas and Treats?</p>
      <div className='foot1'>
        <div className='email-input'>Enter Email*</div>
        <button className='subscribe-button'>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
