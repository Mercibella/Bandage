import React from 'react';
import './Navbar.css';
import tele from '../assets/tele.svg';
import mail from '../assets/mail.svg';
import insta from '../assets/insta.svg';
import youtube from '../assets/youtube.svg';
import fb from '../assets/fb.svg';
import twitter from '../assets/twitter.svg';
import search from '../assets/search.svg';
import cart from '../assets/cart.svg';
import heart from '../assets/heart.svg';
import login from '../assets/login.svg';

const Navbar = () => {
  return (
    <>
      <div className="top-nav">
        <div className="left">
          <img src={tele} alt="telephone" /> 
          <a href="#home">(225) 555-0118</a>
          <img src={mail} alt="mail" />
          <a href="#home">michelle.rivera@example.com</a>
        </div>
        <div className="middle">
          <p>Follow us and get a chance to win 80% off</p>
        </div>
        <div className="right">
          <p>Follow Us:</p>
          <img src={insta} alt="instagram" />
          <img src={youtube} alt="youtube" />
          <img src={fb} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="main-nav">
        <div className="logo">Bandage</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop ▼</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#pages">Pages</a>
        </div>
        <div className="nav-icons">
          <a href="#login"><img src={login} alt="login" />Login/Register</a>
          <img src={search} alt="search" />
          <img src={cart} alt="cart" />
          <img src={heart} alt="heart" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
