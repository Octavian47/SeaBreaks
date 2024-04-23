import { useEffect } from 'react';
import testimonialImg1 from '../assets/img/test1.jpg';
import testimonialImg2 from '../assets/img/test2.jpg';
import testimonialImg3 from '../assets/img/test3.jpg';
import testimonialImg4 from '../assets/img/test4.jpg';
import teamImg1 from '../assets/img/team1.jpg';
import '@vendor/css/owl.carousel.min.css';
import '@vendor/js/owl.carousel.min.js';
import { Col, Container, Row } from 'react-bootstrap';
const Testimonials = () => {
  useEffect(() => {
    $("#testimonial-slider").owlCarousel({
      items: 2,
      autoplay: 1500,
      smartSpeed: 1500,
      autoplayHoverPause: true,
      slideBy: 1,
      loop: true,
      margin: 0,
      dots: true,
      nav: false,
      responsive: {
        1200: {
          items: 2
        },
        768: {
          items: 2
        },
        480: {
          items: 1,
          autoplay: false
        },
        320: {
          items: 1,
          autoplay: false
        }
      }
    });
  }, []);
  return <section className="testimonial-sec" id="testimonial-sec">
      <Container>

        <Row>
          <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 text-center wow fadeIn" style={{
          visibility: 'visible',
          animationName: 'fadeIn'
        }}>
            <div className="heading-area d-inline-block">
              <h6 className="sub-title main-color">Our valuable customer </h6>
              <h2 className="title">testimonial</h2>
              <p className="paragraph">There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.
              </p></div>
          </div>
        </Row>

        <Row>
          <Col md={12}>
            <div id="testimonial-slider" className="owl-carousel owl-theme wow fadeIn">
              <div className="testimonial">
                <div className="pic">
                  <img src={testimonialImg1} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolorum earum fugiat, fugit hic id, ipsum laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">Kristina-</h3>
                  <span className="post">Customer</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src={testimonialImg2} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolorum earum fugiat, fugit hic id, ipsum laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">williamson-</h3>
                  <span className="post">Customer</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src={testimonialImg3} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolorum earum fugiat, fugit hic id, ipsum laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">Steve Thomas-</h3>
                  <span className="post">Customer</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src={testimonialImg4} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolorum earum fugiat, fugit hic id, ipsum laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">Alan Mark-</h3>
                  <span className="post">Customer</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="pic">
                  <img src={teamImg1} />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolorum earum fugiat, fugit hic id, ipsum laborum minus nostrum numquam perspiciatis saepe velit.
                </p>
                <div className="testimonial-profile">
                  <h3 className="title">Steve Thomas-</h3>
                  <span className="post">Trainer</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Testimonials;