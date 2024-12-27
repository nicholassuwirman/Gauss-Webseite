import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';
import { ApolloProvider } from '@apollo/client'; // ApolloProvider to wrap the application
import client from '../apolloClient'; // Apollo Client instance

// Lazy load the components
const Hero = React.lazy(() => import('./containers/pages/home/hero/hero'));  // Correct path for Hero.jsx
const About = React.lazy(() => import('./containers/pages/about/about'));    // Correct path for About.jsx
const Home = React.lazy(() => import('./containers/pages/home/home'));
const BikesHome = React.lazy(() => import('./containers/pages/bikes/bikes-home/bikesHome'));  // Import BikesHome component
const Gauss1 = React.lazy(() => import('./containers/pages/bikes/gauss1/gauss1'));  // Import Gauss1 component
const Gauss2 = React.lazy(() => import('./containers/pages/bikes/gauss2/gauss2'));  // Import Gauss2 component

// Fallback component while loading
const Loading = () => <div>Loading...</div>;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Suspense fallback={<Loading />}>
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
