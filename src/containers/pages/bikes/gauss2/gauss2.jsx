import React, { useState, useEffect } from 'react';
import './gauss2.css';

import Navbar from '../../navbar/navbar';  
import Footer from '../../footer/footer';  
import gauss2Hero from '../../../../assets/gauss2/gauss2-hero-desaturate.jpg';

import gauss2battery from '../../../../assets/gauss2/gauss2-battery-resized.jpg';
import gauss2cooling from '../../../../assets/gauss2/gauss2-cooling.png';

import gauss2carousel1 from '../../../../assets/gauss2/gauss2-carousel1.jpg';
import gauss2carousel2 from '../../../../assets/gauss2/gauss2-carousel2.jpg';
import gauss2carousel3 from '../../../../assets/gauss2/gauss2-carousel3.jpg';
import gauss2carousel4 from '../../../../assets/gauss2/gauss2-carousel4.jpg';
import gauss2carousel5 from '../../../../assets/gauss2/gauss2-carousel5.jpg';
import gauss2carousel6 from '../../../../assets/gauss2/gauss2-carousel6.jpg';
import gauss2carousel7 from '../../../../assets/gauss2/gauss2-carousel7.jpg';
import gauss2carousel8 from '../../../../assets/gauss2/gauss2-carousel8.jpg';
import gauss2carousel9 from '../../../../assets/gauss2/gauss2-carousel9.jpg';

import gauss2side from '../../../../assets/gauss2/gauss2-side.jpeg';
import gauss2front from '../../../../assets/gauss2/gauss2-front.jpg';

import gauss2footerHero from '../../../../assets/gauss2/gauss2-footer-image.jpg';

const Gauss2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState('rear');  // Add this state
  const [circleText, setCircleText] = useState('');  // For circle text on click
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const images = [
    gauss2carousel1,
    gauss2carousel2, 
    gauss2carousel3,
    gauss2carousel4,
    gauss2carousel9,
    gauss2carousel6,
    gauss2carousel7,
    gauss2carousel8,
    gauss2carousel5,
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

  const getCirclePositions = (view) => {
    const isMobile = windowWidth <= 768;
    if (view === 'front') {
      return [
        { top: isMobile ? '66%' : '68%', left: isMobile ? '41%' : '47%', text: 'Real-time telemetry ' },
        { top: isMobile ? '39%' : '37%', left: isMobile ? '58.5%' : '54%', text: 'In-house developed frame' },
        { top: isMobile ? '58%' : '59%', left: isMobile ? '60.5%' : '54.5%', text: '500 Nm torque and 250 km/h max speed' },
      ];
    }
    return [
      { top: isMobile ? '45%' : '43.5%', left: isMobile ? '52%' : '51.5%', text: '16-25 kWh battery capacity' },
      { top: isMobile ? '48%' : '48%', left: isMobile ? '67%' : '57%', text: 'Carbon fibre cover' },
      { top: isMobile ? '56.5%' : '56.5%', left: isMobile ? '39.7%' : '46.5%', text: '110kW continuous/200kW peak power output' },
    ];
  };

  const activeImage = view === 'front' ? gauss2front : gauss2side;  // Temporarily using gauss2Hero for both views
  
  const activeCircles = getCirclePositions(view);

  return (
    <div className="gauss2-page-container">
      <Navbar />
      <div className='gauss1-hero-container'>
        <img src={gauss2Hero} alt="Gauss 2 hero" className='gauss2-hero' />
        <div className='gauss1-hero-shadow'></div>
        <div className="gauss2-hero-text-overlay">
          <p className='gauss2-hero-title'>Gauss 2</p>
          <p className='gauss2-hero-title-description'>Innovation Meets Speed</p>
        </div>
      </div>

      <p className='gauss2-text-below-hero'>
        GAUSS II advances the legacy of GAUSS I, enhancing performance and technology with an upgraded frame and groundbreaking innovations, setting a new standard for electric superbikes.
      </p>

      <div className='gauss1-systems-container'>
        <div className='gauss1-systems-left-container'>
          <img src={gauss2cooling} alt="Gauss1 cooling image" className='gauss2-description-picture' />
          <p className='gauss2-systems-title'>Efficient Thermal Management</p>
          <p className='gauss1-systems-description'>
            High-energy cylindrical cells are complemented by featuring three independent cooling circuits for maximum performance. Thermal isolation protects the battery against extreme temperatures, while preconditioning optimizes efficiency for peak performance.
          </p>
        </div>
        <div className='gauss1-systems-right-container'>
          <img src={gauss2battery} alt="Gauss1 cooling image" className='gauss2-description-picture' />
          <p className='gauss1-systems-title'>Quick-Swap Battery System</p>
          <p className='gauss1-systems-description'>
            Our main focus of research for GAUSS II was developing a high-performance, exchangeable battery system. The system features modular cells, allowing up to 12 modules to be easily swapped for maintenance, ensuring long-lasting performance.
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
            className={`view-rear-front-button-gauss2 ${view === 'rear' ? 'active' : ''}`}
            onClick={() => setView('rear')}
          >
            Side
          </button>

          <button
            className={`view-rear-front-button-gauss2 ${view === 'front' ? 'active' : ''}`}
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
            className="circle-test-gauss2"
            style={{
              top: circle.top,
              left: circle.left,
            }}
            onClick={() => handleCircleClick(circle.text)}
          >
            <span className="plus-sign-gauss2">+</span>
          </div>
        ))}

        {/* Text description below the image */}
        <div className="circle-text-container">
          <p className='circle-text-style'>{circleText}</p>
        </div>
      </div>

      <div className='gauss1-footer-hero'>
        <img src={gauss2footerHero} alt="Gauss1 footer hero image" className='gauss1-footer-hero-image' />
        <div className='gauss1-hero-footer-right'>
          <p className='gauss1-footer-hero-text-title'>Fuel the Future With Us</p>
          <p className='gauss1-footer-hero-text'>Partner with us to drive innovation and shape the future of electric mobility. Together, we can achieve groundbreaking advancements in sustainable technology.</p>

          <button className="gauss1-partner-button">Contact Us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gauss2;
