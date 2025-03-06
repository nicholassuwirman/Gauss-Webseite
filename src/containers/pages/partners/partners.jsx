import React from 'react';
import { Link } from "react-router-dom"; 
import './partners.css'; // Ensure your CSS file is correctly imported
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import gaussFace from './../../../assets/gauss2-carousel7.jpg';
import becomePartnerImage from './../../../assets/become-partner-image.jpg';

const Partners = () => {
  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="partners-page">
      <Navbar />

      <div className='partners-cards-container'>
      {/* Meet the Team Card */}
      <div className='about-card-container'>
              <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Our Partners</p>
            <p className='about-card-description'>
            Discover the incredible partners who support our mission, driving innovation in electric superbikes and helping us shape a more sustainable future for mobility.
            </p>
          </div>
          {/* Link to Team page, with scroll-to-top */}
          <Link to="/partners/ourPartners" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>
        <div className='about-card-container-right'>
          <img src={gaussFace} alt="Gauss Team" className='about-card-image' />
        </div>
      </div>

      {/* Meet the Team Card */}
      <div className='about-card-container'>
        <div className='about-card-container-left'>
          <div>
            <p className='about-card-title'>Become a Partner</p>
            <p className='about-card-description'>
            Join us in revolutionizing electric superbikes. Partner with Gauss Project to support cutting-edge innovation, sustainability, and the next generation of engineering talent.
            </p>
          </div>
          {/* Link to Team page, with scroll-to-top */}
          <Link to="/partners/becomePartner" onClick={handleScrollToTop}>
            <button className="about-button">Learn More</button>
          </Link>
        </div>
        <div className='about-card-container-right'>
          <img src={becomePartnerImage} alt="Gauss Team" className='about-card-image' />
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Partners;
