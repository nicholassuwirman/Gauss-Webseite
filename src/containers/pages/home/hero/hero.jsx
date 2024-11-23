import React, { useState } from "react";
import './hero.css';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import logoNew from '../../../../assets/gauss-logo-new.png'; // Update logo path as necessary
import gaussVideo from '../../../../assets/Gauss Video Cut New compressed.mp4'; // Update video path

const Menu = () => {
  return (
    <>
      <Link to="/about" className="navbar-menu-text">About</Link>
      <Link to="/" className="navbar-menu-text">Bikes</Link>
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
      <div className="navbar-section">
        <Link to="/home">
          <img src={logoNew} alt="Gauss Logo" className="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu-container hidden md:flex">
          <Menu />
        </div>

        {/* Mobile Menu Toggle Icon */}
        <div className="navbar-mobile-menu md:hidden">
          {toggleMenu ? (
            <RiCloseLine color="#FFFFFF" size={27} onClick={handleMenuToggle} /> // Use handleMenuToggle here
          ) : (
            <RiMenuLine color="#FFFFFF" size={27} onClick={handleMenuToggle} /> // Use handleMenuToggle here as well
          )}
        </div>
      </div>

      {/* White Line Below Navbar */}
      <div className="navbar-white-line hidden sm:block ml-20 mt-[11px] w-[91%] border-b-2 border-[#F9F7F7] h-[4px] relative z-5"></div>

      {/* Background Video */}
      <video 
        className="background-video"
        autoPlay
        muted
        loop
        src={gaussVideo} 
        type="video/mp4"
      />
      
      {/* Sliding Menu */}
      <div className={`navbar-mobile-container ${toggleMenu ? 'visible' : ''}`}>
        <div className="navbar-mobile-content">
          <Menu />
        </div>
      </div>

      <div className="hero-shadow-bottom absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-100"></div>

      {/* Hero Title Section */}
      <div className="hero-title-container">
        <p className="hero-title-fuel">Fuel the Future</p>
        <p className="hero-title-partner">Partner with <span className="highlight-text">Gauss 2</span></p>
        <div className="hero-title-partner-mobile-container">
          <p className="hero-title-partner-mobile">Partner with</p>
        </div>
        <div className="hero-title-partner-highlight-mobile-container">
          <p className="hero-title-partner-highlight-mobile">Gauss 2</p>
        </div>
        <button className="hero-sponsor-button">Partner now</button>
      </div>
    </div>
  );
};

export default Hero;
