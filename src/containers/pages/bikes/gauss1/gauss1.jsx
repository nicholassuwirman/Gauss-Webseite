import { Link } from 'react-router-dom';
import './gauss1.css';  
import React, { useState } from 'react';

import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component

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

import gauss1descriptionImage from '../../../../assets/gauss1/gauss-1-description-pic-1.jpg';

const Gauss1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 3));  // Adjust based on number of images
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - 3)) % (images.length - 3)); // Adjust based on number of images
  };

  const [showTextForCircle1, setShowTextForCircle1] = useState(false);
  const [showTextForCircle2, setShowTextForCircle2] = useState(false);

  const toggleTextForCircle1 = () => {
    setShowTextForCircle1(!showTextForCircle1);
    setShowTextForCircle2(false);  // Hide the second text if the first is clicked
  };

  const toggleTextForCircle2 = () => {
    setShowTextForCircle2(!showTextForCircle2);
    setShowTextForCircle1(false);  // Hide the first text if the second is clicked
  };

  return (
    <div className='gauss1-page-container'>
     <Navbar />
     <div className='gauss1-hero-container'>
        <img src={gauss1Hero} alt="Gauss 1 image" className='gauss1-hero' />
        <div className="gauss1-hero-text-overlay">
          <p className='gauss1-hero-title'>Gauss 1</p>
          <p className='gauss1-hero-title-description'>The one that started it all</p>
        </div>
     </div>
    <p className='gauss1-text-below-hero'>GAUSS I was the initiator for the research project and implemented concepts such as the electric brake system, the front wheel energy recovery system and the rear exhaust air system. Step by step, our first superbike was built from individual assemblies into a fully functional electric sports motorcycle.</p>
    <div className='gauss1-systems-container'>
      <div className='gauss1-systems-left-container'>
        <img src={gauss1recovery} alt="Gauss1 cooling image" className='gauss1-cooling' />
        <p className='gauss1-systems-title'>Energy Recovery Braking</p>
        <p className='gauss1-systems-description'>We developed an innovative drivetrain with an electrical front brake. While braking with the front wheel, kinetic energy is transferred to the electrical engine. The engine is positioned in the middle of the motorcycle and during breaking works in generator mode like a bicycle dynamo. It converts kinetic energy into electrical energy. The recovered energy is used for charging the batteries.</p>
      </div>
      <div className='gauss1-systems-right-container'>
        <img src={gauss1cooling} alt="Gauss1 cooling image" className='gauss1-cooling' />
        <p className='gauss1-systems-title'>Advanced Air Cooling</p>
        <p className='gauss1-systems-description'>The PSM engine is built for racing purposes and needs an efficient cooling system. Therefore GAUSS I provides an air cooling system that draws the air from front and underseat pipes.</p>
      </div>
    </div>
    <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevImage}>‹</button>
        <div className="carousel-images-wrapper" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`carousel-${index}`} className="carousel-image" />
          ))}
        </div>
        <button className="carousel-button next" onClick={nextImage}>›</button>
      </div>
      <div className='gauss1-description-container'>
        <img src={gauss1descriptionImage} alt="Gauss1 description image" className='gauss1-description-image' />
        
        {/* Circle for first text */}
        <div className="circle-plus-1" onClick={toggleTextForCircle1}>
          <span className="plus-sign">+</span>
        </div>
        
        {/* Circle for second text */}
        <div className="circle-plus-2" onClick={toggleTextForCircle2}>
          <span className="arrow-sign">+</span>
        </div>
        
        {/* Conditional text for first circle */}
        {showTextForCircle1 && (
          <p className="description-text">This is the text for the first circle. It describes the functionality of the first circle.</p>
        )}
        
        {/* Conditional text for second circle */}
        {showTextForCircle2 && (
          <p className="description-text">This is the text for the second circle. It describes the functionality of the second circle with a different message.</p>
        )}
      </div>

     <Footer />
    </div>
  );
};

export default Gauss1;
