import React from 'react';
import './partners.css'; // Ensure your CSS file is correctly imported
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import sponsorHatronix from './../../../assets/sponsor-hatronix.jpg';
import sponsorBechtle from './../../../assets/sponsor-bechtle-cropped.png';
import sponsorBmz from './../../../assets/sponsor-bmz.jpg';
import sponsorCarbon from './../../../assets/sponsor-carbon-sigl.jpg';
import sponsorHda from './../../../assets/sponsor-hda.png';
import sponsorIbh from './../../../assets/sponsor-ibh.png';
import sponsorKerfaol from './../../../assets/sponsor-kerfaol.jpg';
import sponsorKrahWhite from './../../../assets/sponsor-krah-white.png';
import sponsorMobilityAcWhite from './../../../assets/sponsor-mobility-academy-white.png';
import arrowRight from '../../../assets/departments/arrow-right.png';

import sponsorStaubli from './../../../assets/sponsor-staubli.png';
import sponsorInnovatiq from './../../../assets/sponsot-innovatiq.png';
import sponsorGftn from './../../../assets/sponsor-gftn.jpg';
import teamArrow from './../../../assets/team-arrow-down.png'; // Update path as necessary

const PartnerCard = ({ imageSrc, text, link }) => {
  return (
    <a className='partners-contributor-link-wrapper' href={link} target="_blank" rel="noopener noreferrer">
      <div className='partners-contributor-image-container'>
        <img src={imageSrc} alt={text} className="partners-contributor-image" />
        <div className='flex'>
          <p className='departments-contributor-text'>{text}</p>
          <img src={arrowRight} alt="Arrow" className="departments-arrow-right" />
        </div>
      </div>
    </a>
  );
};

const Partners = () => {
  return (
    <div className="partners-section">
      <Navbar />
      <div className='partners-container'>
        <div className="partner-hero-container">
          <div className='partner-hero-left'>
              <p className="partner-hero-title">Our Partners</p>
                <img src={teamArrow} alt="Gauss 1 hero" className="partner-hero-arrow" />
          </div>
        </div>
        <p className='partners-team-partners-text'> Team Partners </p>
        <div className='partners-row'>
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
        </div>
        <div className='partners-row'>
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
          <PartnerCard imageSrc={sponsorHatronix} text={"Hatronix"} link={"https://erleben.h-da.de/fachbereich-media"} />
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Partners;