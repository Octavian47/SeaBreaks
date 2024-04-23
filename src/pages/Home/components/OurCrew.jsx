import { useEffect } from 'react';
import teamImg1 from '../assets/img/team1.jpg';
import teamImg2 from '../assets/img/team2.jpg';
import teamImg3 from '../assets/img/team3.jpg';
import teamImg4 from '../assets/img/team4.jpg';
import '@vendor/css/owl.carousel.min.css';
import '@vendor/js/owl.carousel.min.js';
import { Card, Col, Container, Row } from 'react-bootstrap';
const OurCrew = () => {
  useEffect(() => {
    $('.team-carousel').owlCarousel({
      items: 5,
      autoplay: 1500,
      smartSpeed: 1500,
      autoplayHoverPause: true,
      slideBy: 1,
      loop: false,
      margin: 30,
      dots: false,
      nav: false,
      responsive: {
        1200: {
          items: 3
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
  return <section className="team-section" id="team-section">
      <Container>

        <Row>
          <Col xs={12} md={10} lg={8} className="offset-md-1 offset-lg-2 text-center wow fadeIn" style={{
          visibility: 'visible',
          animationName: 'fadeIn'
        }}>
            <div className="heading-area d-inline-block">
              <h6 className="sub-title main-color">Towards the Sea</h6>
              <h2 className="title">Our Crew</h2>
              <p className="paragraph">There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.
              </p></div>
          </Col>
        </Row>

        <div className="team-carousel owl-carousel owl-theme wow fadeIn">

          <div className="item mb-lg-0 mb-4">

            <div className="card-wrapper">
              <Card id="card-1" className="card-rotating text-center">
                <div className="face front">

                  <div className="avat-image-team">
                    <img src={teamImg1} alt="First sample avatar image" />
                  </div>
                </div>
                <div className="face back">

                  <Card.Body className="p-0">
                    <h4 className="font-weight-bold mt-4 mb-2">
                      <strong>Mark Alex</strong>
                    </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta.
                      Blanditiis rem amet repellat.
                    </p>
                    <hr />

                    <ul className="list-inline list-unstyled team-ul">
                      <li className="list-inline-item">
                        <a href="" className="p-2 fa-lg fb-ic">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" className="p-2 fa-lg pin-ic">
                          <i className="fab fa-pinterest"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" className="p-2 fa-lg ins-ic">
                          <i className="fab fa-instagram"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" className="p-2 fa-lg tw-ic">
                          <i className="fab fa-twitter"> </i>
                        </a>
                      </li>
                    </ul>
                  </Card.Body>
                </div>

              </Card>
            </div>

          </div>

          <div className="item mb-lg-0 mb-4">

            <div className="card-wrapper">
              <Card id="card-2" className="card-rotating text-center">
                <div className="face front">

                  <div className="avat-image-team">
                    <img src={teamImg2} alt="First sample avatar image" />
                  </div>
                </div>
                <div className="face back">

                  <Card.Body className="p-0">
                    <h4 className="font-weight-bold mt-4 mb-2">
                      <strong>maria jose</strong>
                    </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta.
                      Blanditiis rem amet repellat.
                    </p>
                    <hr />

                    <ul className="list-inline list-unstyled team-ul">
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg fb-ic">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg pin-ic">
                          <i className="fab fa-pinterest"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg ins-ic">
                          <i className="fab fa-instagram"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg tw-ic">
                          <i className="fab fa-twitter"> </i>
                        </a>
                      </li>
                    </ul>
                  </Card.Body>
                </div>

              </Card>
            </div>

          </div>


          <div className="item mb-lg-0 mb-4">

            <div className="card-wrapper">
              <Card id="card-4" className="card-rotating text-center">
                <div className="face front">

                  <div className="avat-image-team">
                    <img src={teamImg3} alt="First sample avatar image" />
                  </div>
                </div>
                <div className="face back">

                  <Card.Body className="p-0">
                    <h4 className="font-weight-bold mt-4 mb-2">
                      <strong>Williamson</strong>
                    </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta.
                      Blanditiis rem amet repellat.
                    </p>
                    <hr />

                    <ul className="list-inline list-unstyled team-ul">
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg fb-ic">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg pin-ic">
                          <i className="fab fa-pinterest"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg ins-ic">
                          <i className="fab fa-instagram"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg tw-ic">
                          <i className="fab fa-twitter"> </i>
                        </a>
                      </li>
                    </ul>
                  </Card.Body>
                </div>

              </Card>
            </div>

          </div>


          <div className="item mb-lg-0 mb-4">

            <div className="card-wrapper">
              <Card id="card-5" className="card-rotating text-center">
                <div className="face front">

                  <div className="avat-image-team">
                    <img src={teamImg4} alt="First sample avatar image" />
                  </div>
                </div>
                <div className="face back">

                  <Card.Body className="p-0">
                    <h4 className="font-weight-bold mt-4 mb-2">
                      <strong>bella vita</strong>
                    </h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta.
                      Blanditiis rem amet repellat.
                    </p>
                    <hr />

                    <ul className="list-inline list-unstyled team-ul">
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg fb-ic">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg pin-ic">
                          <i className="fab fa-pinterest"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg ins-ic">
                          <i className="fab fa-instagram"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg tw-ic">
                          <i className="fab fa-twitter"> </i>
                        </a>
                      </li>
                    </ul>
                  </Card.Body>
                </div>

              </Card>
            </div>

          </div>

        </div>

      </Container>
    </section>;
};
export default OurCrew;