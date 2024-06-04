// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import './FooterSection.css';
import bfacebook from '../assets/bfacebook.svg';
import binstagram from '../assets/binstagram.svg';
import btwitter from '../assets/btwitter.svg';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
      <div className="footer-content">
        <div className="left">
        <div className="logo">Bandage</div>
        </div>
        <div className="right">
        <a href="https://www.facebook.com"><img src={bfacebook} alt="facebook logo" className="img" /></a>
        <a href="https://www.instagram.come"><img src={binstagram} alt="instagram logo" className="img" /></a>
        <a href="https://www.twiiter.com"><img src={btwitter} alt="twitter logo" className="img" /></a>
        </div>
      </div>
    </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company Info</h4>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <a href="#">Business Marketing</a>
          <a href="#">User Analytic</a>
          <a href="#">Live chart</a>
          <a href="#">Unlimited Support</a>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="#">IOS & Android</a>
          <a href="#">Watch a Demo</a>
          <a href="#">Customers</a>
          <a href="#">API</a>
        </div>
        <div className="footer-section">
          <h4>Get In Touch</h4>
          <div className="subscribe-container">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <a href="#">Lore imp sum dolor Amit</a>
        </div>
      </div>
      <p className="footer-note">Made With Love By Finland All Right Reserved </p>
    </div>
  );
};

export default Footer;
