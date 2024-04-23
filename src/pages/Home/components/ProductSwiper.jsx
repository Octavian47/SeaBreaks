import { useEffect } from 'react';
import expressSeaBreak from '../assets/img/express-sea-break.jpeg';
import clasicSeaBreak from '../assets/img/clasic-sea-break.jpg';
import shortSeaBreak from '../assets/img/short-sea-break.jpg';
import customSeaBreak from '../assets/img/custom-sea-break.jpeg';
import "@vendor/css/owl.carousel.min.css";
import { Col, Container, Row } from 'react-bootstrap';
const ProductSwiper = () => {
  function morphicWindow(x) {
    openModal(x);
  }
  function openModal(x) {
    setTimeout(function () {
      $('#' + x).addClass("modal-view").fadeIn(800);
    }, 50);
    setTimeout(function () {
      $('body').addClass('show-modal').fadeIn(800);
    }, 50);
  }
  function owlCarousel() {
    $(".owl-products").owlCarousel({
      items: 5,
      dots: false,
      nav: false,
      loop: true,
      center: true,
      autoplay: true,
      autoplayHoverPause: true,
      slideSpeed: 3000,
      paginationSpeed: 5000,
      smartSpeed: 1000,
      responsive: {
        992: {
          items: 3
        },
        600: {
          items: 3
        },
        320: {
          items: 1
        },
        280: {
          items: 1
        }
      }
    });
    const owl = $('.owl-products');
    owl.owlCarousel();
    $('#team-circle-left').click(function () {
      owl.trigger('prev.owl.carousel');
    });
    $('#team-circle-right').click(function () {
      owl.trigger('next.owl.carousel');
    });
  }
  useEffect(() => {
    owlCarousel();
  }, []);
  return <section className="section slide2 all-products" id="all-products">
      <Container className="expand-container position-relative">
        <Row className="align-items-center mb-3 mb-md-5 section-heading">
          <Col xs={12} md={6} className="section2left wow" data-wow-delay=".8s">
            <h2 className="main-font"> <span className="d-block main-color">Our packages</span></h2>
          </Col>
          {/*<Col xs={12} md={6} className="section2right wow" data-wow-delay=".8s">
            <div className="row my-4 my-md-0">

              <Col xs={12} md={4}>
                <div className="parallax-box text-grey">
                  <h2 className="count">456</h2>
                  <h5>Shoes Delivered</h5>
                </div>
              </Col>

              <Col xs={12} md={4}>
                <div className="parallax-box text-grey">
                  <h2 className="count">560</h2>
                  <h5>New Articles</h5>
                </div>
              </Col>

              <Col xs={12} md={4}>
                <div className="parallax-box text-grey">
                  <h2 className="count">786</h2>
                  <h5>Happy Customers</h5>
                </div>
              </Col>
            </div>
          </Col>  */}
        </Row>
        <Row className="products-fade wow" data-wow-delay=".8s">
          <div className="owl-products owl-carousel owl-theme wow fadeInUp">

            <div className="team-box item">

              <div className="team-image">
                <img src={expressSeaBreak} alt="image" />
              </div>

              <div className="team-text">
                <h5 className="main-font">EXPRESS SEA BREAK: 5H</h5>
                <a onClick={() => morphicWindow('morphic-window1')} className="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">Book Now</a>
              </div>
            </div>

            <div className="team-box item">

              <div className="team-image">
                <img src={shortSeaBreak} alt="image" />
              </div>

              <div className="team-text">
                <h5 className="main-font">SHORT SEA BREAK: 1 DAY</h5>
                <a onClick={() => morphicWindow('morphic-window2')} className="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">Book Now</a>
              </div>
            </div>

            <div className="team-box item">

              <div className="team-image">
                <img src={clasicSeaBreak} alt="image" />
              </div>

              <div className="team-text">
                <h5 className="main-font">CLASSIC SEA BREAK: 2 DAYS</h5>
                <a onClick={() => morphicWindow('morphic-window3')} className="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">Book Now</a>
              </div>
            </div>

            <div className="team-box item">

              <div className="team-image">
                <img src={customSeaBreak} alt="image" />
              </div>

              <div className="team-text">
                <h5 className="main-font">CUSTOM SEA BREAK</h5>
                <a onClick={() => morphicWindow('morphic-window4')} className="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">Book Now</a>
              </div>
            </div>
          </div>
        </Row>

        <a className="circle" id="team-circle-left"><i className="lni lni-chevron-left" /></a>
        <a className="circle" id="team-circle-right"><i className="lni lni-chevron-right" /></a>
      </Container>
    </section>;
};
export default ProductSwiper;