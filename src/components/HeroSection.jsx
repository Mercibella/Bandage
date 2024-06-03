import React from 'react';
import './HeroSection.css';
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'





const HeroSection = () => {
  return (
    <div className="hero-section">
        <img src={img1} alt="image1" className="image1" /> 
      <div className="image2-3">
          <img src={img2} alt="image2" className="image2" /> 
        <div className="image3-4">
          <img src={img3} alt="image3" className="image3"/> 
          <img src={img4} alt="image4" className="image4"/> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
