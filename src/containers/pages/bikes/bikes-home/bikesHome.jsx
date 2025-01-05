// bikes/bikes-home/bikesHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../about/about.css';  // Correct path to about.css

import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component

import './bikesHome.css';  // Optional, for styling the home page
import gauss1bikesHomePicture from '../../../../assets/gauss-1-mobile.jpg'; // Update path as necessary
import gauss2bikesHomePicture from '../../../../assets/gauss-2-mobile.jpg'; // Update path as necessary

const BikesHome = () => {
  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div id="bikesHome" className="bikes-home-container relative flex flex-col overflow-hidden">
     <Navbar/>

      <div className='about-card-container'>
        <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Gauss 1</p>
            <p className='about-card-description'>
            Discover our groundbreaking electric superbike with energy recovery braking and advanced air cooling. Explore the innovation behind our high-performance electric mobility.      </p>
          </div>
          {/* Link to Team page, with scroll-to-top */}
          <Link to="/bikesHome/gauss1" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>
        <div className='about-card-container-right'>
          <img src={gauss1bikesHomePicture} alt="Gauss Team" className='about-card-image' />
        </div>
      </div>

      <div className='about-card-container'>
        <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Gauss 2</p>
            <p className='about-card-description'>
            Discover the next evolution in our electric superbikes. Gauss 2 features an advanced frame, quick-swap battery, and efficient thermal management, setting a new standard in performance and innovation.            </p>
          </div>
          {/* Link to Team page, with scroll-to-top */}
          <Link to="/bikesHome/gauss2" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>
        <div className='about-card-container-right'>
          <img src={gauss2bikesHomePicture} alt="Gauss Team" className='about-card-image' />
        </div>
      </div>

      <div className='history-cards-container'>
        <div className='history-card-container'>

        </div>
      </div>
     <Footer />
    </div>
  );
};

export default BikesHome;
