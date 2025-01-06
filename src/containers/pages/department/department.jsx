// src/containers/pages/department/department.jsx
import React from 'react';
import './department.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Motorbike3D from './Motorbike3D/Motorbike3D';  // Import the 3D model component
import departmentHero from '../../../assets/departments/departments-hero.jpg';

const Department = () => {
  return (
    <div id="department" className="department-section">
      <Navbar />
      <div>

      </div>
      <Motorbike3D /> {/* Add 3D model here */}
      <Footer />
    </div>
  );
};

export default Department;
