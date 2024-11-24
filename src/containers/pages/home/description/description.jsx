import React, { useEffect, useRef, useState } from 'react';
import './description.css';
import bikePic1 from '../../../../assets/gauss_image_1.png';

import sponsorHatronix from '../../../../assets/sponsor-hatronix.jpg';
import sponsorBechtle from '../../../../assets/sponsor-bechtle.png';
import sponsorBmz from '../../../../assets/sponsor-bmz.jpg';
import sponsorCarbon from '../../../../assets/sponsor-carbon-sigl.jpg';
import sponsorHda from '../../../../assets/sponsor-hda.png';
import sponsorIbh from '../../../../assets/sponsor-ibh.png';
import sponsorKerfaol from '../../../../assets/sponsor-kerfaol.jpg';
import sponsorKrah from '../../../../assets/sponsor-krah.webp';
import sponsorMobilityAc from '../../../../assets/sponsor-mobility-academy.png';
import sponsorStaubli from '../../../../assets/sponsor-staubli.png';
import sponsorInnovatiq from '../../../../assets/sponsot-innovatiq.png';

import bikeChargingStation from '../../../../assets/gauss-charging-station.png';

import bikePic2uncut from '../../../../assets/gauss_image_2_uncut.png';
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
      className="description-container flex flex-col bg-black text-left p-5 pb-4 pl-[90px] pr-[90px] text-lg h-auto "
      ref={descriptionRef}
    >
      <div className=" description-text pt-20 justify-center flex text-[#EAEAEA] text-[1rem] font-semibold sm:text-[3rem]">
        <p>{randomText}</p>
      </div>
      <div className="bg-black h-auto w-full mt-8 rounded-xl flex flex-col items-center  ">
        {/* Image with fade-in effect */}
        <img
          src={bikePic1}
          className={`description-gauss-motorbike w-[560px] h-[280px] fade-in ${
            isVisible ? 'active' : ''
          }`}
          alt="Gauss Motorcycle"
        />

        {/* Logos with fade-in effect */}
        <div
          className={`speed-torque-container flex justify-between pt-3 space-x-[90px] fade-in ${
            isVisible ? 'active' : ''
          }`}


        >
          <div className='flex flex-row'>
            <div className="description-power flex flex-col items-center">
                <img
                  src={powerLogo}
                  alt="power logo"
                  className="power-logo w-[42px] h-[42px]"
                />
                
                <p className="power-text-power text-white mt-4 font-exo">
                  110kW / 200kW
                </p>
              </div>

              <div className="description-torque flex flex-col items-center">
                <img
                  src={torqueLogo}
                  alt="torque logo"
                  className="w-[53px] h-[53px]"
                />
                <p className="power-text-torque text-white mt-[0.85rem] font-exo">500 Nm</p>
              </div>
            </div >

            <div className="description-logo-2 flex flex-row m-0">
              <div className="description-battery flex flex-col items-center">
                <img
                  src={batteryLogo}
                  alt="battery logo"
                  className="w-[40px] h-[40px]"
                />
                <p className="power-text text-white mt-4 font-exo">
                  16 – 20 kWh / 700 V
                </p>
              </div>
              <div className="description-weight flex flex-col items-center">
                <img
                  src={weightLogo}
                  alt="battery logo"
                  className="w-[40px] h-[40px]"
                />
                <p className="power-text text-white mt-4 font-exo">220 kg</p>
              </div>
            </div>
          
          <div className="description-speed flex flex-col items-center">
            <img
              src={speedLogo}
              alt="speed logo"
              className="w-[40px] h-[40px]"
            />
            <p className="power-text text-white mt-4 font-exo">250+ km/h</p>
          </div>
        </div>
      </div>

  <div className='gauss-2picture-container'>
    <div className='gauss-electric-container'>
      <img
        src={bikePic2uncut}
        className='gauss-electric-picture h-full ml-6 mr-7 max-w-full rounded-lg w-[50%]'
      />

      <div className='gauss-electric-text flex flex-col justify-center w-[50%] sm:ml-8 mt-8'>
          <p className='gauss-electric-superbike-text text-white mt-5 font-exo text-lg mb-8 font-medium sm:text-5xl'>
            GAUSS - Electric Superbike
          </p>
          <p className='power-text text-white font-exo'>
            The GAUSS superbike is the world’s first fully electric endurance motorcycle.
            The new fast exchangeable high performance battery system for racing purposes
            shifts limits. The new designed chassis is fully adaptable to the race track
            and pilot’s needs and the steering head angle, height and the length of the swingarm are adjustable.
          </p>
      </div>
    </div>

    <div className='gauss-charge-container '>
      <div className='description-charging-container flex flex-col justify-center w-[45%] mt-4'>
          <p className='description-charging-text power-text text-white mt-5 font-exo text-5xl mb-8 font-medium'>
            Special Charging Station
          </p>
          <p className='description-charging-description power-text text-white font-exo'>
          The core of the electric superbike is its Li-Ion energy storage system. Within seconds, 
          an empty battery can be changed against a fully charged one. The energy storage system can be charged 
          with a GAUSS fast charging station either off board or on board. The GAUSS charging station also supports 
          data recording software to analyze telemetry data of the vehicle.
          </p>
      </div>

      <img
        src={bikeChargingStation}
        className='image2-container h-[70%] w-[45%] rounded-lg ml-12'
      />
    </div>
  </div>
 


      <div className="h-[100vh] flex flex-col items-center justify-center space-y-6 pb-[40vh] mt-[18vh]">
        <div className='flex flex-col items-center justify-center mb-10'>
          <p className="power-text text-white font-exo text-5xl font-medium mb-6">
            Lightning-Fast Battery Swap
          </p>
          <p className='power-text text-white font-exo text-md w-[70%] flex flex-col items-center justify-center text-center ' >
          The core of the electric superbike is its Li-Ion energy storage system. Within seconds, an empty battery can be exchanged against a fully charged one. The energy storage system can be charged with a GAUSS fast charging station either off board or on board. The GAUSS charging station also supports data recording software to analyze telemetry data of the vehicle.
          </p>
        </div>
        
        <video
          className="background-video-gauss-2 h-[40vh]"
          autoPlay
          muted
          loop
          src={gauss2Video}
          type="video/mp4"
        />
      </div>
      
      <div className='flex w-[100%]'>
  

  <div className='flex flex-col'>
  <div class="parallax-container flex flex-row w-[100%]">
    <p class=" history-text absolute  transform text-5xl mb-10 z-10">
      Be a part of history
    </p>

    <div class="parallax-column" data-speed="5">
      <div class="parallax-images-1 justify-end">
        <div class="parallax-image-set">
          <img src={sponsorHda} alt="Image 1" className='sponsor-image' />
          <img src={sponsorHatronix} alt="Image 2" className='sponsor-image' />
          <img src={sponsorBechtle} alt="Image 3" className='sponsor-image' />
          <img src={sponsorBmz} alt="Image 4" className='sponsor-image' />
          <img src={sponsorCarbon} alt="Image 5"  className='sponsor-image'/>
          
        </div>
        <div class="parallax-image-set">
        </div>

        <div class="parallax-image-set">
          <img src={sponsorHda} alt="Image 1" className='sponsor-image' />
          <img src={sponsorHatronix} alt="Image 2" className='sponsor-image' />
          <img src={sponsorBechtle} alt="Image 3" className='sponsor-image' />
          <img src={sponsorBmz} alt="Image 4" className='sponsor-image' />
          <img src={sponsorCarbon} alt="Image 5"  className='sponsor-image'/>
        
        </div>
        <div class="parallax-image-set">
        </div>
      </div>
    </div>

    <div class="parallax-column" data-speed="5">
      <div class="parallax-images-2 justify-end">
        <div class="parallax-image-set">
          <img src={gaussPar1} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar2} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar3} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar4} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar5} alt="Image 5"  className='sponsor-image'/>

        </div>
        <div class="parallax-image-set">
        <img src={gaussPar1} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar2} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar3} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar4} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar5} alt="Image 5"  className='sponsor-image'/>

        </div>

        <div class="parallax-image-set">
        <img src={gaussPar1} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar2} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar3} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar4} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar5} alt="Image 5"  className='sponsor-image'/>

        </div>
        <div class="parallax-image-set">
          <img src={gaussPar1} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar2} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar3} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar4} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar5} alt="Image 5"  className='sponsor-image'/>

        </div>
      </div>
    </div>
    
    <div class="parallax-column" data-speed="5">
      <div class="parallax-images-3 justify-end">
        <div class="parallax-image-set">
          <img src={gaussPar6} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar7} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar8} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar9} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar10} alt="Image 5"  className='sponsor-image'/>
        </div>
        <div class="parallax-image-set">
        <img src={gaussPar6} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar7} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar8} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar9} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar10} alt="Image 5"  className='sponsor-image'/>
        </div>

        <div class="parallax-image-set">
        <img src={gaussPar6} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar7} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar8} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar9} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar10} alt="Image 5"  className='sponsor-image'/>
        </div>
        <div class="parallax-image-set">
        <img src={gaussPar6} alt="Image 1" className='sponsor-image' />
          <img src={gaussPar7} alt="Image 2" className='sponsor-image' />
          <img src={gaussPar8} alt="Image 3" className='sponsor-image' />
          <img src={gaussPar9} alt="Image 4" className='sponsor-image' />
          <img src={gaussPar10} alt="Image 5"  className='sponsor-image'/>
        </div>
      </div>
    </div>

    <div class="parallax-column" data-speed="9S">
      <div class="parallax-images-4 justify-end">
        <div class="parallax-image-set">
          <img src={sponsorKrah} alt="Image 9" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />

          <img src={sponsorStaubli} alt="Image 11" className='sponsor-image' />
          <img src={sponsorInnovatiq} alt="Image 12" className='sponsor-image' />
          <img src={sponsorIbh} alt="Image 7" className='sponsor-image' />
          <img src={sponsorKerfaol} alt="Image 8" className='sponsor-image' />
          <img src={sponsorKrah} alt="Image 9" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />

          <img src={sponsorStaubli} alt="Image 11" className='sponsor-image' />
          <img src={sponsorInnovatiq} alt="Image 12" className='sponsor-image' />
          <img src={sponsorIbh} alt="Image 7" className='sponsor-image' />
          <img src={sponsorKerfaol} alt="Image 8" className='sponsor-image' />
        </div>
        <div class="parallax-image-set">
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />
          <img src={sponsorStaubli} alt="Image 11" className='sponsor-image' />
          <img src={sponsorKrah} alt="Image 9" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />
          <img src={sponsorStaubli} alt="Image 11" className='sponsor-image' />
          <img src={sponsorKrah} alt="Image 9" className='sponsor-image' />

        </div>

        <div class="parallax-image-set">
          <img src={sponsorInnovatiq} alt="Image 12" className='sponsor-image' />
          <img src={sponsorIbh} alt="Image 7" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />
          <img src={sponsorKerfaol} alt="Image 8" className='sponsor-image' />
          <img src={sponsorInnovatiq} alt="Image 12" className='sponsor-image' />
          <img src={sponsorIbh} alt="Image 7" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />
          <img src={sponsorKerfaol} alt="Image 8" className='sponsor-image' />
        </div>
        <div class="parallax-image-set">
          
          <img src={sponsorStaubli} alt="Image 11" className='sponsor-image' />
          <img src={sponsorKrah} alt="Image 9" className='sponsor-image' />
          <img src={sponsorInnovatiq} alt="Image 12" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />
          <img src={sponsorStaubli} alt="Image 11" className='sponsor-image' />
          <img src={sponsorKrah} alt="Image 9" className='sponsor-image' />
          <img src={sponsorInnovatiq} alt="Image 12" className='sponsor-image' />
          <img src={sponsorMobilityAc} alt="Image 10" className='sponsor-image' />
        </div>
      </div>
    </div>

  </div>

  <div className="scroll-button-container">
      <button
        className="scroll-to-hero-button"
        onClick={() => {
          document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p className='contact-text'>Contact us</p>
      </button>
    </div>
  </div>
  </div>

  <div className='flex justify-between items-center'>
    <div className='flex items-center mt-[18rem] ml-[2.4rem]' >
      <img src={copyrightLogo} className='h-[1.5rem] mr-2 '/>    
      <p className='text-white pt-[1rem]'>Gauss Project</p>
    </div>

    <div className="flex mt-[18.2rem] items-center">
      <a
        href="https://www.youtube.com/@gauss-project7686"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src={youtubeLogo}
          className="social-icon h-[1.5rem] mr-2 ml-[0.5rem] group-hover:translate-y-[-4px] transition-transform duration-200"
          alt="YouTube"
        />
      </a>
      <a
        href="https://www.instagram.com/gauss_project?igsh=cnJsNjdrN3RyN3Vr"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src={instagramLogo}
          className="social-icon h-[1.5rem] mr-2 ml-[0.7rem] group-hover:translate-y-[-4px] transition-transform duration-200"
          alt="Instagram"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/gauss-project/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src={linkedinLogo}
          className="social-icon h-[1.5rem] mr-2 ml-[0.5rem] group-hover:translate-y-[-4px] transition-transform duration-200"
          alt="LinkedIn"
        />
      </a>
    </div>


  </div>
  
</div>
  );
};

export default Description;
