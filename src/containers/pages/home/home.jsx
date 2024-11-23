// src/containers/pages/home/Home.jsx
import React from 'react';
import Hero from './hero/hero';
import Description from './description/description';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />    
      <Description /> 
    </div>
  );
};

export default Home;
