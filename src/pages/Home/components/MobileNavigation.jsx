import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/MobileNavigation.css';
import logo from '../assets/img/sea-breaks-logo.png';
import LanguageModal from './LanguageModal';

// First, import the flag images
import UK_Round from '../assets/img/Flags/United_Kingdom_Round.png';
import Spain_Round from '../assets/img/Flags/Spain_Round.png';
import Italy_Round from '../assets/img/Flags/Italy_Round.png';
import Germany_Round from '../assets/img/Flags/Germany_Round.png';
import France_Round from '../assets/img/Flags/France_Round.png';


const MobileNavigationBar = ({ headerClassName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = {
    en: { name: "English", flag: UK_Round },
    es: { name: "Spanish", flag: Spain_Round },
    de: { name: "German", flag: Germany_Round },
    fr: { name: "French", flag: France_Round },
    it: { name: "Italian", flag: Italy_Round }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    handleCloseModal();
  };

  const handleScroll = () => {
    const offset = window.pageYOffset;
    setIsScrolled(offset > 260);
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    $('.side-menu').removeClass('hidden');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();
      if (scrollTop && scrollTop > 260) {
        $('header').addClass('header-appear');
      } else {
        $('header').removeClass('header-appear');
      }
    });
    $(".scroll").on("click", function (event) {
      event.preventDefault();
      const offset = $(window.location.hash).offset();
      if (offset) {
        $("html,body").animate({
          scrollTop: offset.top - 60
        }, 1200);
      }
    });
    if ($("#sidemenu_toggle").length) {
      $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700);
      }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
      }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
      }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled ? `${headerClassName} header-appear` : headerClassName;

  return (
    <header className={headerClass}>
      <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
        <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">       
            <Link to="" className="sidemenu_btn" id="sidemenu_toggle" >
              <span />
              <span />
              <span />
            </Link>
          </div>

          <Link to="/" title="Logo" className="mx-auto">
            <img src={logo} alt="logo" className="logo-white" style={{ width: 'auto', marginLeft: '13px' }} />
          </Link>

          <div className="language-select-menu">
            <button onClick={handleOpenModal} className="btn btn-link" style={{paddingRight: '0px'}} >
              {/* Use an img tag to display the selected flag */}
              <img src={languages[selectedLanguage].flag} alt="Selected Language" />
            </button>
          </div>
        </Container>
        
      </nav>
      <div className="side-menu hidden">
        <div className="inner-wrapper">
          <span className="btn-close" id="btn_sideNavClose"><i /><i /></span>
          <nav className="side-nav w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link scroll" href="" onClick={handleNavLinkClick}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#about-us" onClick={handleNavLinkClick}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#packages" onClick={handleNavLinkClick}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#team-section" onClick={handleNavLinkClick}>Yacht Gateways</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#showcases" onClick={handleNavLinkClick}>Showcases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#reviews" onClick={handleNavLinkClick}>Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#contact" onClick={handleNavLinkClick}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#contact" onClick={handleNavLinkClick}>Events</a>
              </li>
            </ul>
          </nav>
          <div className="side-footer w-100">
            <ul className="social-icons-simple">
              <li><a className="facebook-text-hvr" href=""><i className="fab fa-facebook-f" /> </a> </li>
              <li><a className="instagram-text-hvr" href=""><i className="fab fa-instagram" /> </a> </li>
              <li><a className="twitter-text-hvr" href=""><i className="fab fa-twitter" /> </a> </li>
            </ul>
            <p>© {new Date().getFullYear()} Sea Breaks</p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="" />
      <LanguageModal 
          isOpen={modalOpen} 
          onClose={handleCloseModal} 
          onSelectLanguage={handleSelectLanguage} 
      />
    </header>
  );
};

export default MobileNavigationBar;