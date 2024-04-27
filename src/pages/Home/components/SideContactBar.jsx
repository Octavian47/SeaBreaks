import React, { useState } from 'react';
import '../assets/css/SideContactBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';

// Importing the flag images
import UK_Round from '../assets/img/Flags/United_Kingdom_Round.png';
import Spain_Round from '../assets/img/Flags/Spain_Round.png';
import Italy_Round from '../assets/img/Flags/Italy_Round.png';
import Germany_Round from '../assets/img/Flags/Germany_Round.png';
import France_Round from '../assets/img/Flags/France_Round.png';

import UK_Wavy from '../assets/img/Flags/United_KingdomWavy.png';
import Spain_Wavy from '../assets/img/Flags/Spain_Wavy.png';
import Italy_Wavy from '../assets/img/Flags/Italy_Wavy.png';
import Germany_Wavy from '../assets/img/Flags/Germany_Wavy.png';
import France_Wavy from '../assets/img/Flags/France_Wavy.png';


import { faPhone, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const SideContactBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

  const languages = {
    en: { name: "English", flagRound: UK_Round, flagWavy: UK_Wavy },
    es: { name: "Spanish", flagRound: Spain_Round, flagWavy: Spain_Wavy },
    de: { name: "German", flagRound: Germany_Round, flagWavy: Germany_Wavy },
    fr: { name: "French", flagRound: France_Round, flagWavy: France_Wavy },
    it: { name: "Italian", flagRound: Italy_Round, flagWavy: Italy_Wavy }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (code, event) => {
    event.stopPropagation();
    setSelectedLanguage(code);
    setDropdownOpen(false); 
  };

  return (
    <div className="side-contact-bar">
      <a href="https://api.whatsapp.com/send?phone=447709809267" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.facebook.com/seabreaks.luxury/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/sea.breaks/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.tiktok.com/@sea.breaks?_t=8dRTGcr6dEx&_r=1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <div className="flag-dropdown" onClick={toggleDropdown}>
        <img src={languages[selectedLanguage].flagRound} alt="Selected language" />
        <div className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
          {Object.entries(languages).map(([code, { flagWavy, name }]) => (
            <div key={code} onClick={(event) => selectLanguage(code, event)}>
              <img src={flagWavy} alt={name} /> {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideContactBar;
