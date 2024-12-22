import { Link } from 'react-router-dom';
import './gauss1.css';
import React, { useState, useEffect } from 'react';

import Navbar from '../../navbar/navbar';  
import Footer from '../../footer/footer';  

import gauss1Hero from '../../../../assets/gauss1/gauss-1-hero3desaturate-cut-upscaled.jpg';
import gauss1cooling from '../../../../assets/gauss1/gauss1-cooling-pic-textremoved.jpg';
import gauss1recovery from '../../../../assets/gauss1/gauss1-recovery-pic-textremoved.jpg';

import gauss1carousel1 from '../../../../assets/gauss1/carousel1.jpg';
import gauss1carousel2 from '../../../../assets/gauss1/carousel2.jpg';
import gauss1carousel3 from '../../../../assets/gauss1/carousel3.jpg';
import gauss1carousel4 from '../../../../assets/gauss1/carousel4.jpg';
import gauss1carousel5 from '../../../../assets/gauss1/carousel5.jpg';
import gauss1carousel6 from '../../../../assets/gauss1/carousel6.jpg';
import gauss1carousel7 from '../../../../assets/gauss1/carousel7.jpg';
import gauss1carousel8 from '../../../../assets/gauss1/carousel8.jpg';
import gauss1carousel9 from '../../../../assets/gauss1/carousel9.jpg';

import gauss1sideImage from '../../../../assets/gauss1/gauss-1-description-pic-1.jpg';
import gauss1frontImage from '../../../../assets/gauss1/gauss-1-description-pic-2.jpg';

import gauss1footerHero from '../../../../assets/gauss1/gauss-1-footer-hero.jpg';

const Gauss1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState('rear'); 
  const [circleText, setCircleText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const images = [
    gauss1carousel3,
    gauss1carousel1, 
    gauss1carousel2,
    gauss1carousel4,
    gauss1carousel5,
    gauss1carousel6,
    gauss1carousel7,
    gauss1carousel9,
    gauss1carousel8,
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemWidth = windowWidth <= 768 ? 47.3 : 16.4;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleCircleClick = (text) => {
    setCircleText(text);
  };

  const activeImage = view === 'front' ? gauss1frontImage : gauss1sideImage;

  // Dynamically adjust circle positions for mobile vs desktop
  const getCirclePositions = (view) => {
    const isMobile = windowWidth <= 768;
    if (view === 'front') {
      return [
        { top: isMobile ? '52%' : '50%', left: isMobile ? '42%' : '47%', text: 'Front-Wheel Regenerative Braking System' },
        { top: isMobile ? '32%' : '26%', left: isMobile ? '55%' : '52.2%', text: 'Three steering dampers for improved handling' },
        { top: isMobile ? '65%' : '65%', left: isMobile ? '61%' : '55%', text: '200 Nm torque and 210 km/h max speed' },
      ];
    }
    return [
      { top: isMobile ? '45%' : '42%', left: isMobile ? '50%' : '50.5%', text: '363V nominal voltage and 16-20 kWh capacity' },
      { top: isMobile ? '52%' : '50%', left: isMobile ? '63%' : '56%', text: 'Honda-CRF250R-based Enduro Frame' },
      { top: isMobile ? '60%' : '62%', left: isMobile ? '46%' : '49%', text: '55kW continuous/100kW peak power output' },
    ];
  };

  const activeCircles = getCirclePositions(view);

  return (
    <div className='gauss1-page-container'>
      <Navbar />
      <div className='gauss1-hero-container'>
        <img src={gauss1Hero} alt="Gauss 1 image" className='gauss1-hero' />
        <div className='gauss1-hero-shadow'></div>
        <div className="gauss1-hero-text-overlay">
          <p className='gauss1-hero-title'>Gauss 1</p>
          <p className='gauss1-hero-title-description'>The one that started it all</p>
        </div>
      </div>

      <p className='gauss1-text-below-hero'>
        GAUSS I was the initiator for the research project and implemented concepts such as the electric brake system, the front wheel energy recovery system and the rear exhaust air system. Step by step, our first superbike was built from individual assemblies into a fully functional electric sports motorcycle.
      </p>

      <div className='gauss1-systems-container'>
        <div className='gauss1-systems-left-container'>
          <img src={gauss1recovery} alt="Gauss1 cooling image" className='gauss1-description-picture' />
          <p className='gauss1-systems-title'>Energy Recovery Braking</p>
          <p className='gauss1-systems-description'>
            We developed an innovative drivetrain with an electric front brake that recovers kinetic energy during braking. The engine acts as a generator, converting energy into electricity to recharge the batteries.
          </p>
        </div>
        <div className='gauss1-systems-right-container'>
          <img src={gauss1cooling} alt="Gauss1 cooling image" className='gauss1-description-picture' />
          <p className='gauss1-systems-title'>Advanced Air Cooling</p>
          <p className='gauss1-systems-description'>
            The PSM engine is built for racing purposes and needs an efficient cooling system. Therefore GAUSS I provides an air cooling system that draws the air from front and underseat pipes.
          </p>
        </div>
      </div>

      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevImage}><span className="arrow-sign">‹</span></button>
        <div className="carousel-images-wrapper" style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`carousel-${index}`} className="carousel-image" />
          ))}
        </div>
        <button className="carousel-button next" onClick={nextImage}><span className="arrow-sign">›</span></button>
      </div>

      <div className='gauss1-description-container'>
        <div className="toggle-buttons">
          <button
            className={`view-rear-front-button ${view === 'rear' ? 'active' : ''}`}
            onClick={() => setView('rear')}
          >
            Side
          </button>

          <button
            className={`view-rear-front-button ${view === 'front' ? 'active' : ''}`}
            onClick={() => setView('front')}
          >
            Front
          </button>
        </div>

        <img src={activeImage} alt="Gauss1 description image" className='gauss1-description-image' />

        {/* Circle buttons */}
        {activeCircles.map((circle, index) => (
          <div
            key={index}
            className="circle-test"
            style={{
              top: circle.top,
              left: circle.left,
            }}
            onClick={() => handleCircleClick(circle.text)}
          >
            <span className="plus-sign">+</span>
          </div>
        ))}

        {/* Text description below the image */}
        <div className="circle-text-container">
          <p className='circle-text-style'>{circleText}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gauss1;
