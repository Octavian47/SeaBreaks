import { Col, Container, Row } from "react-bootstrap";
const ContactUsForm = () => {
  return <section id="contact">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <div className="heading-area mx-570 pb-5">
              <h6 className="sub-title main-color">For Support Contact Us</h6>
              <h2 className="title m-0">Let's Get In Touch</h2>
            </div>
          </Col>
        </Row>
        <form className="contact-form" id="contact-form-data">
          <Row>
            <Col sm={12} id="result" />
            <Col md={6} sm={6}>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="First Name:" required id="first_name" name="firstName" />
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Last Name:" required id="last_name" name="lastName" />
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Email:" required id="email" name="userEmail" />
              </div>
            </Col>
            <Col md={6} sm={6}>
              <div className="form-group">
                <input className="form-control" type="tel" placeholder="Phone:" id="phone" name="userPhone" />
              </div>
            </Col>
            <Col md={12} className="col-sm-12">
              <div className="form-group">
                <textarea className="form-control" placeholder="Message" id="message" name="userMessage" defaultValue={""} />
              </div>
            </Col>
            <Col sm={12}>
              <button type="button" className="btn btn-large btn-purple mt-4 contact_btn">Contact Now</button>
            </Col>
          </Row>
        </form>
      </Container>
    </section>;
};
export default ContactUsForm;