import React, { useState, useEffect, useRef } from "react";
import './hero.css';  // Make sure this file is updated as shown above
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import Navbar from "../../navbar/navbar";
import gaussHeroVideo from '../../../../assets/gauss-hero-video-compressed.mp4'; // Update video path

const Hero = () => {
  const heroTitleRef = useRef(null); // Reference for the hero title container
  const heroHighlightRef = useRef(null); // Reference for the hero title highlight
  const heroSearchPartnerRef = useRef(null); // Reference for the search partner text
  const heroButtonsRef = useRef(null); // Reference for the buttons container

  useEffect(() => {
    // Animation for the hero title (from bottom to top, from invisible to visible)
    gsap.fromTo(
      heroTitleRef.current, 
      {
        opacity: 0, 
        y: 20, // Start 20px below
      },
      {
        opacity: 1, 
        y: 0, // End at the original position
        duration: 1.5, // Duration of animation
        ease: "power4.out", // Smooth easing
      }
    );

    // Animation for the hero title highlight
    gsap.fromTo(
      heroHighlightRef.current,
      {
        opacity: 0,
        y: 20, // Start 20px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 1.5,
        delay: 0.2, // Slight delay to stagger the animations
        ease: "power4.out",
      }
    );

    // Animation for the search partner text
    gsap.fromTo(
      heroSearchPartnerRef.current,
      {
        opacity: 0,
        y: 20, // Start 20px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 1.5,
        delay: 0.4, // Delay to stagger it further
        ease: "power4.out",
      }
    );

    // Animation for the buttons container
    gsap.fromTo(
      heroButtonsRef.current,
      {
        opacity: 0,
        y: 30, // Start 30px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 1.5,
        delay: 0.6, // Delay to stagger it further
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div id="hero" className="hero-container relative flex flex-col w-full h-screen overflow-hidden">
      {/* Navbar Section */}
      <Navbar />
      {/* Background Video */}
      <video
        className="background-video"
        autoPlay
        muted
        loop
        src={gaussHeroVideo}
        type="video/mp4"
      />

      <div className="hero-shadow-left"></div> {/* Add the left shadow here */}

      <div className="hero-shadow-bottom absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-100"></div>

      {/* Hero Title Section */}
      <div className="hero-title-container" >
        <p className="hero-title-fuel" ref={heroTitleRef}>Charge the Future</p>
        <p className="hero-title-highlight" ref={heroHighlightRef}>Gauss 2</p>
        <p className="hero-title-search-partner" ref={heroSearchPartnerRef}>Seeking sponsors for our electric superbike. </p>
        <div className="hero-title-partner-mobile-container">
          <p className="hero-title-partner-mobile"></p>
        </div>
        
        <div className="hero-button-container" ref={heroButtonsRef}>
          <button className="hero-sponsor-button">Partner Now</button>
          <button className="hero-button-partner">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
