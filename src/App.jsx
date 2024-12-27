import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';
import { ApolloProvider } from '@apollo/client'; // ApolloProvider to wrap the application

import client from '../apolloClient'; // Apollo Client instance
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load components using React.lazy()
const Hero = React.lazy(() => import('./containers/pages/home/hero/hero')); // Lazy load Hero
const About = React.lazy(() => import('./containers/pages/about/about')); // Lazy load About
const Home = React.lazy(() => import('./containers/pages/home/home')); // Lazy load Home
const BikesHome = React.lazy(() => import('./containers/pages/bikes/bikes-home/bikesHome')); // Lazy load BikesHome
const Gauss1 = React.lazy(() => import('./containers/pages/bikes/gauss1/gauss1')); // Lazy load Gauss1
const Gauss2 = React.lazy(() => import('./containers/pages/bikes/gauss2/gauss2')); // Lazy load Gauss2

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}> {/* Fallback component while loading */}
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<Home />} />  {/* Home route, Hero container */}
            <Route path="/bikesHome" element={<BikesHome />} />  {/* Bikes Home route */}
            <Route path="/about" element={<About />} />  {/* About page route */}
            <Route path="/gauss1" element={<Gauss1 />} />  {/* Gauss1 page */}
            <Route path="/gauss2" element={<Gauss2 />} />  {/* Gauss2 page */}
          </Routes>
        </Suspense>
      </Router>
    </ApolloProvider>
  );
}

export default App;
