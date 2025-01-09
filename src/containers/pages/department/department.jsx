import React, { useState } from 'react';
import './department.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import departmentsHero from '../../../assets/departments/departments-hero.jpg';
import teamArrow from '../../../assets/departments/team-arrow-down.png';
import departmentsGaussFront from '../../../assets/departments/departments-gauss-front.jpg';
import departmentsInformatikPicture from '../../../assets/departments/departments-informatik.jpg';
import departmentsMediaPicture from '../../../assets/departments/departments-media.jpg';
import departmentsKunststoffPicture from '../../../assets/departments/departments-kunststofftechnik.jpg';
import departmentsElektroPicture from '../../../assets/departments/departments-elektro.jpg';

import arrowRight from '../../../assets/departments/arrow-right.png';

const Department = () => {
  const [departmentsTitle, setDepartmentsTitle] = useState('');
  const [departmentsDescription, setDepartmentsDescription] = useState('');
  const [departmentsButtonText, setDepartmentsButtonText] = useState('Learn More');
  const [departmentsPosition, setDepartmentsPosition] = useState({ top: '25%', left: '39%' });
  const [departmentsSecondPosition, setDepartmentsSecondPosition] = useState({ top: '39%', left: '54%' });
  const [departmentsThirdPosition, setDepartmentsThirdPosition] = useState({ top: '52%', left: '50%' });
  const [departmentsFourthPosition, setDepartmentsFourthPosition] = useState({ top: '65%', left: '48%' });
  const [departmentsMoving, setDepartmentsMoving] = useState(false);
  const [showTextContainer, setShowTextContainer] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Track the active button

  const departmentsPositions = {
    engineering: { top: '12vh', left: '1.5%' },
    design: { top: '12vh', left: '1.5%' },
    innovation: { top: '12vh', left: '1.5%' },
    kunstofftechnik: { top: '12vh', left: '1.5%' },
    mobile: {
      engineering: { top: '80%', left: '50%' },
      design: { top: '80%', left: '50%' },
      innovation: { top: '80%', left: '50%' },
      kunstofftechnik: { top: '80%', left: '50%' },
    },
  };
  

  const links = {
    media: 'https://erleben.h-da.de/fachbereich-media',// Corrected Link for Fb Media
    elektrotechnik: 'https://erleben.h-da.de/fachbereich-media', // Link for Fb Elektrotechnik
    kunststofftechnik: 'https://erleben.h-da.de/fachbereich-media', // Link for Fb Kunststofftechnik
    informatik: 'https://erleben.h-da.de/fachbereich-media', // Link for Fb Informatik
  };
  const handleDepartmentsClick = (title, department, description, buttonNumber) => {
  if (departmentsMoving) return;

  // Determine if the screen is mobile-sized (<= 768px)
  const isMobile = window.innerWidth <= 768;
  const positions = isMobile ? departmentsPositions.mobile : departmentsPositions;

  // If the same button is clicked again, toggle the text container visibility
  if (activeButton === buttonNumber) {
    setShowTextContainer(false);
    setActiveButton(null);
    resetPositions();
  } else {
    setDepartmentsTitle(title);
    setDepartmentsDescription(description);
    setDepartmentsButtonText('Learn More');

    // Update the button positions and reset others
    updateButtonPositions(buttonNumber, department, positions);

    setShowTextContainer(true);
    setActiveButton(buttonNumber);
  }

  setDepartmentsMoving(true);
  setTimeout(() => {
    setDepartmentsMoving(false);
  }, 500); // Adjust the timeout as needed for smooth transition
};

// Refactored function to ensure proper updating of button positions
const updateButtonPositions = (buttonNumber, department, positions) => {
  // Reset all positions
  setDepartmentsPosition({ top: '12vh', left: '1.5%' });
  setDepartmentsSecondPosition({ top: '12vh', left: '1.5%' });
  setDepartmentsThirdPosition({ top: '12vh', left: '1.5%' });
  setDepartmentsFourthPosition({ top: '12vh', left: '1.5%' });

  // Apply the correct department position based on whether it's mobile or desktop
  const selectedPosition = positions[department];

  // Update positions for each department button
  if (buttonNumber === 1) {
    setDepartmentsPosition(selectedPosition);  // First button position
    setDepartmentsSecondPosition({ top: '39%', left: '54%' });
    setDepartmentsThirdPosition({ top: '52%', left: '50%' });
    setDepartmentsFourthPosition({ top: '65%', left: '48%' });
  } else if (buttonNumber === 2) {
    setDepartmentsPosition({ top: '25%', left: '39%' });
    setDepartmentsSecondPosition(selectedPosition);  // Second button position
    setDepartmentsThirdPosition({ top: '52%', left: '50%' });
    setDepartmentsFourthPosition({ top: '65%', left: '48%' });
  } else if (buttonNumber === 3) {
    setDepartmentsPosition({ top: '25%', left: '39%' });
    setDepartmentsSecondPosition({ top: '39%', left: '54%' });
    setDepartmentsThirdPosition(selectedPosition);  // Third button position
    setDepartmentsFourthPosition({ top: '65%', left: '48%' });
  } else {
    setDepartmentsPosition({ top: '25%', left: '39%' });
    setDepartmentsSecondPosition({ top: '39%', left: '54%' });
    setDepartmentsThirdPosition({ top: '52%', left: '50%' });
    setDepartmentsFourthPosition(selectedPosition);  // Fourth button position
  }
};
  

  return (
    <div id="department" className="department-section">
      <Navbar />
      <div className="team-hero-container">
          <div className="departments-hero-left">
            <p className="department-hero-title">Our Departments</p>
            <img src={teamArrow} alt="Gauss 1 hero" className="departments-hero-arrow" />
          </div>
          <img src={departmentsHero} alt="Gauss 1 hero" className="departments-hero-picture" />
          <div className="down-arrow-container"></div>
        </div>

        <p className="departments-text-below-hero">
          Discover the departments of students that played a part in building our motorbike, combining skills from engineering, design, and innovation.
        </p>

        <div>
          <div className="departments-buttons-container">
          {[1, 2, 3, 4].map((num, index) => {
          const positions = [
            departmentsPosition,
            departmentsSecondPosition,
            departmentsThirdPosition,
            departmentsFourthPosition,
          ];
          const titles = ['Fb Media', 'Fb Elektrotechnik', 'Fb Kunststofftechnik', 'Fb Informatik'];
          const descriptions = [
            'A department focused on the creative and technical aspects of media production, including video production, graphic design, and multimedia content creation.',
            'This department deals with the design, development, and application of electrical systems and equipment, including circuits, power generation, and control systems.',
            'Specializes in the design and production of high-performance composite materials, such as carbon fiber, used in the construction of the frame.',
            'Focuses on embedded systems and software development, particularly in the creation of Battery Management Systems (BMS).',
          ];
          return (
            <div
              key={num}
              className="departments-circle-test"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                transition: 'top 0.5s ease, left 0.5s ease',
              }}
              onClick={() =>
                handleDepartmentsClick(titles[index], Object.keys(departmentsPositions)[index], descriptions[index], num)
              }
            >
              <span className="departments-plus-sign">+</span>
            </div>
          );
          })}
          <img src={departmentsGaussFront} alt="Gauss 1 hero" className="departments-buttons-image" />
        
          {/* Text Description */}
          {showTextContainer && (
            <div className={`departments-circle-text-container ${showTextContainer ? 'visible' : ''}`}>
              <div className="departments-circle-text-box">
                <div>
                  <p className="departments-circle-text-title">{departmentsTitle}</p>
                  <p className="departments-circle-text-description">{departmentsDescription}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
      </div>

      <p className='departments-learn-more-text'>Explore the Departments</p>
      <div className='departments-contributors-images-container'>
        <a className='departments-contributor-link-wrapper' href="https://h-da.de/studium/studienangebot/studiengaenge/ingenieurwissenschaften/elektrotechnik-und-informationstechnik-b-eng" target="_blank" rel="noopener noreferrer">
          <div className='departments-contributor-image-container'>
            <img src={departmentsElektroPicture} alt="Informatik" className="departments-contributor-image" />
            <div className='flex'>
              <p className='departments-contributor-text'>Elektrotechnik</p>
              <img src={arrowRight} alt="Gauss 1 hero" className="departments-arrow-right" />
            </div>
          </div>
        </a>
        <a className='departments-contributor-link-wrapper' href="https://h-da.de/studium/studienangebot/studiengaenge/ingenieurwissenschaften/kunststofftechnik-beng" target="_blank" rel="noopener noreferrer">
          <div className='departments-contributor-image-container'>
            <img src={departmentsKunststoffPicture} alt="Informatik" className="departments-contributor-image" />
            <div className='flex'>
              <p className='departments-contributor-text'>Kunststofftechnik</p>
              <img src={arrowRight} alt="Gauss 1 hero" className="departments-arrow-right" />
            </div>
          </div>
        </a>
        <a className='departments-contributor-link-wrapper' href="https://fbi.h-da.de/" target="_blank" rel="noopener noreferrer">
          <div className='departments-contributor-image-container'>
            <img src={departmentsInformatikPicture} alt="Informatik" className="departments-contributor-image" />
            <div className='flex'>
              <p className='departments-contributor-text'>Informatik</p>
              <img src={arrowRight} alt="Gauss 1 hero" className="departments-arrow-right" />
            </div>
          </div>
        </a>
        <a className='departments-contributor-link-wrapper' href="https://erleben.h-da.de/fachbereich-media" target="_blank" rel="noopener noreferrer">
          <div className='departments-contributor-image-container'>
            <img src={departmentsMediaPicture} alt="Informatik" className="departments-contributor-image" />
            <div className='flex'>
              <p className='departments-contributor-text'>Media</p>
              <img src={arrowRight} alt="Gauss 1 hero" className="departments-arrow-right" />
            </div>
          </div>
        </a>
      </div>
      
      <Footer />
    </div>
  );
};

export default Department;
