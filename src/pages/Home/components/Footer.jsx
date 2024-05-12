import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return <footer className="footer-style-1 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="footer-social text-lg-left">
              <ul className="list-unstyled">
                <li><a className="wow fadeInUp" href="https://www.facebook.com/seabreaks.luxury/"><i aria-hidden="true" className="fab fa-facebook-f" /></a></li>
                <li><a className="wow fadeInDown" href="https://www.tiktok.com/@sea.breaks?_t=8dRTGcr6dEx&_r=1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} /></a></li>
                <li><a className="wow fadeInUp" href="https://www.instagram.com/sea.breaks/?igshid=MzNlNGNkZWQ4Mg%3D%3D"><i aria-hidden="true" className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className=" text-lg-right">
            <p className="company-about fadeIn">© {new Date().getFullYear()} Sea-Breaks. Made By <a href="https://boostroomglobal.com/">Boostroom</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>;
};
export default Footer;

