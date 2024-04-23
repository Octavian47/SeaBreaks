import { Col, Container, Row } from 'react-bootstrap';
import servicesImg from '../assets/img/services.png';
const Features = () => {
  return <section className="features" id="app">
      <Container>
        <Row>
          <Col xs={12} md={10} lg={8} className="offset-md-1 offset-lg-2 text-center wow fadeIn" style={{
          visibility: 'visible',
          animationName: 'fadeIn'
        }}>
            <div className="heading-area d-inline-block">
              <h6 className="sub-title main-color">Towards Wind &amp; Waves</h6>
              <h2 className="title">We Serve Best</h2>
              <p className="paragraph">There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.
              </p></div>
          </Col>
        </Row>
        <Row className="align-items-center text-center">
          <Col lg={4} className="wow fadeInLeft mb-5 mb-lg-0" style={{
          visibility: 'visible',
          animationName: 'fadeInLeft'
        }}>
            <div className="app-feature">
              <i className="lni lni-book gradient-text1" />
              <h4 className="mb-3">Beginners Tuition</h4>
              <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
            </div>
            <div className="app-feature">
              <i className="lni lni-home gradient-text1" />
              <h4 className="mb-3">Accommodation</h4>
              <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
            </div>
          </Col>
          <Col lg={4} className="wow fadeInUp mb-5 mb-lg-0">
            <div className="app-image">
              <img src={servicesImg} alt="image" />
            </div>
          </Col>
          <Col lg={4} className="wow fadeInRight" style={{
          visibility: 'visible',
          animationName: 'fadeInRight'
        }}>
            <div className="app-feature">
              <i className="lni lni-direction gradient-text1" />
              <h4 className="mb-3">Location</h4>
              <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
            </div>
            <div className="app-feature">
              <i className="lni lni-drop gradient-text1" />
              <h4 className="mb-3">Windsurfing</h4>
              <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="ocean1">
        <div className="wave" />
        <div className="wave" />
      </div>
    </section>;
};
export default Features;