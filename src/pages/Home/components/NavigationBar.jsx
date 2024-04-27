import { useEffect,useState } from 'react';
//import logoWhite from '../assets/img/logo-white.png';
import logo from '../assets/img/sea-breaks-logo.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavigationBar = ({
  headerClassName
}) => {

  const [activeLink, setActiveLink] = useState('#slider-section'); // Default active link

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    setActiveLink(href); // Update the active link
    const offsetTop = document.querySelector(href)?.offsetTop;

    if (offsetTop) {
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };


  useEffect(() => {
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
  }, []);
  return <header className={headerClassName}>
      <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
        <Container>
          <Link to="/surfing" title="Logo" className="logo scroll">
            <img src={logo} alt="logo" className="logo-white" />
          </Link>
          <div className="collapse navbar-collapse" id="megaone">
            <div className="navbar-nav ml-auto">
              <a className={`nav-link scroll ${activeLink === '#slider-section' ? 'active' : ''}`}
                 href="#slider-section" onClick={handleNavLinkClick}>Home</a>
              <a className={`nav-link scroll ${activeLink === '#about-us' ? 'active' : ''}`}
                 href="#about-us" onClick={handleNavLinkClick}>About Us</a>
              <a className={`nav-link scroll ${activeLink === '#packages' ? 'active' : ''}`}
                 href="#packages" onClick={handleNavLinkClick}>Services</a>
              <a className={`nav-link scroll ${activeLink === '#team-section' ? 'active' : ''}`}
                 href="#team-section" onClick={handleNavLinkClick}>Yacht Gateways</a>
              <a className={`nav-link scroll ${activeLink === '#showcases' ? 'active' : ''}`}
                 href="#showcases" onClick={handleNavLinkClick}>Showcases</a>
              <a className={`nav-link scroll ${activeLink === '#reviews' ? 'active' : ''}`}
                 href="#reviews" onClick={handleNavLinkClick}>Reviews</a>
              <a className={`nav-link scroll ${activeLink === '#contact' ? 'active' : ''}`}
                 href="#contact" onClick={handleNavLinkClick}>Contact</a>
              <a className={`nav-link scroll ${activeLink === '#events' ? 'active' : ''}`}
                 href="#events" onClick={handleNavLinkClick}>Events</a>
            </div>
          </div>
          <Link to="" className="sidemenu_btn" id="sidemenu_toggle">
            <span />
            <span />
            <span />
          </Link>
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
    </header>;
};
export default NavigationBar;