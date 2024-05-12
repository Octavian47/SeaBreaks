import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@vendor/js/parallaxie.min.js';
import { Container, Row } from 'react-bootstrap';

const ReadMoreParallax = () => {
  // For multiple languages
  const { t } = useTranslation();

  useEffect(() => {
    const windowWidth = $(window).width();
    if (windowWidth && windowWidth > 992) {
      $(".parallax").parallaxie({
        speed: 0.55,
        offset: 0
      });
    }
  }, []);

  return (
    <section className="parallax bg-img1">
      <div className="bg-overlay bg-main opacity-7" />
      <Container>
        <Row>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="heading-box">
              <h6>{t('readMore1')}</h6>
              <h1>{t('readMore2')}</h1>
              <p>{t('readMore3')}</p>
              <a href="#" className="white-tran-black-btn">{t('readMore4')}</a>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ReadMoreParallax;
