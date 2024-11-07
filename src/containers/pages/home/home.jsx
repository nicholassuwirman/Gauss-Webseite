// src/containers/pages/home/Home.jsx
import React from 'react';
import Hero from './hero/hero';
import Description from './description/description';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />       {/* Full viewport Hero section */}
      <Description /> {/* Description section below */}
    </div>
  );
};

export default Home;
