import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import gaussVideo from '../../../../assets/Gauss Video Cut New compressed.mp4';
import logo from '../../../../assets/gauss logo.png';

const Menu = () => {
  return (
    <>
      <Link to="/about" className="navbar-menu-text">About</Link>
      <Link to="/" className="navbar-menu-text">Bikes</Link>
      <Link to="/" className="navbar-menu-text">Partners</Link>
      <Link to="/" className="navbar-menu-text">Participate</Link>
      <Link to="/" className="navbar-menu-text">Imprint</Link>
    </>
  )
}

const Hero = () => {
  return (
    <>
      <div id="hero" className="relative flex flex-col w-full h-screen overflow-hidden">
        <div className="navbar-section h-[60px] w-full flex flex-col">
          <div className=" flex items-center justify-between">
            <Link to="/home">
              <img src={logo} alt="Gauss Logo" className="logo" />
            </Link> <div className="navbar-menu-text-container">
              <Menu />
            </div>
          </div>
          <div className="mt-[10px] w-[101.5%] border-b-2 border-[#F9F7F7] h-[4px] relative z-5"></div>
        </div>

        <video 
          className="background-video"
          autoPlay
          muted
          loop
          src={gaussVideo} 
          type="video/mp4"
        />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-100 z-0"></div>

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
