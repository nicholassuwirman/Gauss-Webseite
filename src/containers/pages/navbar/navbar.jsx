import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./navbar.css"; // Ensure your CSS file is correctly imported
import logoNew from '../../../assets/gauss-logo-new.png'; // Update path as necessary
import gaussLogoRed from '../../../assets/gauss-logo-red-transparent.png'; // Update path as necessary

import gauss1Mobile from '../../../assets/gauss-1-mobile.jpg'; // Update path as necessary
import gauss2Mobile from '../../../assets/gauss-2-mobile.jpg'; // Update path as necessary

const Menu = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <>
      <Link to="/bikesHome" className="navbar-menu-text" onClick={handleScrollToTop}>Bikes</Link>
      <Link to="/about" className="navbar-menu-text" onClick={handleScrollToTop}>About</Link>
      <Link to="/" className="navbar-menu-text" onClick={handleScrollToTop}>Partners</Link>
      <Link to="/" className="navbar-menu-text" onClick={handleScrollToTop}>Department</Link>
      <Link to="/" className="navbar-menu-text" onClick={handleScrollToTop}>Participate</Link>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.9) { 
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setToggleMenu(prevState => !prevState);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggleMenu]);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to top when menu is toggled
  };

  return (
    <div>
      <div className={`navbar-section ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" onClick={handleScrollToTop}>
          <img src={gaussLogoRed} alt="Gauss Logo" className="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu-container hidden md:flex">
          <Menu />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-mobile-menu md:hidden">
          {toggleMenu ? (
            <RiCloseLine color="#FFFFFF" size={27} onClick={handleMenuToggle} className="close-logo" />
          ) : (
            <RiMenuLine color="#FFFFFF" size={27} onClick={handleMenuToggle} className="open-logo" />
          )}
        </div>
      </div>

      <div className="navbar-white-line hidden sm:block ml-20 mt-[11px] w-[91%] border-b-2 border-[#F9F7F7] h-[4px] relative"></div>

      {/* Sliding Mobile Menu */}
      <div className={`navbar-mobile-container ${toggleMenu ? 'visible' : ''}`}>
        <div className="navbar-mobile-content">
          <div className="navbar-menu-bikes-mobile">
            <Link to="/bikesHome" className="navbar-menu-text-bikes" onClick={handleScrollToTop}>Bikes</Link>
            <div className="bikes-picture-container flex flex-row">
              <Link to="/gauss1" className="bikes-link" onClick={handleScrollToTop}>
                <img src={gauss1Mobile} alt="Gauss 1 Image" className="gauss-bikes-mobile" />
              </Link>              
              <Link to="/gauss2" className="bikes-link" onClick={handleScrollToTop}>
                <img src={gauss2Mobile} alt="Gauss 2 Image" className="gauss-bikes-mobile" />
              </Link>  
            </div>
          </div>
          <Link to="/about" className="navbar-menu-text-about" onClick={handleScrollToTop}>About</Link>
          <Link to="/" className="navbar-menu-text-partners" onClick={handleScrollToTop}>Partners</Link>
          <Link to="/" className="navbar-menu-text-partners" onClick={handleScrollToTop}>Department</Link>
          <Link to="/" className="navbar-menu-text-participate" onClick={handleScrollToTop}>Participate</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
