import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/LanguageModal.css';

import UK_Wavy from '../assets/img/Flags/United_KingdomWavy.png';
import Spain_Wavy from '../assets/img/Flags/Spain_Wavy.png';
import Germany_Wavy from '../assets/img/Flags/Germany_Wavy.png';
import France_Wavy from '../assets/img/Flags/France_Wavy.png';
import Italy_Wavy from '../assets/img/Flags/Italy_Wavy.png';

const LanguageModal = ({ isOpen, onClose, onSelectLanguage }) => {
  const languages = {
    en: { name: "English", flag: UK_Wavy },
    es: { name: "Spanish", flag: Spain_Wavy },
    de: { name: "German", flag: Germany_Wavy },
    fr: { name: "French", flag: France_Wavy },
    it: { name: "Italian", flag: Italy_Wavy }
  };

  return (
    <Modal className="language-modal" show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Select a Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="language-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {Object.entries(languages).map(([code, { flag, name }]) => (
            <li key={code} className="language-list-item" style={{ marginBottom: '10px' }}>
              <Button
                className="language-modal-button"
                onClick={() => onSelectLanguage(code)}
                style={{ display: 'flex', alignItems: 'center', width: '100%' }}
              >
                <img
                  src={flag}
                  alt={name + " flag"}
                  className="language-modal-flag"
                  style={{ marginRight: '10px' }}
                />
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageModal;
