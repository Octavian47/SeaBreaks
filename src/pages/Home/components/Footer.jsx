import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return <footer className="footer-style-1 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="footer-social text-lg-left">
              <ul className="list-unstyled">
                <li><a className="wow fadeInUp" href="https://www.facebook.com/seabreaks.luxury/"><i aria-hidden="true" className="fab fa-facebook-f" /></a></li>
                <li><a className="wow fadeInDown" href=""><i aria-hidden="true" className="fab fa-linkedin-in" /></a></li>
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