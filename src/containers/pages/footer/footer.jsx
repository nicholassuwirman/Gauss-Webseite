import copyrightLogo from '../../../assets/copyright_.png';
import youtubeLogo from '../../../assets/youtube_.png';
import instagramLogo from '../../../assets/instagram_.png';
import linkedinLogo from '../../../assets/linkedin_.png';
import './footer.css';

const Footer = () => {
    return(
    <div className='flex justify-between items-center'>
        <div className='copyright-logo-pic' >
        <img src={copyrightLogo} className='copyright-logo-picture h-[1.5rem] mr-2 '/>    
        <p className='description-copyright-text'>Gauss Project</p>
        </div>

        <div className="logo-footer-container">
        <a
            href="https://www.youtube.com/@gauss-project7686"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
        >
            <img
            src={youtubeLogo}
            className="social-icon "
            alt="YouTube"
            />
        </a>
        <a
            href="https://www.instagram.com/gauss_project?igsh=cnJsNjdrN3RyN3Vr"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
        >
            <img
            src={instagramLogo}
            className="social-icon"
            alt="Instagram"
            />
        </a>
        <a
            href="https://www.linkedin.com/company/gauss-project/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
        >
            <img
            src={linkedinLogo}
            className="social-icon "
            alt="LinkedIn"
            />
        </a>
        </div>
    </div>    
    );
};

export default Footer;
