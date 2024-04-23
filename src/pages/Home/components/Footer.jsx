import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return <footer className="footer-style-1 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="footer-social text-lg-left">
              <ul className="list-unstyled">
                <li><a className="wow fadeInUp" href=""><i aria-hidden="true" className="fab fa-facebook-f" /></a></li>
                <li><a className="wow fadeInDown" href=""><i aria-hidden="true" className="fab fa-twitter" /></a></li>
                <li><a className="wow fadeInUp" href=""><i aria-hidden="true" className="fab fa-google-plus-g" /></a></li>
                <li><a className="wow fadeInDown" href=""><i aria-hidden="true" className="fab fa-linkedin-in" /></a></li>
                <li><a className="wow fadeInUp" href=""><i aria-hidden="true" className="fab fa-instagram" /></a></li>
                <li><a className="wow fadeInDown" href=""><i aria-hidden="true" className="fab fa-pinterest-p" /></a></li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className=" text-lg-right">
            <p className="company-about fadeIn">© {new Date().getFullYear()} MegaOne. Made With Love By <a href="">Coderthemes</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>;
};
export default Footer;