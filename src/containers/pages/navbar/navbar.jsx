import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./navbar.css"; // Ensure your CSS file is correctly imported
import logoNew from '../../../assets/gauss-logo-new.png'; // Update path as necessary
import gauss1Mobile from '../../../assets/gauss-1-mobile.jpg'; // Update path as necessary
import gauss2Mobile from '../../../assets/gauss-2-mobile.jpg'; // Update path as necessary

const Menu = () => {
  return (
    <>
      <Link to="/" className="navbar-menu-text">Bikes</Link>
      <Link to="/about" className="navbar-menu-text">About</Link>
      <Link to="/" className="navbar-menu-text">Partners</Link>
      <Link to="/" className="navbar-menu-text">Participate</Link>
      <Link to="/" className="navbar-menu-text">Imprint</Link>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling behavior
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.9) { // You can adjust the value here based on when you want to trigger the navbar change
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const handleMenuToggle = () => {
    setToggleMenu(prevState => !prevState);
  };

  useEffect(() => {
    // Disable scrolling when the mobile menu is open
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggleMenu]);

  return (
    <div>
      <div className={`navbar-section ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/home">
          <img src={logoNew} alt="Gauss Logo" className="logo" />
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
            <Link to="/" className="navbar-menu-text-bikes">Bikes</Link>
            <div className="bikes-picture-container flex flex-row">
              <img src={gauss1Mobile} alt="Gauss 1 Image" className="gauss-bikes-mobile" />
              <img src={gauss2Mobile} alt="Gauss 2 Image" className="gauss-bikes-mobile" />
            </div>
          </div>
          <Link to="/about" className="navbar-menu-text-about">About</Link>
          <Link to="/" className="navbar-menu-text-history">History</Link>
          <Link to="/" className="navbar-menu-text-team">Team</Link>
          <Link to="/" className="navbar-menu-text-partners">Partners</Link>
          <Link to="/" className="navbar-menu-text-participate">Participate</Link>
          <Link to="/" className="navbar-menu-text-imprint">Imprint</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
