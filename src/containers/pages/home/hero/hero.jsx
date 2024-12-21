import React, { useState, useEffect } from "react";
import './hero.css';  // Make sure this file is updated as shown above
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import Navbar from "../../navbar/navbar";

import logoNew from '../../../../assets/gauss-logo-new.png'; // Update logo path as necessary
import gauss1Mobile from '../../../../assets/gauss-1-mobile.jpg'; // Update logo path as necessary
import gauss2Mobile from '../../../../assets/gauss-2-mobile.jpg'; // Update logo path as necessary

import gaussVideoWotext from '../../../../assets/gauss-video-wotext-compressed.mp4'; // Update video path
import gaussHeroVideo from '../../../../assets/gauss-hero-video-compressed.mp4'; // Update video path

const Menu = () => {
  return (
    <>
      <Link to="/" className="navbar-menu-text">Bikes</Link>
      <Link to="/about" className="navbar-menu-text">About</Link>
      <Link to="/" className="navbar-menu-text">Partners</Link>
      <Link to="/" className="navbar-menu-text">Participate</Link>
      <Link to="/" className="navbar-menu-text">Imprint</Link>
    </>
  );
};

const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // State to toggle the mobile menu

  // Toggle the mobile menu (open/close)
  const handleMenuToggle = () => {
    setToggleMenu(prevState => !prevState); // Toggle between true/false
  };

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
      <div className="hero-title-container">
        <p className="hero-title-fuel">Charge the Future</p>
        <p className="hero-title-highlight">Gauss 2</p>
        <p className="hero-title-search-partner">Seeking sponsors for our electric superbike. </p>
        <div className="hero-title-partner-mobile-container">
          <p className="hero-title-partner-mobile"></p>
        </div>
        
        <div className="hero-button-container">
          <button className="hero-sponsor-button">Partner Now</button>
          <button className="hero-button-partner">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
