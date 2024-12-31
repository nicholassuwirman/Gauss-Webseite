import React from 'react';
import { AiOutlineDown } from 'react-icons/ai'; // Import down arrow icon from react-icons
import './team.css'; // Import the CSS file here
import Navbar from '../../navbar/navbar';  // Importing Navbar component
import Footer from '../../footer/footer';  // Importing Footer component
import teamHero from '../../../../assets/team/team-hero-picture.jpg'; // Update path as necessary
import teamArrow from '../../../../assets/team/team-arrow-down.png'; // Update path as necessary
import teamStevenSamstag from '../../../../assets/team/team-steven-samstag.jpg'; // Update path as necessary
import teamDeak from '../../../../assets/team/team-jannis-deak.jpg'; // Update path as necessary
import teamKettner from '../../../../assets/team/team-tom-kettner.jpg'; // Update path as necessary
import teamGrosch from '../../../../assets/team/team-felix-grosch.jpg'; // Update path as necessary

const Team = () => {
  return (
    <div className="team-container">
        <Navbar />  {/* Include Navbar here */}
        <div className="team-hero-container">
            <div className='team-hero-left'>
                <p className="team-hero-title">Our Team</p>
                <img src={teamArrow} alt="Gauss 1 hero" className="team-hero-arrow" />
            </div>
            <img src={teamHero} alt="Gauss 1 hero" className="team-hero-picture" />
            <div className="down-arrow-container">
            </div>
        </div>
        <p className='team-leaders-text'>Team Leaders</p>
        <div className='team-leader-container'>
            <div className='team-leader-2-person-container'>
                <div className='team-person-container'>
                    <img src={teamStevenSamstag} alt="Gauss 1 hero" className="team-person-picture" />
                    <div className='team-description-container'>
                        <p className='team-person-name'>Steven Samstag</p>
                        <p className='team-person-role'>Project Leader</p>
                        <p className='team-person-studiengang'>Wirtschaftsingenieurwesen (Master)</p>
                    </div>
                </div>
                <div className='team-person-container'>
                    <img src={teamDeak} alt="Gauss 1 hero" className="team-person-picture" />
                    <div className='team-description-container'>
                        <p className='team-person-name'>Jannis Deak</p>
                        <p className='team-person-role'>Project Leader</p>
                        <p className='team-person-studiengang'>Wirtschaftsingenieurwesen (Master)</p>
                    </div>
                </div>
            </div>
            <div className='team-leader-2-person-container'>
                <div className='team-person-container'>
                    <img src={teamKettner} alt="Gauss 1 hero" className="team-person-picture" />
                    <div className='team-description-container'>
                        <p className='team-person-name'>Tom Kettner</p>
                        <p className='team-person-role'>Project Leader</p>
                        <p className='team-person-studiengang'>Wirtschaftsingenieurwesen (Master)</p>
                    </div>
                </div>
                <div className='team-person-container'>
                    <img src={teamGrosch} alt="Gauss 1 hero" className="team-person-picture" />
                    <div className='team-description-container'>
                        <p className='team-person-name'>Felix Grosch</p>
                        <p className='team-person-role'>Project Leader</p>
                        <p className='team-person-studiengang'>Wirtschaftsingenieurwesen (Master)</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        <Footer />
    </div>
  );
}

export default Team;
