// src/components/CallToActionSection.jsx
import React from 'react';
import './CallToActionSection.css';
import background from '../assets/background.svg'; 
const CallToActionSection = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <p className="heading">Designing Better Experience</p>
        <h1 className="big-heading">Problems Trying to Resolve <br /> the Conflict Between</h1>
        <p>Problems trying to resolve the conflict between the two major <br /> realms of Classical physics. </p>
        <p className="price">$16.48</p>
        <button className="button">ADD YOUR CALL TO ACTION</button>
      </div>
    </div>
  );
};

export default CallToActionSection;
