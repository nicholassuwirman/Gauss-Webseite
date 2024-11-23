// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';

// Import containers with correct paths based on your folder structure
import Hero from './containers/pages/home/hero/hero';  // Correct path for Hero.jsx
import About from './containers/pages/about/about';    // Correct path for About.jsx
import Home from './containers/pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for Hero (Home) and About pages */}
        <Route path="/" element={<Home />} />  {/* Home route, Hero container */}

        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />  {/* About page route */}
      </Routes>
    </Router>
  );
}

export default App;
