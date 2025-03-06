import { Link } from "react-router-dom";
import copyrightLogo from "../../../assets/copyright_.png";
import youtubeLogo from "../../../assets/youtube_.png";
import instagramLogo from "../../../assets/instagram_.png";
import linkedinLogo from "../../../assets/linkedin_.png";
import gaussLogo from "../../../assets/gauss-logo-red-transparent.png";

import "./footer.css";

// Reusable function for scrolling to the top
const scrollToTop = () => window.scrollTo(0, 0);

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-column-logo">
          <img src={gaussLogo} alt="Gauss sponsor image" className="footer-gauss-logo" loading="lazy" />
          <p className="footer-company-name">Gauss Project</p>
          <p className="footer-company-description">
            A student research project pioneering the world's first electric endurance superbike for a sustainable future.
          </p>
        </div>
        <div className="footer-top-column">
          <p className="footer-top-column-title">Explore</p>
          <Link to="/bikesHome" className="footer-link-text" onClick={scrollToTop}>
            Our bikes
          </Link>
          <Link to="/about" className="footer-link-text" onClick={scrollToTop}>
            About us
          </Link>
          <Link to="/partners" className="footer-link-text" onClick={scrollToTop}>
            Partners
          </Link>
          <Link to="/department" className="footer-link-text" onClick={scrollToTop}>
            Our Departments
          </Link>
          <Link to="/participate" className="footer-link-text" onClick={scrollToTop}>
            Be a team member
          </Link>
        </div>
        <div className="footer-top-column">
          <p className="footer-top-column-title">Projects</p>
          <Link to="/bikesHome/gauss1" className="footer-link-text" onClick={scrollToTop}>
            Gauss 1
          </Link>
          <Link to="/bikesHome/gauss2" className="footer-link-text" onClick={scrollToTop}>
            Gauss 2
          </Link>
          <Link to="/participate" className="footer-link-text" onClick={scrollToTop}>
            Meet the team
          </Link>
          <Link to="/participate" className="footer-link-text" onClick={scrollToTop}>
            Our History
          </Link>
          <Link to="/participate" className="footer-link-text" onClick={scrollToTop}>
            Our Partners
          </Link>
          <Link to="/participate" className="footer-link-text" onClick={scrollToTop}>
            Be a partner
          </Link>
          <Link to="/participate" className="footer-link-text" onClick={scrollToTop}>
            Join our team
          </Link>
        </div>
        <div className="footer-top-column">
          <p className="footer-top-column-title">Social Media</p>
          <div className="footer-social-icons">
            <a href="https://www.youtube.com/@gauss-project7686" target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="YouTube" className="footer-social-icon" />
            </a>
            <a href="https://www.instagram.com/gauss_project/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/gauss-project/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
            <img src={copyrightLogo} alt="Copyright" className="footer-copyright-icon" />
            <p className="footer-copyright-text">
              2025 Gauss Project
            </p>
        </p>
        <Link to="/imprint" className="footer-imprint-text">Imprint</Link>
      </div>

    </div>
  );
};

export default Footer;
