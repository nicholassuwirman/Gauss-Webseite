import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation(); // Get the current route
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <Link 
        to="/bikesHome" 
        className={`navbar-menu-text ${isActive("/bikesHome") ? "active-link" : ""}`} 
        onClick={handleScrollToTop}>
        Bikes
      </Link>
      <Link 
        to="/about" 
        className={`navbar-menu-text ${isActive("/about") ? "active-link" : ""}`} 
        onClick={handleScrollToTop}>
        About
      </Link>

      <Link 
        to="/partners" 
        className={`navbar-menu-text ${isActive("/partners") ? "active-link" : ""}`} 
        onClick={handleScrollToTop}>
        Partners
      </Link>
      <Link 
        to="/department" 
        className={`navbar-menu-text ${isActive("/department") ? "active-link" : ""}`} 
        onClick={handleScrollToTop}>
        Department
      </Link>
      <Link 
        to="/participate" 
        className={`navbar-menu-text ${isActive("/participate") ? "active-link" : ""}`} 
        onClick={handleScrollToTop}>
        Participate
      </Link>
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
          <Link 
            to="/bikesHome" 
            className={`navbar-menu-text-bikes ${location.pathname.includes("/bikesHome") ? "active-link" : ""}`} 
            onClick={handleScrollToTop}>
            Bikes
          </Link>
          <div className="bikes-picture-container flex flex-row">
            <Link 
              to="/bikesHome/gauss1" 
              className={`bikes-link ${location.pathname === "/bikesHome/gauss1" ? "active-link" : ""}`} 
              onClick={handleScrollToTop}>
              <img src={gauss1Mobile} alt="Gauss 1 Image" className="gauss-bikes-mobile" />
            </Link>              
            <Link 
              to="/bikesHome/gauss2" 
              className={`bikes-link ${location.pathname === "/bikesHome/gauss2" ? "active-link" : ""}`} 
              onClick={handleScrollToTop}>
              <img src={gauss2Mobile} alt="Gauss 2 Image" className="gauss-bikes-mobile" />
            </Link>  
          </div>
        </div>
        <Link 
          to="/about" 
          className={`navbar-menu-text-about ${location.pathname.startsWith("/about") ? "active-link" : ""}`} 
          onClick={handleScrollToTop}>
          About
        </Link>
        <Link 
          to="/partners" 
          className={`navbar-menu-text-partners ${location.pathname === "/partners" ? "active-link" : ""}`} 
          onClick={handleScrollToTop}>
          Partners
        </Link>
        <Link 
          to="/department" 
          className={`navbar-menu-text-partners ${location.pathname === "/department" ? "active-link" : ""}`} 
          onClick={handleScrollToTop}>
          Department
        </Link>
        <Link 
          to="/participate" 
          className={`navbar-menu-text-participate ${location.pathname === "/participate" ? "active-link" : ""}`} 
          onClick={handleScrollToTop}>
          Participate
        </Link>
      </div>
      </div>


    </div>
  );
};

export default Navbar;
