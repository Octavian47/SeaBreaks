import { useEffect } from 'react';
import '@vendor/js/parallaxie.min.js';
import { Container, Row } from 'react-bootstrap';
const ReadMoreParallax = () => {
  useEffect(() => {
    const windowWidth = $(window).width();
    if (windowWidth && windowWidth > 992) {
      $(".parallax").parallaxie({
        speed: 0.55,
        offset: 0
      });
    }
  }, []);
  return <section className="parallax bg-img1">
      <div className="bg-overlay bg-main opacity-7" />
      <Container>
        <Row>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="heading-box">
              <h6>Enjoy The Diving</h6>
              <h1>The Most Advanced Sea, Diving</h1>
              <p>There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.</p>
              <a href="#" className="white-tran-black-btn">Read More</a>
            </div>
          </div>
        </Row>
      </Container>
    </section>;
};
export default ReadMoreParallax;