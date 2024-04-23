import { useEffect } from 'react';
import clientImg1 from '../assets/img/client-1.png';
import clientImg2 from '../assets/img/client-2.png';
import clientImg3 from '../assets/img/client-3.png';
import clientImg4 from '../assets/img/client-4.png';
import '@vendor/css/owl.carousel.min.css';
import '@vendor/js/owl.carousel.min.js';
import { Container } from 'react-bootstrap';
const ClientsSlider = () => {
  useEffect(() => {
    $('.partners-slider').owlCarousel({
      items: 5,
      autoplay: 1500,
      smartSpeed: 1500,
      autoplayHoverPause: true,
      slideBy: 1,
      loop: true,
      margin: 30,
      dots: false,
      nav: false,
      responsive: {
        1200: {
          items: 5
        },
        768: {
          items: 3
        },
        480: {
          items: 2
        },
        320: {
          items: 1
        }
      }
    });
  }, []);
  return <section className="bg-light">
      <Container>
        <div className="owl-carousel partners-slider">
          <div className="logo-item"> <img alt="client-logo" src={clientImg1} /></div>
          <div className="logo-item"> <img alt="client-logo" src={clientImg2} /></div>
          <div className="logo-item"> <img alt="client-logo" src={clientImg3} /></div>
          <div className="logo-item"> <img alt="client-logo" src={clientImg4} /></div>
        </div>
      </Container>
    </section>;
};
export default ClientsSlider;