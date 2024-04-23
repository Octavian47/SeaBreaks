import { Col, Row } from 'react-bootstrap';
import advertisement1 from '../assets/img/adver-sec-1.jpg';
import advertisement2 from '../assets/img/adver-sec-2.jpg';
import advertisement3 from '../assets/img/adver-sec-3.jpg';
import '@vendor/css/jquery.fancybox.min.css';
import '@vendor/js/jquery.fancybox.min.js';
const Advertisement = () => {
  return <section id="advertisement-sec" className="advertisement-sec">
      <Row className="no-gutters">
        <Col sm={12} md={4} lg={4}>
          <div className="video-box">
            <div className="bg-overlay bg-black opacity-1" />
            <img src={advertisement1} alt="Adver-sec 1" />
            <a data-fancybox href="https://vimeo.com/155467649" className="video-btn"><i className="lni lni-play" /></a>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="video-box">
            <div className="bg-overlay bg-black opacity-1" />
            <img src={advertisement2} alt="Adver-sec 2" />
            <a data-fancybox href="https://vimeo.com/155467649" className="video-btn"><i className="lni lni-play" /></a>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="video-box">
            <div className="bg-overlay bg-black opacity-1" />
            <img src={advertisement3} alt="Adver-sec 3" />
            <a data-fancybox href="https://vimeo.com/155467649" className="video-btn"><i className="lni lni-play" /></a>
          </div>
        </Col>
      </Row>
    </section>;
};
export default Advertisement;