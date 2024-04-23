import { Col, Container, Row } from 'react-bootstrap';
import standaloneImg1 from '../assets/img/standalone-img1.jpg';
import standaloneImg2 from '../assets/img/standalone-img2.jpg';
import standaloneImg3 from '../assets/img/standalone-img3.jpg';
const StandaloneContent = () => {
  return <section className="main" id="main">
      <div className="blog-content">
        <Container>
          <Row className="no-gutters">
            <Col xs={12}>
              <div className="standalone-detail">
                <Row className="no-gutters">
                  <Col xs={12} md={10} className="offset-md-1 col-lg-8 offset-lg-2  text-center wow slideInUp" data-wow-duration="2s">
                    <p className="sub-heading text-center">Most flexible one page</p>
                    <h1 className="heading">SECTION TITLE</h1>
                    <p className="para_text m-auto">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
                  </Col>
                </Row>
              </div>
              <div className="standalone-area">
                <Row className="standalone-row align-items-center no-gutters">
                  <Col lg={6}>
                    <div className="blog-image wow hover-effect fadeInLeft">
                      <img src={standaloneImg1} alt="image" />
                    </div>
                  </Col>
                  <Col lg={6} className="stand-img-des">
                    <div className="d-inline-block">
                      <p className="sub-heading text-center">Most flexible one page</p>
                      <h2 className="gradient-text1">STANDALONE HEADING</h2>
                      <p className="para_text">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. </p>
                    </div>
                  </Col>
                </Row>
                <Row className="standalone-row align-items-center no-gutters">
                  <Col lg={6} className="order-lg-2">
                    <div className="blog-image wow hover-effect fadeInRight">
                      <img src={standaloneImg2} alt="image" />
                    </div>
                  </Col>
                  <Col lg={6} className="stand-img-des">
                    <div className="d-inline-block">
                      <p className="sub-heading text-center">Most flexible one page</p>
                      <h2 className="gradient-text1">STANDALONE HEADING</h2>
                      <p className="para_text">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. </p>
                    </div>
                  </Col>
                </Row>
                <div className="row standalone-row align-items-center no-gutters">
                  <Col lg={6}>
                    <div className="blog-image wow hover-effect fadeInLeft">
                      <img src={standaloneImg3} alt="image" />
                    </div>
                  </Col>
                  <Col lg={6} className="stand-img-des">
                    <div className="d-inline-block">
                      <p className="sub-heading text-center">Most flexible one page</p>
                      <h2 className="gradient-text1">STANDALONE HEADING</h2>
                      <p className="para_text">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. </p>
                    </div>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>;
};
export default StandaloneContent;