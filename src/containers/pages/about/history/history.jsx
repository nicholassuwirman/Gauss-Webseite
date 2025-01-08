import React from 'react';
import Navbar from '../../navbar/navbar'; // Import Navbar component
import Footer from '../../footer/footer'; // Import Footer component
import './history.css'; // Import the CSS file for styling
import historyHero from '../../../../assets/history/history-hero-picture.jpg'; // Update path as necessary
import teamArrow from '../../../../assets/team/team-arrow-down.png'; // Update path as necessary
import historyAttilla from '../../../../assets/history/history-attilla.jpg'; // Update path as necessary
import historyGroupPic from '../../../../assets/history/gauss-group3.jpg'; // Update path as necessary


const History = () => {
  return (
    <div id="history" className="history-container">
      <Navbar /> {/* Include Navbar here */}
        <div className="team-hero-container">
            <div className='team-hero-left'>
                <p className="history-hero-title">Our History</p>
                <img src={teamArrow} alt="Gauss 1 hero" className="history-hero-arrow" />
            </div>
            <img src={historyHero} alt="Gauss 1 hero" className="historyy-hero-picture" />
            <div className="down-arrow-container">
            </div>
        </div>

        <div className='history-journey-container'>
            <img src={historyAttilla} alt="Gauss 1 hero" className="history-attilla-picture" />
            <div className='history-journey-text-container'>
                <p className='history-journey-title'>From Thesis to Thrill: Our Story</p>
                <p className='history-journey-text'> The interdisciplinary Gauss Project, initiated in 2010 by Marcel Attila Kiss through his diploma thesis "Gauss-Concept," revolutionized electric motorcycle design.</p>
                <p className='history-journey-text'> With support from Professor Dr. Hans Peter Bauer and Prof. Dr. Thomas Betz, the project introduced groundbreaking innovations. </p>
                <p className='history-journey-text'> These include the electrical braking system, front wheel energy recovery, and rear exhaust air system.</p>
                <p className='history-journey-text'> These ideas formed the foundation of the Gauss electrical motorcycle.</p>
                <p className='history-journey-text'> Mechatronics students Alexander Klein and Markus Herzog further contributed by developing an engine test bench.</p>
            </div>
        </div>
        
      <div className='history-cards-container'>
        <p className='history-wip'>WIP add timeline of years here</p>
      </div>
      <Footer /> {/* Include Footer here */}
    </div>
  );
};

export default History;
