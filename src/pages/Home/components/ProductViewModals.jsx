import {useEffect, useState} from "react";
import expressProduct from "../assets/img/model-windows/classic-product.jpg";
import modalWindowImg2 from "../assets/img/model-windows/modal-img-2.png";
import classicproduct from "../assets/img/model-windows/classic-product.jpg";
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
import "../assets/css/model-window.css";
import { Col, Container, Row, Form, Button} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

let discoun_passengers = {
  'compact': [
      {'passenger': 1, 'discount': 15},
      {'passenger': 2, 'discount': 10},
      {'passenger': 3,'discount': 5},
      {'passenger': 4,'discount': 0}
  ],
  'regular': [
      {'passenger': 5, 'discount': 15},
      {'passenger': 6, 'discount': 10},
      {'passenger': 7,'discount': 5},
      {'passenger': 8,'discount': 0}
  ],
  'large': [
      {'passenger': 9, 'discount': 15},
      {'passenger': 10, 'discount': 10},
      {'passenger': 11,'discount': 5},
      {'passenger': 12,'discount': 0}
  ]
};
const ProductViewModals = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const handleDateChange = (date) =>{
    setSelectedDate(date);
    setDatePickerOpen(false)
  }
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [activityOption, setActivityOption] = useState('');

  const activityChange = (event) => {
    setActivityOption(event.target.value);
  };
  const [timeOption, setTimeOption] = useState('');

  const [getYacht, setYacht] = useState('');
  const [getPrice, setPrice] = useState('');
  const [getDiscountDropDown, setDiscountDropDown] = useState(false);
  const [getGuest, setGuest] = useState('');
  const [getDiscount, setDiscount] = useState(0);

  const timeChange = (event) => {
    setTimeOption(event.target.value);
    $("select[name='yacht_time']").removeClass('error');
  };
  const [premiumYachtChecked, setPremiumYachtChecked] = useState(false);
  const [getpremiumYacht, setPremiumYacht] = useState(0);
  const [photographerChecked, setPhotographerChecked] = useState(false);

  const handlePremiumYachtChange = (event) => {
    setPremiumYachtChecked(event.target.checked);
    if(event.target.checked){
      setPremiumYacht(event.target.value);
    }
    else{
      setPremiumYacht(0);
    }
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
      setGuest('')
      $("select[name='yacht_size']").removeClass('error');
      $("select[name='yacht_size']").next('span').hide();
      if(e.target.value  !== ''){
        setDiscountDropDown(true)
      }
      else{
        setDiscountDropDown(false)
        setDiscount(0)
        setGuest('')
      }
  }

  const selectDiscount = (e) => {
    let discount = e.target[e.target.selectedIndex].getAttribute('data-discount');
    setGuest(e.target.value)
      let dis = (getPrice/100)*discount;
      $("select[name='discount']").removeClass('error')
      $("select[name='discount']").next('span').hide();
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
      $('.modal-window').fadeOut(100, function() {
        $(this).removeClass('modal-view');
        $('body').removeClass('body-overlay');
    });
  };
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(getYacht == ''){
      $("select[name='yacht_size']").addClass('error').focus();
      $("select[name='yacht_size']").next('span').show();
      return false;
    }
    else if(getYacht && getGuest == ''){
      $("select[name='discount']").addClass('error').focus();
      $("select[name='discount']").next('span').show();
      return false;
    }
    else{
      let yacht_capacity = { 'compact': 4, 'regular': 8, 'large': 12};
      let data = {
        'name' : $("input[name='name']").val(),
        'yacht': getYacht,
        'date': selectedDate,
        'price': Number(getPrice),
        'total_price': (Number(getPrice)+Number(getpremiumYacht))-getDiscount,
        'capacity': yacht_capacity[getYacht],
        'guest': getGuest,
        'premium_yacht': premiumYachtChecked,
        'activity' : activityOption,
        'duration' : $("input[name='duration']").val(),
        'time' : timeOption,
        'apply_coupon': false,
        'coupon_code': '',
        'catering': [],
        'extra': []
      }
      localStorage.setItem("cart", JSON.stringify(data));
      navigate('/checkout')

    }
  }
  useEffect(() => {
    setYacht('')
    setDiscountDropDown(false)
    numberInputCounter();
  }, []);
  return <div id="data-modal">

    <div className="modal-window" id="morphic-window3">
      <div className="modal-body">
        <header>
          <span className="close-modal" onClick={handleClose}><i/><i/></span>
        </header>
        <div className="morphic-body">
          <Container>
            <div className="row main-morphic-body ">
              <Col xs={12} md={12} className="morphic-img">
                <div className="products owl-carousel owl-theme">
                  <div className="item active">
                    <img className="d-block w-100" src={classicproduct} alt="First slide"/>
                  </div>
                  <div className="item">
                    <img className="d-block w-100" src={modalWindowImg5} alt="Second slide"/>
                  </div>
                  <div className="item">
                    <img className="d-block w-100" src={modalWindowImg2} alt="Third slide"/>
                  </div>
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
                                                             target="_blank" rel="noopener">Download Brochure</a></strong></div>
                </div>
              </Col>
              <Col xs={12} md={12} className="morphic-title">
                <h3 className={'product-name'}>Classic Sea Break: 2 Days</h3>
                <Row className="pb-md-4">
                  <Col className={'position-relative'} xs={12}>
                    <div className="color-selection">
                      <h6 className="text-center text-md-left">*CHOOSE CHECK-IN DATE</h6>
                    </div>
                    <div className="datepicket-handler" onClick={() => setDatePickerOpen(!datePickerOpen)}></div>
                    <DatePicker
                        selected={selectedDate}
                        readOnly={true}
                        onChange={handleDateChange}
                        onClickOutside={() => setDatePickerOpen(false)}
                        open={datePickerOpen}
                        minDate={new Date()}
                        className="black-text-datepicker"
                    />
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
                          <option value="compact"
                                  data-text={"Compact Yacht – Up to 4 Guests: €1150 / £980"}
                                  data-price={'1150'}>Compact Yacht – Up to 4 Guests: €1150 / £980
                          </option>
                          <option value="regular"
                                  data-text={"Regular Yacht – Up to 8 Guests: €1350 / £1155"}
                                  data-price={'1350'}>Regular Yacht – Up to 8 Guests: €1350 / £1155
                          </option>
                          <option value="large"
                                  data-text={"Large Yacht – Up to 12 Guests: €1750 / £1500"}
                                  data-price={'1750'}>Large Yacht – Up to 12 Guests: €1750 / £1500
                          </option>
                        </select>
                        <span className={'mandatory'}>please complete the mandatory fields</span>
                      </div>
                    </Col>
                  </Row>
                <Row className={`pb-md-4 discount-dropdown ${(getDiscountDropDown) ? '' : 'd-none'}`}>
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">*ADD DISCOUNT FOR BOOKINGS UNDER 4 PASSENGERS</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select value={getGuest} name={'discount'} onChange={selectDiscount} required>
                          <option value="">Select Number of Passengers</option>
                          {
                              (getYacht) &&  discoun_passengers[getYacht].map((value, index)  =>
                              <option key={index} value={value.passenger} data-discount={value.discount}>{value.passenger} Passenger {(value.discount)?`: -${value.discount}'% Discount`:''}</option>
                            )
                          }
                        </select>
                        <span className={'mandatory'}>please complete the mandatory fields</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-md-4">
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">CHOOSE ACTIVITY - INCLUDED</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select name={'yacht_activity'} onChange={activityChange}>
                          <option value="">Select Activity</option>
                          <option value="Scuba Diving">Scuba Diving</option>
                          <option value="Parasailing">Parasailing</option>
                          <option value="Jet Ski">Jet Ski</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row className={`pb-md-4 express-time`} style={{Display:'none'}}>
                    <Col xs={12}>
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">START TIME</h6>
                      </div>
                      <div className="color-picker select-opacity text-center text-md-left">
                        <select name={'yacht_time'} onChange={timeChange}>
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
                    <Col xs={12} className="price-modal">
                      <input type={'hidden'} name={'name'}/>
                      <input type={'hidden'} name={'duration'}/>
                      <input type={'hidden'} name={'length'}/>
                      <input type={'hidden'} name={'capacity'}/>
                      <h1>€{(Number(getPrice) + Number(getpremiumYacht)) - getDiscount}</h1>
                    </Col>
                    <Col xs={12} className="modal-btn">
                      <button type={"button"}  onClick={onSubmitHandler}
                              className="btn btn-medium btn-rounded btn-trans text-capitalize">PROCEED
                      </button>
                    </Col>
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
            <span className="close-modal" onClick={handleClose}><i /><i /></span>
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
