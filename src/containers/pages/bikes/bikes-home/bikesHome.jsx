// bikes/bikes-home/bikesHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component
import './BikesHome.css';  // Optional, for styling the home page

const BikesHome = () => {
  return (
    <div id="bikesHome" className="relative flex flex-col w-full h-[100vh] overflow-hidden bg-black">
     <Navbar/>
     <Footer />
    </div>
  );
};

export default BikesHome;
