// bikes/bikes-home/bikesHome.jsx
import React, { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../about/about.css';  // Correct path to about.css
import gsap from 'gsap';

import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component

import './bikesHome.css';  // Optional, for styling the home page
import gauss1bikesHomePicture from '../../../../assets/gauss-1-mobile.jpg'; // Update path as necessary
import gauss2bikesHomePicture from '../../../../assets/gauss-2-mobile.jpg'; // Update path as necessary

const BikesHome = () => {
  const handleScrollToTop = () => {
    window.scrollIntoView({ top: 0, behavior: 'auto' }, 'immediate');
  };  

  const gauss1CardRef = useRef(null); // Reference for the hero title container
  const gauss2CardRef = useRef(null); // Reference for the hero title highlight
  useEffect(() => {
    // Animation for the hero title (from bottom to top, from invisible to visible)
    gsap.fromTo(
      gauss1CardRef.current, 
      {
        opacity: 0, 
        y: 50, // Start 20px below
      },
      {
        opacity: 1, 
        y: 0, // End at the original position
        duration: 1, // Duration of animation
        ease: "power4.out", // Smooth easing
      }
    );

    // Animation for the hero title highlight
    gsap.fromTo(
      gauss2CardRef.current,
      {
        opacity: 0,
        y: 50, // Start 20px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 1,
        delay: 0.1, // Slight delay to stagger the animations
        ease: "power4.out",
      }
    );
  }, []);
  // Handle scroll to top
  
  return (
    <div id="bikesHome" className="bikes-home-container relative flex flex-col overflow-hidden">
     <Navbar/>

      <div className='about-card-container' ref={gauss1CardRef}>
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

      <div className='about-card-container' ref={gauss2CardRef}>
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
     <Footer />
    </div>
  );
};

export default BikesHome;
