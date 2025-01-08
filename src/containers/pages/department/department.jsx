import React, { useState } from 'react';
import './department.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import departmentsHero from '../../../assets/departments/departments-hero.jpg';
import teamArrow from '../../../assets/departments/team-arrow-down.png';
import departmentsGaussFront from '../../../assets/departments/departments-gauss-front.jpg';

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
  };

  const links = {
    media: 'https://erleben.h-da.de/fachbereich-media',// Corrected Link for Fb Media
    elektrotechnik: 'https://erleben.h-da.de/fachbereich-media', // Link for Fb Elektrotechnik
    kunststofftechnik: 'https://erleben.h-da.de/fachbereich-media', // Link for Fb Kunststofftechnik
    informatik: 'https://erleben.h-da.de/fachbereich-media', // Link for Fb Informatik
  };

  const handleDepartmentsClick = (title, department, description, buttonNumber) => {
    if (departmentsMoving) return;

    // If the same button is clicked again, toggle the text container visibility
    if (activeButton === buttonNumber) {
      // Reset positions and close text
      setShowTextContainer(false);
      setActiveButton(null);
      resetPositions();
    } else {
      // Update text content without closing the container first
      setDepartmentsTitle(title);
      setDepartmentsDescription(description);
      setDepartmentsButtonText('Learn More');

      // Update positions for the buttons
      updateButtonPositions(buttonNumber, department);

      // Show the text container immediately without delay
      setShowTextContainer(true);
      setActiveButton(buttonNumber); // Set the current button as active
    }

    // Ensure the animation completes before transitioning the state
    setDepartmentsMoving(true);
    setTimeout(() => {
      setDepartmentsMoving(false);
    }, 500); // Adjust this timeout as needed for smooth transition
  };

  const resetPositions = () => {
    setDepartmentsPosition({ top: '25%', left: '39%' });
    setDepartmentsSecondPosition({ top: '39%', left: '54%' });
    setDepartmentsThirdPosition({ top: '52%', left: '50%' });
    setDepartmentsFourthPosition({ top: '65%', left: '48%' });
  };

  const updateButtonPositions = (buttonNumber, department) => {
    if (buttonNumber === 1) {
      setDepartmentsPosition(departmentsPositions[department]);
      setDepartmentsSecondPosition({ top: '39%', left: '54%' });
      setDepartmentsThirdPosition({ top: '52%', left: '50%' });
      setDepartmentsFourthPosition({ top: '65%', left: '48%' });
    } else if (buttonNumber === 2) {
      setDepartmentsPosition({ top: '25%', left: '39%' });
      setDepartmentsSecondPosition(departmentsPositions[department]);
      setDepartmentsThirdPosition({ top: '52%', left: '50%' });
      setDepartmentsFourthPosition({ top: '65%', left: '48%' });
    } else if (buttonNumber === 3) {
      setDepartmentsPosition({ top: '25%', left: '39%' });
      setDepartmentsSecondPosition({ top: '39%', left: '54%' });
      setDepartmentsThirdPosition(departmentsPositions[department]);
      setDepartmentsFourthPosition({ top: '65%', left: '48%' });
    } else {
      setDepartmentsPosition({ top: '25%', left: '39%' });
      setDepartmentsSecondPosition({ top: '39%', left: '54%' });
      setDepartmentsThirdPosition({ top: '52%', left: '50%' });
      setDepartmentsFourthPosition(departmentsPositions[department]);
    }
  };

  return (
    <div id="department" className="department-section">
      <Navbar />
      <div className="team-hero-container">
        <div className="team-hero-left">
          <p className="department-hero-title">Our Departments</p>
          <img src={teamArrow} alt="Gauss 1 hero" className="history-hero-arrow" />
        </div>
        <img src={departmentsHero} alt="Gauss 1 hero" className="departments-hero-picture" />
        <div className="down-arrow-container"></div>
      </div>

      <p className="departments-text-below-hero">
        Discover the departments of students that played a part in building our motorbike, combining skills from engineering, design, and innovation.
      </p>

      <div className="departments-buttons-container">
        {/* Circle Buttons */}
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
      </div>

      {/* Text Description */}
      {showTextContainer && (
        <div className={`departments-circle-text-container ${showTextContainer ? 'visible' : ''}`}>
          <div className="departments-circle-text-box">
            <div>
              <p className="departments-circle-text-title">{departmentsTitle}</p>
              <p className="departments-circle-text-description">{departmentsDescription}</p>
            </div>
            <a href={links[departmentsTitle.toLowerCase().replace(' ', '')]} className="departments-learn-more-button">
              {departmentsButtonText}
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Department;
