import React, { useEffect, useRef, useState } from 'react';
import './description.css';
import Footer from '../../footer/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import sponsorHatronix from '../../../../assets/sponsor-hatronix.jpg';
import sponsorBechtle from '../../../../assets/sponsor-bechtle-cropped.png';
import sponsorBmz from '../../../../assets/sponsor-bmz.jpg';
import sponsorCarbon from '../../../../assets/sponsor-carbon-sigl.jpg';
import sponsorHda from '../../../../assets/sponsor-hda.png';
import sponsorIbh from '../../../../assets/sponsor-ibh.png';
import sponsorKerfaol from '../../../../assets/sponsor-kerfaol.jpg';
import sponsorKrahWhite from '../../../../assets/sponsor-krah-white.png';
import sponsorMobilityAcWhite from '../../../../assets/sponsor-mobility-academy-white.png';

import sponsorStaubli from '../../../../assets/sponsor-staubli.png';
import sponsorInnovatiq from '../../../../assets/sponsot-innovatiq.png';
import sponsorGftn from '../../../../assets/sponsor-gftn.jpg';

import bikeChargingStation from '../../../../assets/gauss-charging-station.png';

import bikePic2uncut from '../../../../assets/gauss2-description-picture.jpg';

import gauss2Video from '../../../../assets/Gauss 2 Video.mp4';

import gaussDescriptionImage from '../../../../assets/gauss-description-2.jpg';

import contactPerosnSteven from '../../../../assets/team-steven-samstag-cropped.jpg';
import emailLogo from '../../../../assets/email_.png';
import linkedinLogo from '../../../../assets/linkedin_.png';

const Description = () => {
  // Create separate refs for each animated section
  const descriptionContentRef = useRef(null);
  const gaussElectricRef = useRef(null);
  const lightningRef = useRef(null);
  const chargingStationRef = useRef(null);
  const sponsorsRef = useRef(null);

  useEffect(() => {
    // Apply GSAP animation to each section using their respective refs
    gsap.fromTo(
      descriptionContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descriptionContentRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      gaussElectricRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gaussElectricRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      lightningRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: lightningRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      chargingStationRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: chargingStationRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      sponsorsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sponsorsRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );
    
  }, []);

  return (
    <div className="description-container flex flex-col bg-black text-left pb-4 text-lg h-auto">
      {/* Wrap the whole content you want to animate */}
      <div className="description-datasheet-container" ref={descriptionContentRef}>
        <div className="description-text justify-center flex text-[#EAEAEA] text-[1rem] font-semibold sm:text-[3rem]">
          <p className="description-text-header">Description</p>
        </div>
        <img
          src={gaussDescriptionImage}
          className="description-gauss-motorbike"
          loading="lazy"
          alt="Motorbike"
        />

        <div className="description-text-container">
          <div className="description-text-item">200 kW Max. Power</div>
          <div className="description-text-item">500 Nm Max. Torque</div>
          <div className="description-text-item">16 – 25 kWh Battery System</div>
          <div className="description-text-item">220 kg Weight</div>
          <div className="description-text-item">250 km/h Max. Speed</div>
        </div>
      </div>



    <div className='gauss-electric-container' ref={gaussElectricRef}>
      <img loading="lazy"
        src={bikePic2uncut}
        className='gauss-electric-picture'
      />

      <div className='gauss-electric-text flex flex-col justify-center w-[50%]'>
          <p className='gauss-electric-superbike-text text-white font-exo text-lg font-medium sm:text-5xl'>
            GAUSS - Electric Superbike
          </p>
          <p className='gauss-electric-description'>
          Designed and built by students, the GAUSS superbike is the world’s first fully electric endurance motorcycle. Its adjustable chassis and components are designed for optimal track and rider customization.          </p>
      </div>
    </div>


    <div className="description-lightning-container flex flex-col items-center justify-start" ref={lightningRef}>
        <div className='lightning-fast-container flex flex-col items-center justify-start'>
          <p className="lightning-fast-text text-white font-exo font-medium">
            Lightning-Fast Battery Swap
          </p>
          <p className="minimize-downtime-text text-white font-exo mt-3">
          minimizing downtime, maximizing efficiency.          </p>
        </div>
            <div className="video-shadow"></div>

        <video
          className="description-battery-swap-video m-0"
          autoPlay
          muted
          loop
          src={gauss2Video}
          type="video/mp4"
        />
      </div>

    <div className='gauss-charge-container' ref={chargingStationRef}>
      <div className='description-charging-container flex flex-col justify-center w-[45%] mt-4'>
          <p className='description-charging-text power-text text-white mt-5 font-exo text-5xl mb-8 font-medium'>
            Special Charging Station
          </p>
          <p className='description-charging-description power-text text-white font-exo'>
          The GAUSS superbike’s core is its Li-Ion energy storage system, which can be charged via an off-board or on-board GAUSS fast charging station and also supporting telemetry data analysis.
          </p>
      </div>

      <img loading="lazy"
        src={bikeChargingStation}
        className='image2-container h-[70%] w-[45%] rounded-lg ml-12'
      />
    </div>
 
    <div className='description-sponsors-container' ref={sponsorsRef}>
      <p className='description-sponsored-by-text'  >Sponsored by</p>


      <div className='description-sponsors-row' >
        <div className='description-sponsor-inside-row'>
          <img src={sponsorHatronix} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
          <img src={sponsorGftn} alt="Gauss sponsor image" className='description-sponsor-image'loading="lazy" />
        </div>
        <div className='description-sponsor-inside-row'>
          <img src={sponsorBmz} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
          <img src={sponsorCarbon} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
        </div>
      </div>

      <div className='description-sponsors-row'>
        <div className='description-sponsor-inside-row'>
          <img src={sponsorIbh} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
          <img src={sponsorKerfaol} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy" />
        </div>
        <div className='description-sponsor-inside-row'>
          <img src={sponsorHda} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
          <img src={sponsorBechtle} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>

        </div>
      </div>

      <div className='description-sponsors-row'>

        <div className='description-sponsor-inside-row'>
          <img src={sponsorStaubli} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
          <img src={sponsorMobilityAcWhite} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
        </div>
        <div className='description-sponsor-inside-row'>
          <img src={sponsorInnovatiq} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>
          <img src={sponsorKrahWhite} alt="Gauss sponsor image" className='description-sponsor-image' loading="lazy"/>

        </div>
      </div>


      <div className='description-contact-container'>
        <p className='description-contact-person-text'>Contact Person</p>
        <div className='description-contact-person-container'>
          <div className='contact-person-1-container'>
            <p className='description-contanct-person-name'>Steven Samstag</p>
            <img src={contactPerosnSteven} alt="Gauss sponsor image" className='contact-person-image' loading="lazy"/>
            <div className='contact-person-logos-container'>
              <a href="https://www.linkedin.com/in/steven-samstag-7a474b263/?originalSubdomain=de" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn Profile" className='contact-person-logo-linkedin' loading="lazy"/>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=dummyemail@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={emailLogo} alt="Email Contact" className='contact-person-logo-email' loading="lazy"/>
              </a>
            </div>          
          </div>
          <div className='contact-person-2-container'>
            <p className='description-contanct-person-name'>Steven Samstag</p>
            <img src={contactPerosnSteven} alt="Gauss sponsor image" className='contact-person-image' loading="lazy"/>
            <div className='contact-person-logos-container'>
              <a href="https://www.linkedin.com/in/steven-samstag-7a474b263/?originalSubdomain=de" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn Profile" className='contact-person-logo-linkedin' loading="lazy"/>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=dummyemail@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={emailLogo} alt="Email Contact" className='contact-person-logo-email' loading="lazy"/>
              </a>
            </div>          
          </div>
        </div>
      </div>
      
      <button className="history-button">Be a part of history</button>
    </div>


  <Footer />
  
</div>
  );
};

export default Description;
