// src/components/about/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';  // Ensure this path is correct
import logo from '../../.././assets/gauss logo.png'; // Update the path if needed

const About = () => {
  return (
    <div id="about" className="relative flex flex-col w-full h-[100vh] overflow-hidden bg-black">
      {/* Navbar Section */}
      <div className="navbar-section ">
        <div className="flex items-center justify-between">
          <Link to="/home">
            <img src={logo} alt="Gauss Logo" className="logo" />
          </Link>
          <div className="navbar-menu-text-container">
            <Link to="/about" className="navbar-menu-text">About</Link>
            <Link to="/" className="navbar-menu-text">Bikes</Link>
            <Link to="/" className="navbar-menu-text">Partners</Link>
            <Link to="/" className="navbar-menu-text">Participate</Link>
            <Link to="/" className="navbar-menu-text">Imprint</Link>
          </div>
        </div>
        <div className="mt-[10px] w-[101.5%] border-b-2 border-[#F9F7F7] h-[4px] relative z-5"></div>
      </div>
      {/* Additional content for About page can go here */}
    </div>
  );
};

export default About;
