import React from 'react';
import './TestimonialsSection.css';
import goldenstar from '../assets/goldenstar.svg';
import star from '../assets/star.svg';
import user from '../assets/user.svg';
import unsplash1 from '../assets/unsplash1.svg';
import unsplash2 from '../assets/unsplash2.svg';
import unsplash3 from '../assets/unsplash3.svg';
import unsplash4 from '../assets/unsplash4.svg';
import unsplash5 from '../assets/unsplash5.svg';
import unsplash6 from '../assets/unsplash6.svg';
import unsplash7 from '../assets/unsplash7.svg';
import unsplash8 from '../assets/unsplash8.svg';
import unsplash9 from '../assets/unsplash9.svg';




const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <div className="left">
        <h2>What They Say About Us</h2>
        <img src={user} alt="Testimonial" className="rounded-image" />
        <div className="tiny-images">
          <img src={goldenstar} alt="golden star" />
          <img src={goldenstar} alt="golden star" />
          <img src={goldenstar} alt="golden star" />
          <img src={goldenstar} alt="golden star" />
          <img src={star} alt="golden star" />
        </div>
        <p>Slate helps you see how many more days you need to work to <br /> reach your financial goal.</p>
        <div className='line'>
        <p className="highlighted">Regina Miles </p>
        <p>Designer</p>
        </div>
      </div>
      <div className="right">
        <div className="grid">
          <img src={unsplash1} alt="Grid 1" className='img' />
          <img src={unsplash2} alt="Grid 2" className='img' />
          <img src={unsplash3} alt="Grid 3" className='img' />
          <img src={unsplash4} alt="Grid 4" className='img'/>
          <img src={unsplash5} alt="Grid 5" className='img' />
          <img src={unsplash6} alt="Grid 6" className='img' />
          <img src={unsplash7} alt="Grid 7" className='img' />
          <img src={unsplash8} alt="Grid 8" className='img' />
          <img src={unsplash9} alt="Grid 9" className='img' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
