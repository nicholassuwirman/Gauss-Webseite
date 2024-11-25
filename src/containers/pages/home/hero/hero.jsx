import React, { useState } from "react";
import './hero.css';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import logoNew from '../../../../assets/gauss-logo-new.png'; // Update logo path as necessary
import gauss1Mobile from '../../../../assets/gauss-1-mobile.jpg'; // Update logo path as necessary
import gauss2Mobile from '../../../../assets/gauss-2-mobile.jpg'; // Update logo path as necessary

import gaussVideoWotext from '../../../../assets/gauss-video-wotext-compressed.mp4'; // Update video path

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
            <div style={{ paddingTop: '2vh', paddingRight: '3vh' }}>
              <RiCloseLine color="#FFFFFF" size={27} onClick={handleMenuToggle} />
            </div>
          ) : (
            <div style={{ paddingTop: '0.5vh', paddingRight: '0vh' }}>
              <RiMenuLine color="#FFFFFF" size={27} onClick={handleMenuToggle} />
            </div>
          )}
        </div>
      </div>

      {/* White Line Below Navbar */}
      <div className="navbar-white-line hidden sm:block ml-20 mt-[11px] w-[91%] border-b-2 border-[#F9F7F7] h-[4px] relative"></div>

      {/* Background Video */}
      <video 
        className="background-video"
        autoPlay
        muted
        loop
        src={gaussVideoWotext} 
        type="video/mp4"
      />
      
      {/* Sliding Menu */}
      <div className={`navbar-mobile-container ${toggleMenu ? 'visible' : ''}`}>
        <div className="navbar-mobile-content">
          <div className="navbar-menu-bikes-mobile">
            <Link to="/" className="navbar-menu-text-bikes">Bikes</Link>
            <div className="flex flex-row ml-[3vh] mt-[2vh]">
              <img src={gauss1Mobile} alt="Gauss 1 Image" className="gauss-bikes-mobile" />
              <img src={gauss2Mobile} alt="Gauss 2 Image" className="gauss-bikes-mobile" />
            </div>
           

          </div>
          <Link to="/" className="navbar-menu-text-about">About</Link>
          <Link to="/" className="navbar-menu-text-history">History</Link>
          <Link to="/" className="navbar-menu-text-team">Team</Link>


          <Link to="/" className="navbar-menu-text-partners">Partners</Link>
          <Link to="/" className="navbar-menu-text-participate">Participate</Link>
          <Link to="/" className="navbar-menu-text-imprint">Imprint</Link>
        </div>
      </div>
      <div className="hero-shadow-left"></div> {/* Add the left shadow here */}

      <div className="hero-shadow-bottom absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-100"></div>

      {/* Hero Title Section */}
      <div className="hero-title-container">
        <p className="hero-title-fuel">Charge the Future</p>

        <p className="hero-title-partner"><span className="highlight-text"></span></p>
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
