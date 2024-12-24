import React from 'react';
import './gauss2.css';  // Make sure the correct CSS file is imported

import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component
import gauss2Hero from '../../../../assets/gauss2/gauss2-hero-desaturate.jpg';

import gauss2battery from '../../../../assets/gauss2/gauss2-battery-resized.jpg';
import gauss2cooling from '../../../../assets/gauss2/gauss2-cooling.png';


const Gauss2 = () => {
  return (
    <div className="gauss2-page-container">
        <Navbar />
        <div className='gauss1-hero-container'>
          <img src={gauss2Hero} alt="Gauss 2 hero" className='gauss1-hero' />
                <div className='gauss1-hero-shadow'></div>
                <div className="gauss2-hero-text-overlay">
                  <p className='gauss2-hero-title'>Gauss 2</p>
                  <p className='gauss2-hero-title-description'>Innovation Meets Speed</p>
                </div>
        </div>

        <p className='gauss1-text-below-hero'>
        GAUSS II advances the legacy of GAUSS I, enhancing performance and technology with an upgraded frame and groundbreaking innovations, setting a new standard for electric superbikes.        </p>

        <div className='gauss1-systems-container'>
          <div className='gauss1-systems-left-container'>
            <img src={gauss2cooling} alt="Gauss1 cooling image" className='gauss2-description-picture' />
            <p className='gauss2-systems-title'>Efficient Thermal Management</p>
            <p className='gauss1-systems-description'>
            High-energy cylindrical cells are complemented by a motorbike featuring three independent cooling circuits for maximum performance. Thermal isolation protects the battery against extreme temperatures, while preconditioning optimizes efficiency for peak performance.            </p>
          </div>
          <div className='gauss1-systems-right-container'>
            <img src={gauss2battery} alt="Gauss1 cooling image" className='gauss2-description-picture' />
            <p className='gauss1-systems-title'>Quick-Swap Battery System</p>
            <p className='gauss1-systems-description'>
            Our main focus of research for GAUSS II was developing a high-performance, exchangeable battery system. The system features modular cells, allowing up to 12 modules to be easily swapped for maintenance, ensuring long-lasting performance.            </p>
          </div>
        </div>

        <Footer />

    </div>
  );
};

export default Gauss2;
