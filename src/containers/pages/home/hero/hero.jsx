import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import gaussVideo from '../../../../assets/Gauss Webvideo New compressed.mp4';
import logo from '../../../../assets/gauss logo.png';

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="navbar-section">
          <div className="navbar-section-top">
            <Link to="/home">
              <img src={logo} alt="Gauss Logo" className="logo" />
            </Link>            <div className="navbar-menu-text-container">
              <Link to="/about" className="navbar-menu-text">About</Link>
              <Link to="/" className="navbar-menu-text">Bikes</Link>
              <Link to="/" className="navbar-menu-text">Partners</Link>
              <Link to="/" className="navbar-menu-text">Participate</Link>
              <Link to="/" className="navbar-menu-text">Imprint</Link>

            </div>
          </div>
          <div className="navbar-section-line"></div>
        </div>

        <video 
          className="background-video"
          autoPlay
          muted
          loop
          src={gaussVideo} 
          type="video/mp4"
        />
        
        <div className="hero-shadow"></div>
        
        <div className="hero-title">
          <p className="hero-title-fuel">Fuel the Future</p>
          <p className="hero-title-partner">Partner with <span className="highlight-text">Gauss 2</span></p>
          <button className="hero-sponsor-button">Partner now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
