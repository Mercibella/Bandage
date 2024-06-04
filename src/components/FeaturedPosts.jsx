import React from 'react';
import './FeaturedPosts.css';
import fixed from '../assets/fixed.svg';
import fixed1 from '../assets/fixed1.svg';
import fixed2 from '../assets/fixed2.svg';
import calendar from '../assets/calendar.svg';
import comments from '../assets/comments.svg';
import learnmore from '../assets/learnmore.svg';





const FeaturedPosts = () => {
  return (
    <div className="featured-posts">
      <div className='heading'>
      <h3>Practice Advice</h3>
      <h2>Featured Posts</h2>
      </div>
      <div className="posts-container">
        <div className="post-card">
          <img src={fixed} alt="image" />
          <div className="post-content">
            <div className="post-links">
              <a href="#" className="blue">Google</a>
              <a href="#">Trending</a>
              <a href="#">New</a>
            </div>
            <h3>Loudest à la Madison #1 <br /> (L&apos;integral)</h3>
            <p>We focus on ergonomics and meeting <br /> you where you work. It&apos;s only  a <br /> keystroke away.</p>
            <div className="post-meta">
              <div>
              <img src={calendar} alt="Date" />
              <span>22 April 2021</span>
              </div>
              <div>
              <img src={comments} alt="Comments" />
              <span>10 comments</span>
              </div>
            </div>
            <a href="#" className="learn-more">
               Learn more <img src={learnmore} alt="Learn more" />
            </a>
          </div>
        </div>
        <div className="post-card">
          <img src={fixed1} alt="Post 2" />
          <div className="post-content">
            <div className="post-links">
              <a href="#" className="blue">Google</a>
              <a href="#">Trending</a>
              <a href="#">New</a>
            </div>
            <h3>Loudest la Madison #1 (L&apos;integral)</h3>
            <p>We focus on ergonomics and meeting <br /> you where you work. It&apos;s only  a <br />  keystroke away.</p>
            <div className="post-meta">
            <div>
              <img src={calendar} alt="Date" />
              <span>22 April 2021</span>
              </div>
              <div>
              <img src={comments} alt="Comments" />
              <span>10 comments</span>
              </div>
            </div>
            <a href="#" className="learn-more">
              Learn more <img src={learnmore} alt="Learn more" />
            </a>
          </div>
        </div>
        <div className="post-card">
          <img src={fixed2} alt="Post 3" />
          <div className="post-content">
            <div className="post-links">
              <a href="#" className="blue">Google</a>
              <a href="#">Trending</a>
              <a href="#">New</a>
            </div>
            <h3>Loudest la Madison #1 (L&apos;integral)</h3>
            <p>We focus on ergonomics and meeting <br /> you where you work. It&apos;s only  a <br /> keystroke away.</p>
            <div className="post-meta">
            <div>
              <img src={calendar} alt="Date" />
              <span>22 April 2021</span>
              </div>
              <div>
              <img src={comments} alt="Comments" />
              <span>10 comments</span>
              </div>
            </div>
            <a href="#" className="learn-more">
               Learn more <img src={learnmore} alt="Learn more" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
