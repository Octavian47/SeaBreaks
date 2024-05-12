import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import aboutUsImg from '../assets/img/about-us.png';

const AboutUs = () => {
  // For multiple languages
  const { t } = useTranslation();

  return (
    <section id="about-us" className="about-us">
      <Container>
        <Row className="dot-box">
          <Col lg={6} className="wow fadeInLeft">
            <div className="about-image">
              <img src={aboutUsImg} alt="about-img" />
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 wow fadeInRight">
            <div className="heading-area pl-lg-4 p-0">
              <h6 className="sub-title main-color">{t('aboutUs1')}</h6>
              <h2 className="title">{t('aboutUs2')}</h2>
              <p className="paragraph">{t('aboutUs3')}</p>
              <ul className="about-list">
                <li>
                  <i className="lni lni-chevron-right-circle a-icon" />
                  {t('aboutUs4')}
                </li>
                <li>
                  <i className="lni lni-chevron-right-circle a-icon" />
                  {t('aboutUs5')}
                </li>
                <li>
                  <i className="lni lni-chevron-right-circle a-icon" />
                  {t('aboutUs6')}
                </li>
                <li>
                  <i className="lni lni-chevron-right-circle a-icon" />
                  {t('aboutUs7')}
                </li>
                <li>
                  <i className="lni lni-chevron-right-circle a-icon" />
                  {t('aboutUs8')}
                </li>
                <li>
                  <i className="lni lni-chevron-right-circle a-icon" />
                  {t('aboutUs9')}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="ocean">
        <div className="wave" />
        <div className="wave" />
      </div>
    </section>
  );
};

export default AboutUs;
