// src/components/about/About.jsx
import React from 'react';
import './about.css';  // Ensure this path is correct

import Navbar from '.././navbar/navbar';  
import Footer from '.././footer/footer';  

import aboutTeamPicture from '../../../assets/about/about-team.jpg';
import aboutHistory from '../../../assets/about/about-history.jpg';
import aboutImprint from '../../../assets/about/about-imprint.jpg';

const About = () => {
  return (
    <div id="about" className="about-container">
      <Navbar />
        <div className='about-card-container'>
          <div className='about-card-container-left'>
            <div>
              <p className='about-card-title'>Meet the Team</p>
              <p className='about-card-description'>At Gauss Project, our talented team of student researchers is dedicated to innovating and developing electric superbikes. Get to know the brilliant minds driving our research and building our bikes.</p>
            </div>
            <button className="about-button">Learn More</button>
          </div>
          <div className='about-card-container-right'>
            <img src={aboutTeamPicture} alt="Gauss 1 hero" className='about-card-image' />
          </div>
        </div>

        <div className='about-card-container'>

        <div className='about-card-container-left'>
            <div>
              <p className='about-card-title'>Our History</p>
              <p className='about-card-description'>The Gauss Project, born from Marcel Attila Kiss’s visionary 2010 thesis, blends innovation and passion in electric motorcycle technology. Discover more about our journey and the people behind our groundbreaking advancements.</p>
            </div>
            <button className="about-button">Learn More</button>
          </div>    
          <div className='about-card-container-right'>
            <img src={aboutHistory} alt="Gauss 1 hero" className='about-card-image' />

          </div>
        </div>

        <div className='about-card-container'>
          <div className='about-card-container-left'>
            <div>
              <p className='about-card-title'>Imprint</p>
              <p className='about-card-description'>Find out more about our information</p>
            </div>
            <button className="about-button">Learn More</button>
          </div>
          <div className='about-card-container-right'>
            <img src={aboutImprint} alt="Gauss 1 hero" className='about-card-image' />

          </div>
        </div>
      <Footer />
    </div>
  );
};

export default About;
