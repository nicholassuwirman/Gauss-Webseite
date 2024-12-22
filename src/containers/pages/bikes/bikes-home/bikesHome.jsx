// bikes/bikes-home/bikesHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component

import './bikesHome.css';  // Optional, for styling the home page
import gauss1bikesHomePicture from '../../../../assets/gauss-1-mobile.jpg'; // Update path as necessary
import gauss2bikesHomePicture from '../../../../assets/gauss-2-mobile.jpg'; // Update path as necessary

const BikesHome = () => {
  
  return (
    <div id="bikesHome" className="bikes-home-container relative flex flex-col overflow-hidden">
     <Navbar/>
      <div className='bikes-pictures-container'>
        <div className='bikes-gauss1-container'>
          <img src={gauss1bikesHomePicture} alt="Gauss 1 Image" className="bikes-gauss1-picture" />
            <p className='bikesHome-gauss-text'>Gauss 1</p>
            <p className='bikesHome-gauss-description'>Vision to Reality</p>
            <Link to="/gauss1">
            <button className="bikes-learn-more-button">Learn More</button>
            </Link>
            </div>
        <div className='bikes-gauss2-container'>
          <img src={gauss2bikesHomePicture} alt="Gauss 1 Image" className="bikes-gauss2-picture" />
            <p className='bikesHome-gauss-text'>Gauss 2</p>
            <p className='bikesHome-gauss-description'>Advance the Vision</p>
            <Link to="/gauss2">
              <button className="bikes-learn-more-button-gauss2">Learn More</button>
            </Link>
        </div>
      </div>
     <Footer />
    </div>
  );
};

export default BikesHome;
