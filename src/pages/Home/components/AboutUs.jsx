import { Col, Container, Row } from 'react-bootstrap';
import aboutUsImg from '../assets/img/about-us.png';
const AboutUs = () => {
  return <section id="about-us" className="about-us">
      <Container>
        <Row className="dot-box">
          <Col lg={6} className="wow fadeInLeft">
            <div className="about-image">
              <img src={aboutUsImg} alt="about-img" />
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 wow fadeInRight">
            <div className="heading-area pl-lg-4 p-0">
              <h6 className="sub-title main-color">Basic info about us</h6>
              <h2 className="title">ABOUT US</h2>
              <p className="paragraph">There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.
              </p><ul className="about-list">
                <li><i className="lni lni-chevron-right-circle a-icon" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li><i className="lni lni-chevron-right-circle a-icon" /> Morbi ornare nibh id cursus vestibulum.</li>
                <li><i className="lni lni-chevron-right-circle a-icon" /> Duis vitae lectus facilisis, tristique lorem sit amet males.</li>
                <li><i className="lni lni-chevron-right-circle a-icon" /> It is a long established fact that a distracted</li>
                <li><i className="lni lni-chevron-right-circle a-icon" /> Morbi ornare nibh id cursus vestibulum.</li>
                <li><i className="lni lni-chevron-right-circle a-icon" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="ocean">
        <div className="wave" />
        <div className="wave" />
      </div>
    </section>;
};
export default AboutUs;