import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import servicesImg from '../assets/img/Services/services.png';

const Features = () => {
  // For multiple languages
  const { t } = useTranslation();

  return (
    <section className="features" id="app">
      <Container>
        <Row>
          <Col xs={12} md={10} lg={8} className="offset-md-1 offset-lg-2 text-center wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
            <div className="heading-area d-inline-block">
              <h6 className="sub-title main-color">{t('serives1')}</h6>
              <h2 className="title">{t('serives2')}</h2>
              <p className="paragraph">{t('serives3')}</p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center text-center">
          <Col lg={4} className="wow fadeInLeft mb-5 mb-lg-0" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
            <div className="app-feature">
              <i className="lni lni-book gradient-text1" />
              <h4 className="mb-3">{t('serives4')}</h4>
              <p>{t('serives5')}</p>
            </div>
            <div className="app-feature">
              <i className="lni lni-home gradient-text1" />
              <h4 className="mb-3">{t('serives6')}</h4>
              <p>{t('serives7')}</p>
            </div>
          </Col>
          <Col lg={4} className="wow fadeInUp mb-5 mb-lg-0">
            <div className="app-image">
              <img src={servicesImg} alt="image" />
            </div>
          </Col>
          <Col lg={4} className="wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
            <div className="app-feature">
              <i className="lni lni-direction gradient-text1" />
              <h4 className="mb-3">{t('serives8')}</h4>
              <p>{t('serives9')}</p>
            </div>
            <div className="app-feature">
              <i className="lni lni-drop gradient-text1" />
              <h4 className="mb-3">{t('serives10')}</h4>
              <p>{t('serives11')}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="ocean1">
        <div className="wave" />
        <div className="wave" />
      </div>
    </section>
  );
};

export default Features;
