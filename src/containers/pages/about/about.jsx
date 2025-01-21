// src/components/about/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './about.css';  // Ensure this path is correct

import Navbar from '../navbar/navbar';  
import Footer from '../footer/footer';  

import aboutTeamPicture from '../../../assets/about/about-team.jpg';
import aboutHistory from '../../../assets/about/about-history.jpg';
import aboutImprint from '../../../assets/about/about-imprint.jpg';

const About = () => {
  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //    window.scrollIntoView({ top: 0, behavior: 'auto' }, 'immediate'); this makes not found in vercel
  };

  return (
    <div id="about" className="about-container">
      <Navbar />
      
      {/* Meet the Team Card */}
      <div className='about-card-container'>
        <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Meet the Team</p>
            <p className='about-card-description'>
              At Gauss Project, our talented team of student researchers is dedicated to innovating and developing electric superbikes. Get to know the brilliant minds driving our research and building our bikes.
            </p>
          </div>
          {/* Link to Team page, with scroll-to-top */}
          <Link to="/about/team" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>
        <div className='about-card-container-right'>
          <img src={aboutTeamPicture} alt="Gauss Team" className='about-card-image' />
        </div>
      </div>

      {/* Our History Card */}
      <div className='about-card-container'>
        <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Our History</p>
            <p className='about-card-description'>
              The Gauss Project, born from Marcel Attila Kiss’s visionary 2010 thesis, blends innovation and passion in electric motorcycle technology. Discover more about our journey and the people behind our groundbreaking advancements.
            </p>
          </div>
          {/* Link to History page, with scroll-to-top */}
          <Link to="/about/history" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>    
        <div className='about-card-container-right'>
          <img src={aboutHistory} alt="Gauss History" className='about-card-image' />
        </div>
      </div>

      {/* Imprint Card */}
      <div className='about-card-container'>
        <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Imprint</p>
            <p className='about-card-description'>
              Legal information and contact details for Hochschule Darmstadt and the Gauss Project.
            </p>
          </div>
          {/* Link to Imprint page, with scroll-to-top */}
          <Link to="/imprint" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>
        <div className='about-card-container-right'>
          <img src={aboutImprint} alt="Gauss Imprint" className='about-card-image' />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
