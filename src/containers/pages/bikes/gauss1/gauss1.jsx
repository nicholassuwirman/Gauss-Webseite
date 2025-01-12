import './gauss1.css';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

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

import gauss1footerHero from '../../../../assets/gauss1/gauss-1-footer-image.jpg';

const Gauss1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState('rear'); 
  const [circleText, setCircleText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //-----GSAP-----
  const gauss1TitleRef = useRef(null); // Reference for the hero title container
  const gauss1TitleDescriptionRef = useRef(null); // Reference for the hero title highlight
  const gauss1DescriptionRef = useRef(null); // Reference for the hero title highlight
  const gauss1DescriptionLeftCardRef = useRef(null); // Reference for the hero title highlight
  const gauss1DescriptionRightCardRef = useRef(null); // Reference for the hero title highlight
  const gauss1CarouselRef = useRef(null); // Reference for the hero title highlight
  const gauss1SideFrontRef = useRef(null); // Reference for the hero title highlight
  const gauss1SideFrontMotorbikeRef = useRef(null); // Reference for the hero title highlight

  useEffect(() => {
    // Animation for the hero title (from bottom to top, from invisible to visible)
    gsap.fromTo(
      gauss1TitleRef.current, 
      {
        opacity: 0, 
        y: 20, // Start 20px below
      },
      {
        opacity: 1, 
        y: 0, // End at the original position
        duration: 1, // Duration of animation
        ease: "power4.out", // Smooth easing
      }
    );

    // Animation for the hero title highlight
    gsap.fromTo(
      gauss1TitleDescriptionRef.current,
      {
        opacity: 0,
        y: 20, // Start 20px below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 1,
        delay: 0.2, // Slight delay to stagger the animations
        ease: "power4.out",
      }
    );

    // Animation for the hero title highlight
    gsap.fromTo(
      gauss1DescriptionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gauss1DescriptionRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    // Animation for the hero title highlight
    gsap.fromTo(
      gauss1DescriptionLeftCardRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gauss1DescriptionLeftCardRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    // Animation for the hero title highlight
    gsap.fromTo(
      gauss1DescriptionRightCardRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gauss1DescriptionRightCardRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      gauss1CarouselRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gauss1CarouselRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      gauss1SideFrontRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gauss1SideFrontRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      gauss1SideFrontMotorbikeRef.current,
      { opacity: 0.5, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gauss1SideFrontMotorbikeRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );


  }, []);
  //-----GSAP----

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
    <div id="gauss1-top" className='gauss1-page-container'>
      <Navbar />
      <div className='gauss1-hero-container'>
        <img src={gauss1Hero} alt="Gauss 1 hero" className='gauss1-hero'/>
        <div className='gauss1-hero-shadow'></div>
        <div className="gauss1-hero-text-overlay">
          <p className='gauss1-hero-title' ref={gauss1TitleRef}>Gauss 1</p>
          <p className='gauss1-hero-title-description' ref={gauss1TitleDescriptionRef}>The one that started it all</p>
        </div>
      </div>

      <p className='gauss1-text-below-hero' ref={gauss1DescriptionRef}>
        GAUSS I pioneered our research, introducing the electric brake, front-wheel energy recovery, and rear air cooling systems, evolving into our first fully functional electric superbike.     
      </p>

      <div className='gauss1-systems-container'>
        <div className='gauss1-systems-left-container' ref={gauss1DescriptionLeftCardRef}>
          <img src={gauss1recovery} alt="Gauss1 cooling image" className='gauss1-description-picture' loading="lazy"/>
          <p className='gauss1-systems-title'>Energy Recovery Braking</p>
          <p className='gauss1-systems-description'>
            We developed an innovative drivetrain with an electric front brake that recovers kinetic energy during braking. The engine acts as a generator, converting energy into electricity to recharge the batteries.
          </p>
        </div>
        <div className='gauss1-systems-right-container' ref={gauss1DescriptionRightCardRef}>
          <img src={gauss1cooling} alt="Gauss1 cooling image" className='gauss1-description-picture' loading="lazy"/>
          <p className='gauss1-systems-title'>Advanced Air Cooling</p>
          <p className='gauss1-systems-description'>
            The PSM engine is built for racing purposes and needs an efficient cooling system. Therefore GAUSS I provides an air cooling system that draws the air from front and underseat pipes.
          </p>
        </div>
      </div>

      <div className="carousel-container" ref={gauss1CarouselRef}>
        <button className="carousel-button prev" onClick={prevImage}><span className="arrow-sign">‹</span></button>
        <div className="carousel-images-wrapper" style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`carousel-${index}`} className="carousel-image" loading="lazy"/>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextImage}><span className="arrow-sign">›</span></button>
      </div>

      <div className='gauss1-description-container' ref={gauss1SideFrontRef}>
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

        <img src={activeImage} alt="Gauss1 description image" className='gauss1-description-image' loading="lazy"/>

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

      <div className='gauss1-footer-hero'>
        <img src={gauss1footerHero} alt="Gauss1 footer hero image" className='gauss1-footer-hero-image' loading="lazy"/>
        <div className='gauss1-hero-footer-right'>
          <p className='gauss1-footer-hero-text-title'>Fuel the Future With Us</p>
          <p className='gauss1-footer-hero-text'>Partner with us to drive innovation and shape the future of electric mobility. Together, we can achieve groundbreaking advancements in sustainable technology.</p>

          <button className="gauss1-partner-button">Partner now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gauss1;
