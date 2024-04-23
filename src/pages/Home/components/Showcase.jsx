import { useEffect } from 'react';
import workImg1 from '../assets/img/work-1.jpg';
import workImg2 from '../assets/img/work-2.jpg';
import workImg3 from '../assets/img/work-3.jpg';
import workImg4 from '../assets/img/work-4.jpg';
import workImg5 from '../assets/img/work-5.jpg';
import workImg6 from '../assets/img/work-6.jpg';
import '@vendor/css/owl.carousel.min.css';
import '@vendor/js/owl.carousel.min.js';
import { Col, Row } from 'react-bootstrap';
const Showcase = () => {
  useEffect(() => {
    $('.portfolio-items').owlCarousel({
      items: 4,
      autoplay: 1500,
      smartSpeed: 1500,
      autoplayHoverPause: true,
      slideBy: 1,
      loop: false,
      margin: 10,
      dots: false,
      nav: false,
      responsive: {
        1200: {
          items: 4
        },
        768: {
          items: 2
        },
        480: {
          items: 1
        },
        320: {
          items: 1
        }
      }
    });
  }, []);
  return <section className="portfolio-sec" id="portfolio-sec">

      <Row>
        <Col xs={12} md={12} lg={12} className="text-center wow fadeIn" style={{
        visibility: 'visible',
        animationName: 'fadeIn'
      }}>
          <div className="heading-area d-inline-block">
            <h6 className="sub-title main-color">OUR WORK</h6>
            <h2 className="title">SHOWCASES</h2>
            <p className="paragraph ml-auto mr-auto">There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.
            </p></div>
        </Col>
      </Row>

      <div className="portfolio-items owl-carousel owl-theme wow fadeIn">
        <div className="item">
          <a href="https://vimeo.com/155467649" data-fancybox="gallery" data-title="Showcases">
            <div className="port-img">
              <img src={workImg1} />
            </div>
            <div className="portfolio-overlay">
              <div className="overlay-inner-content">
                <i className="lni lni-play" />
                <span>play</span>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href={workImg2} data-fancybox="gallery" data-title="Showcases">
            <div className="port-img">
              <img src={workImg2} />
            </div>
            <div className="portfolio-overlay">
              <div className="overlay-inner-content">
                <i className="lni lni-plus" />
                <span>view</span>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href={workImg3} data-fancybox="gallery" data-title="Showcases">
            <div className="port-img">
              <img src={workImg3} />
            </div>
            <div className="portfolio-overlay">
              <div className="overlay-inner-content">
                <i className="lni lni-plus" />
                <span>view</span>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="https://vimeo.com/155467649" data-fancybox="gallery" data-title="Showcases">
            <div className="port-img">
              <img src={workImg4} />
            </div>
            <div className="portfolio-overlay">
              <div className="overlay-inner-content">
                <i className="lni lni-play" />
                <span>play</span>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href={workImg5} data-fancybox="gallery" data-title="Showcases">
            <div className="port-img">
              <img src={workImg5} />
            </div>
            <div className="portfolio-overlay">
              <div className="overlay-inner-content">
                <i className="lni lni-plus" />
                <span>view</span>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href={workImg6} data-fancybox="gallery" data-title="Showcases">
            <div className="port-img">
              <img src={workImg6} />
            </div>
            <div className="portfolio-overlay">
              <div className="overlay-inner-content">
                <i className="lni lni-plus" />
                <span>view</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>;
};
export default Showcase;