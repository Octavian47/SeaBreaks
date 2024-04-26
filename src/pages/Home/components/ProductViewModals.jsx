import {useEffect, useState} from "react";
import expressProduct from "../assets/img/model-windows/classic-product.jpg";
import modalWindowImg2 from "../assets/img/model-windows/modal-img-2.png";
import classicproduct from "../assets/img/model-windows/classic-product.jpg";
import classicproductsub1 from "../assets/img/model-windows/classicproductsub1.jpg";
import classicproductsub2 from "../assets/img/model-windows/classicproductsub2.jpg";
import classicproductsub3 from "../assets/img/model-windows/classicproductsub3.jpg";
import classicproductsub4 from "../assets/img/model-windows/classicproductsub4.jpg";
import expressProductSub1 from "../assets/img/model-windows/classicproductsub1.jpg";
import expressProductSub2 from "../assets/img/model-windows/classicproductsub2.jpg";
import expressProductSub3 from "../assets/img/model-windows/classicproductsub3.jpg";
import expressProductSub4 from "../assets/img/model-windows/classicproductsub4.jpg"
import shortProductSub1 from "../assets/img/model-windows/classicproductsub1.jpg";
import shortProductSub2 from "../assets/img/model-windows/classicproductsub2.jpg";
import shortProductSub3 from "../assets/img/model-windows/classicproductsub3.jpg";
import shortProductSub4 from "../assets/img/model-windows/classicproductsub4.jpg";
import customProductSub1 from "../assets/img/model-windows/classicproductsub1.jpg";
import customProductSub2 from "../assets/img/model-windows/classicproductsub2.jpg";
import customProductSub3 from "../assets/img/model-windows/classicproductsub3.jpg";
import customProductSub4 from "../assets/img/model-windows/classicproductsub4.jpg";
import customSeaBreak from "../assets/img/model-windows/customseabreak.jpg";

import modalWindowImg5 from "../assets/img/model-windows/modal-img-5.png";
import modalWindowImg6 from "../assets/img/model-windows/modal-img-6.png";
import expressBrochure from "../assets/pdf/Express-Sea-Breaks-Brochure.pdf";
import classicBrochure from "../assets/pdf/Classic-Sea-Breaks-Brochure.pdf";
import modalWindowMod1Sub1 from '../assets/img/model-windows/modal1-sub1.png';
import modalWindowMod1Sub3 from '../assets/img/model-windows/modal1-sub3.png';
import modalWindowMod2Sub1 from '../assets/img/model-windows/modal2-sub1.png';
import modalWindowMod2Sub2 from '../assets/img/model-windows/modal2-sub2.png';
import modalWindowMod2Sub3 from '../assets/img/model-windows/modal2-sub3.png';
import modalWindowMod3Sub1 from '../assets/img/model-windows/modal3-sub1.png';
import modalWindowMod3Sub2 from '../assets/img/model-windows/modal3-sub2.png';
import modalWindowMod4Sub1 from '../assets/img/model-windows/modal4-sub1.png';
import modalWindowMod4Sub2 from '../assets/img/model-windows/modal4-sub2.png';
import modalWindowMod4Sub3 from '../assets/img/model-windows/modal4-sub3.png';
import modalWindowMod5Sub1 from '../assets/img/model-windows/modal5-sub1.png';
import modalWindowMod5Sub2 from '../assets/img/model-windows/modal5-sub2.png';
import modalWindowMod6Sub1 from '../assets/img/model-windows/modal6-sub1.png';
import modalWindowMod6Sub3 from '../assets/img/model-windows/modal6-sub3.png';
import "../assets/css/model-window.css";
import { Col, Container, Row, Form, Button} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const ProductViewModals = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) =>{
    setSelectedDate(date);
  }
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [activityOption, setActivityOption] = useState(null);

  const activityChange = (event) => {
    setActivityOption(event.target.value);
  };
  const [timeOption, setTimeOption] = useState(null);

  const [getYacht, setYacht] = useState('Compact Yacht');
  const [getPrice, setPrice] = useState('1150');
  const [getDiscountDropDown, setDiscountDropDown] = useState(false);
  const [getOptionDiscount, setOptionDiscount] = useState('');
  const [getDiscount, setDiscount] = useState(0);


  const timeChange = (event) => {
    setTimeOption(event.target.value);
  };
  const [premiumYachtChecked, setPremiumYachtChecked] = useState(false);
  const [photographerChecked, setPhotographerChecked] = useState(false);

  const handlePremiumYachtChange = (event) => {
    setPremiumYachtChecked(event.target.checked);
  };

  const handlePhotographerChange = (event) => {
    setPhotographerChecked(event.target.checked);
  };

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      location: 'Select Location',
      message: ''
    });

    const handleFormChange = e => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = e => {
      e.preventDefault();
      // You can handle form submission here, like sending data to a server or printing it
      console.log(formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: 'Select Location',
        message: ''
      });
    }

    const hanleYacht = (e) => {
      let price = e.target[e.target.selectedIndex].getAttribute('data-price');
      setPrice(price)
      setYacht(e.target.value)
      if(e.target.value !== 'Compact Yacht'){
        setDiscountDropDown(true)
      }
      else{
        setDiscountDropDown(false)
        setDiscount(0)
        setOptionDiscount('')
      }
  }

  const selectDiscount = (e) => {
      setOptionDiscount(e.target.value)
      let dis = (getPrice/100)*e.target.value;
      setDiscount(dis)
  }

  //Prev_window
  function prevWindow(x) {
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
      $(".loader").fadeOut(800);
    }, 1000);
    setTimeout(function () {
      $("#" + x).addClass("modal-view").fadeIn(800);
    }, 800);
    setTimeout(function () {
      $(".loader").removeClass('load');
    }, 800);
  }

  //Next_window
  function nextWindow(x) {
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
      $(".loader").fadeOut(800);
    }, 1000);
    setTimeout(function () {
      $("#" + x).addClass("modal-view").fadeIn(800);
    }, 800);
    setTimeout(function () {
      $(".loader").removeClass('load');
    }, 800);
  }
  function numberInputCounter() {
    $(document).ready(function () {
      $('.minus').click(function () {
        const $input = $(this).parent().find('input');
        let count = parseInt($input.val() ?? "") - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.plus').click(function () {
        const $input = $(this).parent().find('input');
        $input.val(parseInt($input.val() ?? "") + 1);
        $input.change();
        return false;
      });
      $('.size__item>h6').css('opacity', '0.4');
      $('.size__item>h6').on('click', function () {
        $('.size__item>h6').css('opacity', '0.4');
        $(this).css('opacity', '1');
      });
    });
  }

  // Function to close the modal
  const handleClose = () => {
    $('.close-modal').on('click', function() {
      $(this).closest('.modal-window').fadeOut(300, function() {
        $(this).removeClass('modal-view');
        $('body').removeClass('body-overlay');
      });
    });
  };


  useEffect(() => {
    numberInputCounter();
    handleClose();
  }, []);
  return <div id="data-modal">

      <div className="modal-window" id="morphic-window1">
        <div className="modal-body">
          <header>
            <span className="close-modal"><i /><i /></span>
          </header>
          <div className="morphic-body">
            <Container>
              <Row className="main-morphic-body ">
                <Col xs={12} md={12} className="morphic-img">
                  <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails"
                       data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={expressProduct} alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={classicproduct} alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg6} alt="Third slide"/>
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={expressProductSub1} alt="First slide"/>
                      </li>
                      <li data-target="#carousel-thumb" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={expressProductSub2} alt="Second slide"/>
                      </li>
                      <li data-target="#carousel-thumb" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={expressProductSub3} alt="Third slide"/>
                      </li>
                      <li data-target="#carousel-thumb" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={expressProductSub4} alt="Forth slide"/>
                      </li>
                    </ol>
                  </div>
                  <div className="product-description">
                    <strong>DESCRIPTION</strong>
                    <p> Embark on a 5-hour nautical excursion from Ibiza to Formentera, the perfect escape to break free from urban life. Your journey begins with a seamless pick-up and transport to our luxury yacht. As we set sail, indulge in a light breakfast and soak in the tranquility of the Mediterranean.
                    </p>
                    <div className="product-inner-detail">
                    <strong>Our itinerary includes:</strong>
                    <ul>
                      <li>A scenic cruise from Ibiza to the serene shores of Formentera.</li>
                      <li>Water activities: Dive into the clear blue waters for some snorkeling, feel the thrill with Jet Skiing, or soar above the waves while Parasailing.</li>
                      <li>A stop at a secluded cove where you can disconnect and bask in nature’s beauty.</li>
                      <li>Savor a lunch of fresh, locally-sourced seafood prepared on board, offering a true taste of the Mediterranean.
                      </li>
                    </ul>
                 <p>This 6-hour journey is more than just a boat ride; it’s an opportunity to disconnect from the rush of daily life and immerse yourself in the simple pleasures of sea, sun, and relaxation. We’ll conclude with a leisurely cruise back to Ibiza, leaving you rejuvenated and carrying memories of an idyllic day spent at sea.

                 </p>

                    <strong className="download-brochure"><a style={{color: "#d1b36f"}}
                               href={expressBrochure}
                               target="_blank"
                               rel="noopener">Download Brochure</a></strong></div>
                  </div>
                </Col>
                <Col xs={12} md={12} className="morphic-title">
                  <h3>EXPRESS SEA BREAK: 5H</h3>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">*CHOOSE CHECK-IN DATE</h6>
                      </div>
                      <div className="color-picker text-center text-md-left">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="MM/dd/yyyy"
                            className="black-text-datepicker"
                            minDate={new Date()}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">*SELECT YACHT CAPACITY</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select value={selectedOption} onChange={handleChange} required>
                          <option value="">Select Size</option>
                          <option value="Compact Yacht - Up to 2 Guests: €1150 / £980">Compact Yacht - Up to 2 Guests:
                            €1150 / £980
                          </option>
                          <option value="Regular Yacht – Up to 4 Guests: €1350 / £1155">Regular Yacht – Up to 4 Guests:
                            €1350 / £1155
                          </option>
                          <option value="Large Yacht – Up to 8 Guests: €1750 / £1500">Large Yacht – Up to 8 Guests:
                            €1750 / £1500
                          </option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">CHOOSE ACTIVITY - INCLUDED</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select value={activityOption} onChange={activityChange} required>
                          <option value="">Select Activity</option>
                          <option value="Scuba Diving">Scuba Diving
                          </option>
                          <option value="Parasailing">Parasailing
                          </option>
                          <option value="Jet Ski">Jet Ski
                          </option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Start Time</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select onChange={timeChange} required>
                          <option value="">Select Time</option>
                          <option value="Any Time">Any Time
                          </option>
                          <option value="1st Part of the Day">1st Part of the Day
                          </option>
                          <option value="2nd Part of the Day">2nd Part of the Day
                          </option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">ADDITIONAL AMENITIES</h6>
                      </div>
                      <div className="select-opacity text-center text-md-left">
                        <label>
                          <input
                              type="checkbox"
                              checked={premiumYachtChecked}
                              onChange={handlePremiumYachtChange}
                          />
                          Premium Yacht: €650 / £555
                        </label>

                      </div>
                    </Col>
                  </Row>
                  <Row className="model-bottom">
                    <Col xs={12} className="price-modal"><h1>$220.00</h1></Col>
                    <Col xs={12} className="modal-btn"><a target="_blank" href="https://www.amazon.com/"
                                                          className="btn btn-medium btn-rounded btn-trans text-capitalize">Procceed</a></Col>
                  </Row>
                </Col>
              </Row>

              <Row className="justify-content-end arrows">
              <div className="d-none d-md-block left-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => prevWindow('morphic-window6')}><i className="fa fa-angle-left" /></a>
                </div>
                <div className="d-none d-md-block right-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => nextWindow('morphic-window2')}><i className="fa fa-angle-right" /></a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <div className="modal-window" id="morphic-window2">
        <div className="modal-body">
          <header>
            <span className="close-modal"><i/><i/></span>
          </header>
          <div className="morphic-body">
            <Container>
              <div className="row main-morphic-body ">
                <Col xs={12} md={12} className="morphic-img">

                  <div id="carousel-thumb3" className="carousel slide carousel-fade carousel-thumbnails"
                       data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={classicproduct} alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg5} alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg2} alt="Third slide"/>
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb3" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={shortProductSub1} alt="First slide"/>
                      </li>
                      <li data-target="#carousel-thumb3" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={shortProductSub2} alt="Second slide"/>
                      </li>
                      <li data-target="#carousel-thumb3" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={shortProductSub3} alt="Third slide"/>
                      </li>
                      <li data-target="#carousel-thumb4" data-slide-to={3}>
                        <img className="d-block w-100 img-fluid" src={shortProductSub4} alt="Forth slide"/>
                      </li>
                    </ol>
                  </div>
                  <div className="product-description">
                    <strong>DESCRIPTION</strong>
                    <p> Embark on a full-day maritime journey from Ibiza to Formentera, an ideal retreat from the hustle
                      of city life. Your adventure starts with convenient transportation to our luxury yacht. As we set
                      sail, enjoy a freshly prepared breakfast and embrace the calm of the open sea.
                    </p>
                    <div className="product-inner-detail"><strong>Our full-day itinerary includes:</strong>
                      <ul>
                      <li>A leisurely cruise to Formentera, gliding through the picturesque Mediterranean waters.</li>
                      <li>Engage in a variety of water sports: Try snorkeling in crystal-clear coves, experience the
                        adrenaline of Jet Skiing, or take to the skies with Parasailing.
                      </li>
                      <li>Visit exclusive spots around Formentera, perfect for relaxation and soaking up the sun.</li>
                      <li>Lunch on board, featuring a sumptuous spread of the freshest seafood and local delicacies,
                        capturing the essence of the region’s flavors.
                      </li>
                      <li>Time to explore Formentera: Stroll along the pristine beaches, visit quaint villages, or
                        simply unwind on the yacht’s deck.
                      </li>
                      <li>Late afternoon activities: Choose from a relaxed swim in tranquil waters or further
                        exploration of hidden bays.
                      </li>
                      <li>As the day winds down, enjoy a sunset cocktail followed by a delightful dinner under the
                        stars, celebrating the day’s adventures.
                      </li>
                    </ul>
                    <p>We return to Ibiza as night falls, bringing to a close a day filled with luxury, relaxation, and
                      unforgettable moments. This all-day excursion is more than a trip; it’s a chance to truly
                      disconnect and immerse yourself in the joy and serenity of life at sea.

                    </p>
                    <strong className="download-brochure"><a style={{color: "#d1b36f"}}
                               href={expressBrochure}
                               target="_blank"
                                                             rel="noopener">Download Brochure</a></strong></div>
                  </div>
                </Col>
                <Col xs={12} md={12} className="morphic-title">
                  <h3>Short Sea Break: 1 Day</h3>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">*CHOOSE CHECK-IN DATE</h6>
                      </div>
                      <div className="color-picker text-center text-md-left">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="MM/dd/yyyy"
                            className="black-text-datepicker"
                            minDate={new Date()}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">*SELECT YACHT CAPACITY</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select value={selectedOption} onChange={handleChange} required>
                          <option value="">Select Size</option>
                          <option value="Compact Yacht – Up to 2 Guests: €1650 / £1410">Compact Yacht – Up to 2 Guests:
                            €1650 / £1410
                          </option>
                          <option value="Regular Yacht – Up to 4 Guests: €1950 / £1670">Regular Yacht – Up to 4 Guests:
                            €1950 / £1670
                          </option>
                          <option value="Large Yacht – Up to 8 Guests: €2250/ £1925">Large Yacht – Up to 8 Guests:
                            €2250/ £1925
                          </option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">CHOOSE ACTIVITY - INCLUDED</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select value={activityOption} onChange={activityChange} required>
                          <option value="">Select Activity</option>
                          <option value="Scuba Diving">Scuba Diving
                          </option>
                          <option value="Parasailing">Parasailing
                          </option>
                          <option value="Jet Ski">Jet Ski
                          </option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">ADDITIONAL AMENITIES</h6>
                      </div>
                      <div className="select-opacity text-center text-md-left">
                        <label>
                          <input
                              type="checkbox"
                              checked={premiumYachtChecked}
                              onChange={handlePremiumYachtChange}
                          />
                          Premium Yacht: €750 / £640
                        </label>

                      </div>
                    </Col>
                  </Row>
                  <Row className="model-bottom">
                    <Col xs={12} className="price-modal"><h1>$220.00</h1></Col>
                    <Col xs={12} className="modal-btn"><a target="_blank" href="https://www.amazon.com/"
                                                          className="btn btn-medium btn-rounded btn-trans text-capitalize">Buy
                      Now</a></Col>
                  </Row>
                </Col>
              </div>

              <Row className="justify-content-end arrows">
                <div className="d-none d-md-block left-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => prevWindow('morphic-window2')}><i
                      className="fa fa-angle-left"/></a>
                </div>
                <div className="d-none d-md-block right-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => nextWindow('morphic-window4')}><i
                      className="fa fa-angle-right"/></a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>


    <div className="modal-window" id="morphic-window3">
      <div className="modal-body">
        <header>
          <span className="close-modal"><i/><i/></span>
        </header>
        <div className="morphic-body">
          <Container>
            <div className="row main-morphic-body ">
              <Col xs={12} md={12} className="morphic-img">

                <div id="carousel-thumb3" className="carousel slide carousel-fade carousel-thumbnails"
                     data-ride="carousel">

                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={classicproduct} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={modalWindowImg5} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={modalWindowImg2} alt="Third slide"/>
                    </div>
                  </div>

                  <ol className="carousel-indicators">
                    <li data-target="#carousel-thumb3" data-slide-to={0} className="active">
                      <img className="d-block w-100 img-fluid" src={classicproductsub1} alt="First slide"/>
                    </li>
                    <li data-target="#carousel-thumb3" data-slide-to={1}>
                      <img className="d-block w-100 img-fluid" src={classicproductsub2} alt="Second slide"/>
                    </li>
                    <li data-target="#carousel-thumb3" data-slide-to={2}>
                      <img className="d-block w-100 img-fluid" src={classicproductsub3} alt="Third slide"/>
                    </li>
                    <li data-target="#carousel-thumb4" data-slide-to={3}>
                      <img className="d-block w-100 img-fluid" src={classicproductsub4} alt="Third slide"/>
                    </li>
                  </ol>
                </div>
                <div className="product-description">
                  <strong>DESCRIPTION</strong>
                  <p> Embark on a two-day yachting retreat, beginning with pick-up and transfer to the yacht, where
                    you’ll spend a tranquil night.</p>
                  <div className="product-inner-detail">
                    <strong>Day 1:</strong>
                    <ul>
                    <li>Enjoy breakfast on board.</li>
                    <li>Set sail around Ibiza and Formentera.</li>
                    <li>Have lunch onboard, then choose activities like snorkeling, Jet Skiing, or Parasailing.</li>
                    <li>Dinner and champagne in the evening, followed by the ‘Sleep In’ experience on the yacht.</li>
                  </ul>
                  <strong>Day 2:</strong>
                  <ul>
                    <li>Wake up to breakfast on the yacht.</li>
                    <li>Spend the morning exploring Formentera’s beaches.</li>
                    <li>Lunch as we cruise back to Ibiza.</li>
                    <li>Disembark in the afternoon, rejuvenated from the journey.</li>
                    Cap off this retreat with the unique ‘Sleep In’ experience, ensuring a perfect blend of serenity
                    and exploration.
                  </ul>
                  <strong className="download-brochure"><a style={{color: "#d1b36f"}}
                             href={classicBrochure}
                             target="_blank"
                                                           rel="noopener">Download Brochure</a></strong></div>
                </div>
              </Col>
              <Col xs={12} md={12} className="morphic-title">
                <h3>Classic Sea Break: 2 Days</h3>
                <Row className="pb-md-4">
                  <Col xs={12}>
                    <div className="color-selection">
                      <h6 className="text-center text-md-left">*CHOOSE CHECK-IN DATE</h6>
                    </div>
                    <div className="color-picker text-center text-md-left">
                      <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="MM/dd/yyyy"
                          className="black-text-datepicker"
                          minDate={new Date()}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="pb-md-4">
                  <Col xs={12}>
                    <div className="color-selection">
                      <h6 className="text-center text-md-left">*SELECT YACHT CAPACITY</h6>
                    </div>
                    <div className="color-picker select-opacity text-center text-md-left">
                      <select value={getYacht} name={'yacht_size'} onChange={hanleYacht} required>
                        <option value="">Select Size</option>
                        <option value="Compact Yacht"
                                data-text={"Compact Yacht – Up to 2 Guests: €1150 / £980"}
                                data-price={'1150'}>Compact Yacht – Up to 2 Guests: €1150 / £980
                        </option>
                        <option value="Regular Yacht"
                                data-text={"Regular Yacht – Up to 4 Guests: €1350 / £1155"}
                                data-price={'1350'}>Regular Yacht – Up to 4 Guests: €1350 / £1155
                        </option>
                        <option value="Large Yacht"
                                data-text={"Large Yacht – Up to 8 Guests: €1750 / £1500"}
                                data-price={'1750'}>Large Yacht – Up to 8 Guests: €1750 / £1500
                        </option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className={`pb-md-4 ${(getDiscountDropDown)?'':'d-none'}`}>
                  <Col xs={12}>
                    <div className="color-selection">
                      {getDiscountDropDown}
                      <h6 className="text-center text-md-left">ADD DISCOUNT FOR BOOKINGS UNDER 4 PASSENGERS</h6>
                    </div>
                    <div className="color-picker select-opacity text-center text-md-left">
                      <select value={getOptionDiscount} name={'discount'} onChange={selectDiscount}>
                        <option value="">Select Number of Passengers
                        </option>
                        <option value="15">1 Passenger: -15% Discount
                        </option>
                        <option value="10">2 Passengers: -10% Discount
                        </option>
                        <option  value="5">3 Passengers: -5% Discount
                        </option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="pb-md-4">
                  <Col xs={12}>
                    <div className="color-selection">
                      <h6 className="text-center text-md-left">CHOOSE ACTIVITY - INCLUDED</h6>
                    </div>
                    <div className="color-picker select-opacity text-center text-md-left">
                      <select name={'yacht_activity'} onChange={activityChange} required>
                        <option value="">Select Activity</option>
                        <option value="Scuba Diving">Scuba Diving</option>
                        <option value="Parasailing">Parasailing</option>
                        <option value="Jet Ski">Jet Ski</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="pb-md-4">
                  <Col xs={12}>
                    <div className="color-selection">
                      <h6 className="text-center text-md-left">START TIME</h6>
                    </div>
                    <div className="color-picker select-opacity text-center text-md-left">
                      <select name={'yacht_time'} required>
                        <option value="">Any Time</option>
                        <option value="1st Part of the Day">1st Part of the Day
                        </option>
                        <option value="2nd Part of the Day">2nd Part of the Day
                        </option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row className="pb-md-4">
                  <Col xs={12}>
                    <div className="color-selection">
                      <h6 className="text-center text-md-left">ADDITIONAL AMENITIES</h6>
                    </div>
                    <div className="select-opacity text-center text-md-left">
                      <label>
                        <input
                            type="checkbox"
                            checked={premiumYachtChecked}
                            onChange={handlePremiumYachtChange}
                            value={'2020'}
                        />
                        Premium Yacht – 550USD / 2020AED
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="model-bottom">
                  <Col xs={12} className="price-modal"><h1>€{getPrice-getDiscount}</h1></Col>
                  <Col xs={12} className="modal-btn">
                    <a href="#" className="btn btn-medium btn-rounded btn-trans text-capitalize">PROCEED</a></Col>
                </Row>
              </Col>
            </div>
            </Container>
          </div>
        </div>
      </div>


      <div className="modal-window" id="morphic-window4">
        <div className="modal-body">
          <header>
            <span className="close-modal"><i /><i /></span>
          </header>
          <div className="morphic-body">
            <Container>
              <Row className="main-morphic-body ">
                <Col xs={12} md={12} className="morphic-img">

                  <div id="carousel-thumb4" className="carousel slide carousel-fade carousel-thumbnails"
                       data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={customSeaBreak} alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg2} alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg6} alt="Third slide"/>
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb4" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={customProductSub1} alt="First slide"/>
                      </li>
                      <li data-target="#carousel-thumb4" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={customProductSub2} alt="Second slide"/>
                      </li>
                      <li data-target="#carousel-thumb4" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={customProductSub3} alt="Third slide"/>
                      </li>
                      <li data-target="#carousel-thumb4" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={customProductSub4} alt="Forth slide"/>
                      </li>
                    </ol>
                  </div>
                  <div className="product-description">
                    <strong>INDULGE IN GOURMET SEAFOOD, EXPLORE NATURE’S WONDERS, AND CUSTOMIZE YOUR YACHT DREAM VOYAGE
                    </strong>
                    <p> Our Custom Sea Break Package in Ibiza offers a fully personalized yachting adventure, where we craft an initial proposal tailored to your preferences, but you’re completely free to customize it further.
                    </p>
                    <div className="product-inner-detail">
                      <div className="production-detail">
                        <div className="inner-section">
                          <h4>ALL INCLUSIVE PACK</h4>
                          <h5>BASE PRICE FOR A DAY: STARTING AT €400 / £340 PER PERSON
                          </h5>
                          <strong className="download-brochure"><a style={{color: "#d1b36f"}}
                                                                   href={classicBrochure}
                                                                   target="_blank"
                                                                   rel="noopener">Download Brochure</a></strong>
                          <p>*DISCOUNT FOR BOOKINGS WITH FEWER THAN 8 PASSANGERS
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                </Col>
                <Col xs={12} md={12} className="morphic-title">
                  <h3>Custom Sea Breaks</h3>

                  <Row className="pb-md-4">

                    <Col xs={12} md={12} className="d-flex align-items-start">
                      <form className="custom-break-form" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="name">Your Name</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleFormChange}
                              required
                          />
                        </div>
                        <div>
                          <label htmlFor="email">Your Email</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleFormChange}
                              required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone">Phone</label>
                          <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleFormChange}
                              required
                          />
                        </div>
                        <div>
                          <label htmlFor="location">Locations</label>
                          <select
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleFormChange}
                              required
                          >
                            <option disabled>Select Location</option>
                            <option value="Marina Ibiza">Marina Ibiza</option>
                            <option value="Sant Antonio">Sant Antonio</option>
                            <option value="Sant Eulalia">Sant Eulalia</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message">Message</label>
                          <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleFormChange}
                              required
                          />
                        </div>
                        <button className="btn btn-medium btn-rounded btn-trans text-capitalize" type="submit">Submit</button>
                      </form>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="justify-content-end arrows">
                <div className="d-none d-md-block left-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => prevWindow('morphic-window3')}><i className="fa fa-angle-left" /></a>
                </div>
                <div className="d-none d-md-block right-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => nextWindow('morphic-window5')}><i className="fa fa-angle-right" /></a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductViewModals;
