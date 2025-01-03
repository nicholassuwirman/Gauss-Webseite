import React, { useEffect, useRef, useState } from 'react';
import './description.css';
import bikePic1 from '../../../../assets/gauss_image_1.png';
import Footer from '../../footer/footer';

import sponsorHatronix from '../../../../assets/sponsor-hatronix.jpg';
import sponsorBechtle from '../../../../assets/sponsor-bechtle-cropped.png';
import sponsorBmz from '../../../../assets/sponsor-bmz.jpg';
import sponsorCarbon from '../../../../assets/sponsor-carbon-sigl.jpg';
import sponsorHda from '../../../../assets/sponsor-hda.png';
import sponsorIbh from '../../../../assets/sponsor-ibh.png';
import sponsorKerfaol from '../../../../assets/sponsor-kerfaol.jpg';
import sponsorKrah from '../../../../assets/sponsor-krah.webp';
import sponsorKrahWhite from '../../../../assets/sponsor-krah-white.png';

import sponsorMobilityAc from '../../../../assets/sponsor-mobility-academy.png';
import sponsorMobilityAcWhite from '../../../../assets/sponsor-mobility-academy-white.png';

import sponsorStaubli from '../../../../assets/sponsor-staubli.png';
import sponsorInnovatiq from '../../../../assets/sponsot-innovatiq.png';
import sponsorGftn from '../../../../assets/sponsor-gftn.jpg';

import bikeChargingStation from '../../../../assets/gauss-charging-station.png';

import bikePic2uncut from '../../../../assets/gauss2-description-picture.jpg';
import gaussGroupImage from '../../../../assets/gauss-group-image.jpg';
import gaussGroupImage2 from '../../../../assets/gauss-group-image2.jpg';
import gaussGroupImage3 from '../../../../assets/gauss-group3.jpg';

import gaussPar1 from '../../../../assets/gauss-par-1.jpg';
import gaussPar2 from '../../../../assets/gauss-par-2.jpg';
import gaussPar3 from '../../../../assets/gauss-par-3.jpg';
import gaussPar4 from '../../../../assets/gauss-par-4.jpg';
import gaussPar5 from '../../../../assets/gauss-par-5.jpg';

import gaussPar6 from '../../../../assets/gauss-par-6.jpeg';
import gaussPar7 from '../../../../assets/gauss-par-7.jpg';
import gaussPar8 from '../../../../assets/gauss-par-8.jpg';
import gaussPar9 from '../../../../assets/gauss-par-9.jpg';
import gaussPar10 from '../../../../assets/gauss-par-10.jpg';

import gauss2Video from '../../../../assets/Gauss 2 Video.mp4';

import speedLogo from '../../../../assets/speed_.png';
import weightLogo from '../../../../assets/weight_.png';
import torqueLogo from '../../../../assets/torque_.png';
import batteryLogo from '../../../../assets/battery-charging.png';
import powerLogo from '../../../../assets/power-logo.png';

import gaussDescriptionImage from '../../../../assets/gauss-description-2.jpg';

import copyrightLogo from '../../../../assets/copyright_.png';
import youtubeLogo from '../../../../assets/youtube_.png';
import instagramLogo from '../../../../assets/instagram_.png';
import linkedinLogo from '../../../../assets/linkedin_.png';


export const Power = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path fill="#DBE2EF" d="M439.6 0H204.9L55.4 256h149.5l-128 256l341.3-320H247.5z"></path>
  </svg>
);

const HeroWithScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);}


export const SpeedLoop = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
<mask id="lineMdSpeedLoop0">
    <path fill="#DBE2EF" stroke="#fff" strokeDasharray="56" strokeDashoffset="56" strokeLinecap="round" strokeWidth="2" d="M5 19V19C4.69726 19 4.41165 18.8506 4.25702 18.5904C3.45852 17.2464 3 15.6767 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 15.6767 20.5415 17.2464 19.743 18.5904C19.5884 18.8506 19.3027 19 19 19z">
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate>
    </path>
    <g fillOpacity="0" transform="rotate(-100 12 14)">
        <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
            <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"></animate>
        </path>
        <path fill="#DBE2EF" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
            <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"></animate>
        </path>
        <set attributeName="fill-opacity" begin="0.4s" to="1"></set>
        <animateTransform attributeName="transform" begin="0.6s" dur="6s" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"></animateTransform>
    </g>
</mask>
<rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeedLoop0)"></rect>
</svg>
)

const Description = () => {
  const [randomText, setRandomText] = useState("DESCRIPTION");
  const descriptionRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letter pool
  const originalText = "DESCRIPTION"; // Original word to revert to
  const iterations = 10; // Number of randomization steps before reverting

  // Function to randomize the letters in the text (except the first `n` characters)
  const randomizeText = (text, excludeCount) => {
    return text
      .split("") // Split the text into an array of characters
      .map((char, index) => {
        if (index < excludeCount) {
          return char; // Keep the original character for the first `excludeCount` characters
        }
        return letters[Math.floor(Math.random() * letters.length)]; // Randomize other characters
      })
      .join(""); // Join back into a string
  };

  useEffect(() => {
    let intervalId;
    let count = 0;

    const handleScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && count === 0) {
          // Start randomizing the text when the element is in view
          intervalId = setInterval(() => {
            const excludeCount = count; // The number of letters to exclude from randomization

            // Randomize the text based on the current iteration (excludeCount)
            setRandomText(randomizeText(originalText, excludeCount));

            count += 1;

            // Stop after 10 iterations and revert back to the original word
            if (count >= iterations) {
              clearInterval(intervalId);
              setRandomText(originalText); // Revert back to the original word
            }
          }, 1000 / 20); // 30 times per second (30Hz)
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 50% of the element is visible
    });

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
      // Clear interval if component unmounts or no longer in view
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element is in view, make it visible
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 20% of the element is visible
    });

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  

  return (
     <div
      className="description-container flex flex-col bg-black text-left  pb-4  text-lg h-auto "
      ref={descriptionRef}
    >
      

      <div className="description-datasheet-container">
        <div className=" description-text justify-center flex text-[#EAEAEA] text-[1rem] font-semibold sm:text-[3rem]">
        <p className='description-text-header'>Description</p>
        </div>
          <img src={gaussDescriptionImage} className="description-gauss-motorbike" loading="lazy" alt="Motorbike" />
          
          <div className="description-text-container">
            <div className="description-text-item"> 200 kW Max. Power</div>
            <div className="description-text-item">500 Nm Max. Torque</div>
            <div className="description-text-item">16 – 25 kWh Battery System</div>
            <div className="description-text-item">220 kg Weight</div>
            <div className="description-text-item">250 km/h Max. Speed</div>
          </div>
      </div>


    <div className='gauss-electric-container'>
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


    <div className="description-lightning-container flex flex-col items-center justify-start">
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

    <div className='gauss-charge-container '>
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
 
    <div className='description-sponsors-container'>
      <p className='description-sponsored-by-text'>Sponsored by</p>


      <div className='description-sponsors-row'>
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

      <button className="history-button">Be a part of history</button>

    </div>


  <Footer />
  
</div>
  );
};

export default Description;
