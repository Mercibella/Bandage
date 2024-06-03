import React from 'react';
import './ServicesSection.css';
import ewin from '../assets/ewin.svg';
import concrete from '../assets/concrete.svg';
import hgrowth from '../assets/hgrowth.svg';



const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className='heading-space'>
      <p>Featured Products</p>
      <h2>The Best Services</h2>
      <p className="paragraph">Problems trying to resolve the conflict between</p>
      </div>
      <div className="services-grid">
        <div className="service">
        <img src={ewin} alt="icon" />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile <br /> now!</p>
        </div>
        <div className="service">
        <img src={concrete} alt="icon" />
          <h3>Concrete</h3>
          <p>Defalcate is most focused in <br /> helping you discover your most <br /> beautiful smile</p>
        </div>
        <div className="service">
        <img src={hgrowth} alt="icon" />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any <br /> other problem.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
