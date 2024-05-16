import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ContactUsForm = () => {
  // For multiple languages
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  // To track the type of message (success or error)
  const [messageType, setMessageType] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Form submitted');

    const formData = new FormData(e.target);

    console.log('Form data:', formData);

    axios.post('https://react.sea-breaks.com/Email/send_email.php', formData)
      .then(response => {
        console.log('Response from server:', response);
        if (response.data.status === 'success') {
          setMessage('Message sent successfully!');
          setMessageType('success');
        } else {
          setMessage('Failed to send the message: ' + response.data.message);
          setMessageType('error');
        }
      })
      .catch(error => {
        console.error('There was an error sending the email!', error);
        setMessage('Failed to send the message, please try again.');
        setMessageType('error');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <div className="heading-area mx-570 pb-5">
              <h6 className="sub-title main-color">{t('contact1')}</h6>
              <h2 className="title m-0">{t('contact2')}</h2>
            </div>
          </Col>
        </Row>
        <form className="contact-form" id="contact-form-data" onSubmit={handleSubmit}>
          <Row>
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
              <button type="submit" className="btn btn-large btn-purple mt-4 contact_btn">Contact Now</button>
            </Col>
            <Col sm={12} id="result">
              {message && <p className={`email-message ${messageType}`}>{message}</p>}
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
};

export default ContactUsForm;
