import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';
import { ApolloProvider } from '@apollo/client'; // ApolloProvider to wrap the application

import client from '../apolloClient'; // Apollo Client instance

// Import containers with correct paths based on your folder structure
import Hero from './containers/pages/home/hero/hero';  // Correct path for Hero.jsx
import About from './containers/pages/about/about';    // Correct path for About.jsx
import Home from './containers/pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BikesHome from './containers/pages/bikes/bikes-home/bikesHome';  // Import BikesHome component
import Gauss1 from './containers/pages/bikes/gauss1/gauss1';  // Import Gauss1 component
import Gauss2 from './containers/pages/bikes/gauss2/gauss2';  

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />  {/* Home route, Hero container */}
          <Route path="/bikesHome" element={<BikesHome />} />  {/* Bikes Home route */}
          <Route path="/about" element={<About />} />  {/* About page route */}
          <Route path="/gauss1" element={<Gauss1 />} />  {/* Gauss1 page */}
          <Route path="/gauss2" element={<Gauss2 />} />  {/* Gauss2 page */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
