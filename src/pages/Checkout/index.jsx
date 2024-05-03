import { toggleDocumentAttribute } from '@/utils';
import { useEffect, useState } from 'react';
import WOW from 'wow.js';
import Preloader from '../Home/components/Preloader';
import MobileNavigation from '../Home/components/MobileNavigation';
import NavigationBar from '../Home/components/NavigationBar';
import LocationCarousel from '../Home/components/LocationCarousel';
import HeroSlider from '../Home/components/HeroSlider';
import ContactUsForm from '../Home/components/ContactUsForm';
import Footer from '../Home/components/Footer';
import BackToTop from '../Home/components/BackToTop';
import '@vendor/css/LineIcons.min.css';
import '../Home/assets/css/style.css';
import '../Home/assets/css/navigation.css';
import {Col, Container, Row} from "react-bootstrap";
import expressProduct from "@/pages/Home/assets/img/model-windows/classic-product.jpg";
import classicproduct from "@/pages/Home/assets/img/model-windows/classic-product.jpg";
import modalWindowImg6 from "@/pages/Home/assets/img/model-windows/modal-img-6.png";
import paymentMethod from "@/pages/Home/assets/img/payment-img.png";
import paymentValet from "@/pages/Home/assets/img/payment-valet.png";
import SideContactBar from "@/pages/Home/components/SideContactBar";
import {useLocation} from "react-router-dom";
import moment from "moment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import '@/pages/Home/assets/css/style.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NMGCzGFJGDu2WV4FCa58ZKE2bhROOhEnSkUjVX8Rt8givG80t7NDJjZ2MbZljY7iMnxJUnacVecP10BgvV8Dxoz00uk4kPDaF');

const Checkout = () => {
    const location = useLocation()
    let price = (location.state)?location.state.price:0;
    let date = (location.state)?moment(location.state.date).format("DD-MM-YYYY"):'';
    if(price == 0){
       window.history.back();
    }
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [selectedTime, setSelectedTime] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputAdult, setInputAdult] = useState('');
    const [inputChild, setInputChild] = useState('');
    const [inputDep, setInputDep] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [isBbqChecked, setIsBbqChecked] = useState(false);
    const [isBreakfastChecked, setIsBreakfastChecked] = useState(false);
    const [isHotDogsChecked, setIsHotDogsChecked] = useState(false);
    const [isVeggieChecked, setIsVeggieChecked] = useState(false);
    const [isWrapsChecked, setIsWrapsChecked] = useState(false);
    const [isElectricBoardChecked, setElectricBoardChecked] = useState(false);
    const [isSeaBobChecked, setSeaBobChecked] = useState(false);
    const [isWakeBoardChecked, setWakeBoardChecked] = useState(false);
    const [isBananaBoatChecked, setBananaBoatChecked] = useState(false);
    const [isJetSKIChecked, setJetSKIChecked] = useState(false);
    const [isSkyWalkerChecked, setSkyWalkerChecked] = useState(false);
    const [isSeaToyChecked, setSeaToyChecked] = useState(false);
    const [isWaterSlideChecked, setWaterSlideChecked] = useState(false);
    const [isRockShadeChecked, setRockShadeChecked] = useState(false);
    const [isBreezeIslandChecked, setBreezeIslandChecked] = useState(false);
    const [isLazyKubeChecked, setLazyKubeChecked] = useState(false);
    const [isRapidQuadChecked, setRapidQuadChecked] = useState(false);
    const [getCatering, setCatering] = useState(0);
    const [getExtra, setExtra] = useState(0);
  const handleResize = () => {
    const isMobileNow = window.innerWidth < 768;
    setIsMobile(isMobileNow);
  };
    let [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
    const width = $(window).width();
    if (width && width > 767) {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      }).init();
    }
    toggleDocumentAttribute('data-spy', 'scroll', 'body');
    toggleDocumentAttribute('data-target', '.navbar', 'body');
    toggleDocumentAttribute('data-offset', '90', 'body');

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
      setIsBbqChecked(false);
      setIsBreakfastChecked(false);
      setIsHotDogsChecked(false);
      setIsVeggieChecked(false);
      setIsWrapsChecked(false);
      setElectricBoardChecked(false);
      setSeaBobChecked(false);
      setWakeBoardChecked(false);
      setBananaBoatChecked(false);
      setJetSKIChecked(false);
      setSkyWalkerChecked(false);
      setSeaToyChecked(false);
      setWaterSlideChecked(false);
      setRockShadeChecked(false);
      setBreezeIslandChecked(false);
      setLazyKubeChecked(false);
      setRapidQuadChecked(false);
      setCatering(0);
      setExtra(0);
        // Create PaymentIntent as soon as the page loads
        getStripSecret(price);
        return () => {
            window.removeEventListener('resize', handleResize);
            toggleDocumentAttribute('data-spy', 'scroll', 'body', true);
            toggleDocumentAttribute('data-target', '.navbar', 'body', true);
            toggleDocumentAttribute('data-offset', '90', 'body', true);
        };
  }, []);

    const getStripSecret = async (amount) => {
        setClientSecret('')
        const response = await fetch('http://localhost:4242/secret?price='+amount);
        let {client_secret: secret} = await response.json();
        setClientSecret(secret)
    }

    // Event handler to update the input value when it changes
    const handleInput = (event) => {
        setInputValue(event.target.value);
    };
    const handleFullName = (event) => {
        setInputName(event.target.value);
    };
    const handlePhone = (event) => {
        setInputPhone(event.target.value);
    };
    const handleEmail = (event) => {
        setInputEmail(event.target.value);
    };
    const handleAdult = (event) => {
        setInputAdult(event.target.value);
    };
    const handleChild = (event) => {
        setInputChild(event.target.value);
    };
    const handleDeparture = (event) => {
        setInputDep(event.target.value);
    };

    // Event handler to update the selected time
    const handleTime = (time) => {
        setSelectedTime(time);
    };

    const calCatering = (event) => {
        let amount = 0;
        if(event.target.checked){
            amount = Number(getCatering)+Number(event.target.value);
            setCatering(amount);
        }
        else{
            amount = Number(getCatering)-Number(event.target.value);
            setCatering(amount);
        }
        getStripSecret(price+amount+getExtra);
    };

    const calExtra = (event) => {
        let amount = 0;
        if(event.target.checked){
            amount = Number(getExtra)+Number(event.target.value);
            setExtra(amount);
        }
        else{
            amount = Number(getExtra)-Number(event.target.value);
            setExtra(amount);
        }
        getStripSecret(price+amount+getCatering);
    }

    const handleBBQChange = (event) => {
        setIsBbqChecked(!isBbqChecked);
        calCatering(event)
    };
    const handleBreakfastChange = (event) => {
        setIsBreakfastChecked(!isBreakfastChecked);
        calCatering(event)
    };
    const handleHotDogChange = (event) => {
        setIsHotDogsChecked(!isHotDogsChecked);
        calCatering(event)
    };
    const handleVeggieChange = (event) => {
        setIsVeggieChecked(!isVeggieChecked);
        calCatering(event)
    };
    const handleWrapsChange = (event) => {
        setIsWrapsChecked(!isWrapsChecked);
        calCatering(event)
    };
    const handleElectricBoard = (event) => {
        setElectricBoardChecked(!isElectricBoardChecked);
        calExtra(event);
    };
    const handleSeaBobChange = (event) => {
        setSeaBobChecked(!isSeaBobChecked);
        calExtra(event);
    };
    const handleWakeBoardChange = (event) => {
        setWakeBoardChecked(!isWakeBoardChecked);
        calExtra(event);
    };
    const handleBananaBoatChange = (event) => {
        setBananaBoatChecked(!isBananaBoatChecked);
        calExtra(event);
    };
    const handleJetSKIChange = (event) => {
        setJetSKIChecked(!isJetSKIChecked);
        calExtra(event);
    };
    const handleSkyWalkerChange = (event) => {
        setSkyWalkerChecked(!isSkyWalkerChecked);
        calExtra(event);
    };
    const handleSeaToy = (event) => {
        setSeaToyChecked(!isSeaToyChecked);
        calExtra(event);
    };
    const handleWaterSlideChange = (event) => {
        setWaterSlideChecked(!isWaterSlideChecked);
        calExtra(event);
    };
    const handleRockShadeChange = (event) => {
        setRockShadeChecked(!isRockShadeChecked);
        calExtra(event);

    };
    const handleBreezeIslandChange = (event) => {
        setBreezeIslandChecked(!isBreezeIslandChecked);
        calExtra(event);
    };
    const handleLazyKubeChange = (event) => {
        setLazyKubeChecked(!isLazyKubeChecked);
        calExtra(event);
    };
    const handleRapidQuadChange = (event) => {
        setRapidQuadChecked(!isRapidQuadChecked);
        calExtra(event);
    };
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
      <Preloader />
      {isMobile ? <MobileNavigation /> : <NavigationBar />}
      <LocationCarousel />

      <HeroSlider />
      <div id="checkout">
          <Container>
              <Row className="main-morphic-body detail-page ">
                  <Col xs={12} md={12} className="morphic-img">
                      <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails"
                           data-ride="carousel">
                          <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active text-center">
                                  <img src={expressProduct} alt="First slide"/>
                              </div>
                              <div className="carousel-item">
                                  <img className="d-block w-100" src={classicproduct} alt="Second slide"/>
                              </div>
                              <div className="carousel-item">
                                  <img className="d-block w-100" src={modalWindowImg6} alt="Third slide"/>
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col xs={12} md={12} className="morphic-title">
                      <h3>CLASSIC SEA BREAK: 2 DAYS</h3>
                      <Row className="pb-md-4">
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Departure Date</h6>
                              </div>
                              <div className="color-picker date-picker text-center text-md-left">
                                  <input
                                      type={'text'}
                                      value={date}
                                      readOnly={true}
                                  />
                              </div>
                          </Col>
                      </Row>

                      <Row className="pb-md-4">
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Duration</h6>
                              </div>
                              <div className="color-picker select-duration text-center text-md-left">
                                  <input
                                      type="text"
                                      value={selectedTime}
                                      onChange={handleTime}
                                      placeholder=""
                                  />
                              </div>
                          </Col>
                      </Row>
                      <Row className="pb-md-4">
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Departure Point</h6>
                              </div>
                              <div className="color-picker departure-point text-center text-md-left">
                                  <input
                                      type="text"
                                      value={inputDep}
                                      onChange={handleDeparture}
                                      placeholder="Enter Location..."
                                  />
                              </div>
                          </Col>
                      </Row>
                      <Row className="pb-md-4">
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Adult/Childs</h6>
                              </div>
                              <div className="color-picker passenger-detail text-center text-md-left">
                                  <div className="passenger-detail">
                                      <input
                                          type="number"
                                          value={inputAdult}
                                          onChange={handleAdult}
                                      />
                                      <input
                                          type="number"
                                          value={inputChild}
                                          onChange={handleChild}
                                      />
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Row className="menu-divider">
                          <Col xs={12}>
                              <div className="divider"><span>ON BOARD CATERING</span>
                              </div>
                          </Col>
                      </Row>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Col xs={12}>
                          <Row className="menu-list">
                              <div className="menu-title">
                                  <ul>
                                      <li>Menus</li>
                                      <li>Details</li>
                                      <li>Price</li>
                                      <li> Quantity</li>
                                  </ul>
                              </div>
                          </Row>

                      </Col>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Col xs={12}>
                          <Row>
                              <div className="menu-list-detail">
                                  <ul>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isBbqChecked}
                                                      onChange={handleBBQChange}
                                                      value={'180'}
                                                  />
                                                  <div>BBQ</div>
                                              </div>
                                              <div>Live BBQ</div>
                                              <div className="price">AED 180pp</div>
                                              <div>5</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isBreakfastChecked}
                                                      onChange={handleBreakfastChange}
                                                      value={'75'}
                                                  />
                                                  <div>Breakfast</div>
                                              </div>
                                              <div>Breakfast</div>
                                              <div className="price">AED 75pp</div>
                                              <div>5</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isHotDogsChecked}
                                                      onChange={handleHotDogChange}
                                                      value={'95'}
                                                  />
                                                  <div>Hotdogs & Burgers</div>
                                              </div>
                                              <div>Hotdogs & Burgers</div>
                                              <div className="price">AED 95pp</div>
                                              <div>5</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isVeggieChecked}
                                                      onChange={handleVeggieChange}
                                                      value={'120'}
                                                  />
                                                  <div>Veggie</div>
                                              </div>
                                              <div>Veggie</div>
                                              <div className="price">AED 120pp</div>
                                              <div>5</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isWrapsChecked}
                                                      onChange={handleWrapsChange}
                                                      value={'120'}
                                                  />
                                                  <div>Wraps</div>
                                              </div>
                                              <div>Wraps</div>
                                              <div className="price">AED 120pp</div>
                                              <div>5</div>
                                          </label>
                                      </li>
                                  </ul>
                              </div>
                          </Row>
                      </Col>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Row className="menu-divider">
                          <Col xs={12}>
                              <div className="divider"><span>WATER SPORTS & YACHT TOYS</span>
                              </div>
                          </Col>
                      </Row>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Col xs={12}>
                          <Row className="menu-list">
                              <div className="menu-title">
                                  <ul>
                                      <li>Water Sports</li>
                                      <li>Unit</li>
                                      <li>Price</li>
                                      <li> Quantity</li>
                                  </ul>
                              </div>
                          </Row>

                      </Col>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Col xs={12}>
                          <Row>
                              <div className="menu-list-detail">
                                  <ul>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isElectricBoardChecked}
                                                      onChange={handleElectricBoard}
                                                      value={'500'}
                                                  />
                                                  <div>Electric Surfboard</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 500</div>
                                              <div>1 Hour</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isSeaBobChecked}
                                                      onChange={handleSeaBobChange}
                                                      value={'200'}
                                                  />
                                                  <div>Sea Bob</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 200</div>
                                              <div>1 Hour</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isWakeBoardChecked}
                                                      onChange={handleWakeBoardChange}
                                                      value={'700'}
                                                  />
                                                  <div>Wake Board/Surf</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 700</div>
                                              <div>1 Hour</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isBananaBoatChecked}
                                                      onChange={handleBananaBoatChange}
                                                      value={'500'}
                                                  />
                                                  <div>Banana Boat</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 500</div>
                                              <div>1 Hour</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isJetSKIChecked}
                                                      onChange={handleJetSKIChange}
                                                      value={'600'}
                                                  />
                                                  <div>Jet SKI</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 600</div>
                                              <div>1 Hour</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isSkyWalkerChecked}
                                                      onChange={handleSkyWalkerChange}
                                                      value={'600'}
                                                  />
                                                  <div>Sky Walker Jet Skii 2</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 600</div>
                                              <div>1 Hour</div>
                                          </label>
                                      </li>
                                  </ul>
                              </div>
                          </Row>
                      </Col>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Col xs={12}>
                          <Row className="menu-list">
                              <div className="menu-title">
                                  <ul>
                                      <li>Yacht Toys</li>
                                      <li>Unit</li>
                                      <li>Price</li>
                                      <li> Describe</li>
                                  </ul>
                              </div>
                          </Row>

                      </Col>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Col xs={12}>
                          <Row>
                              <div className="menu-list-detail">
                                  <ul>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isSeaToyChecked}
                                                      onChange={handleSeaToy}
                                                      value={'500'}
                                                  />
                                                  <div>Sea Toy</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 500</div>
                                              <div>Swimming Pool</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isWaterSlideChecked}
                                                      onChange={handleWaterSlideChange}
                                                      value={'500'}
                                                  />
                                                  <div>Water Slide</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 500</div>
                                              <div>Water Slide</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isRockShadeChecked}
                                                      onChange={handleRockShadeChange}
                                                      value={'350'}
                                                  />
                                                  <div>Sea Toy</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 350</div>
                                              <div>Rock N Shade Island</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isBreezeIslandChecked}
                                                      onChange={handleBreezeIslandChange}
                                                      value={'350'}
                                                  />
                                                  <div>Sea Toy</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 350</div>
                                              <div>Tropical Breeze Island</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isLazyKubeChecked}
                                                      onChange={handleLazyKubeChange}
                                                      value={'350'}
                                                  />
                                                  <div>Lazy Dayz Kube</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 350</div>
                                              <div>Lazy Dayz Kube</div>
                                          </label>
                                      </li>
                                      <li>
                                          <label>
                                              <div className="checkbox">
                                                  <input
                                                      type="checkbox"
                                                      checked={isRapidQuadChecked}
                                                      onChange={handleRapidQuadChange}
                                                      value={'350'}
                                                  />
                                                  <div>Sea Toy</div>
                                              </div>
                                              <div>1</div>
                                              <div className="price">AED 350</div>
                                              <div>Rapid River Quad</div>
                                          </label>
                                      </li>
                                  </ul>
                              </div>
                          </Row>
                      </Col>
                  </Col>
                  <Col  xs={12} md={12}>
                      <Row className="menu-divider">
                          <Col xs={12}>
                              <div className="divider"><span>Booking Detail</span>
                              </div>
                          </Col>
                      </Row>

                  </Col>
                  <Col className="booking-detail"  xs={12} md={12}>
                      <Row>
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Name</h6>
                              </div>
                              <div className="color-picker date-picker text-center text-md-left">
                                  <input
                                      type="text"
                                      value={inputName}
                                      onChange={handleFullName}
                                      placeholder="Enter Full Name..."
                                  />
                              </div>
                          </Col>
                      </Row>
                      <Row>
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Phone</h6>
                              </div>
                              <div className="color-picker date-picker text-center text-md-left">
                                  <input
                                      type="number"
                                      value={inputPhone}
                                      onChange={handlePhone}
                                      placeholder="Enter Phone..."
                                  />
                              </div>
                          </Col>
                      </Row>
                      <Row>
                          <Col xs={12}>
                              <div className="color-selection">
                                  <h6 className="text-center text-md-left">Email</h6>
                              </div>
                              <div className="color-picker date-picker text-center text-md-left">
                                  <input
                                      type="email"
                                      value={inputEmail}
                                      onChange={handleEmail}
                                      placeholder="Enter Email..."
                                  />
                              </div>
                          </Col>
                      </Row>
                  </Col>
                  <Col className="booking-detail checkout-detail"  xs={12} md={12}>
                      <Row>
                          <Col xs={12}>
                              <div className="total">
                                  <ul>
                                      <li>
                                          <span>Charter</span>
                                          <span>AED {price}</span>
                                      </li>
                                      <li>
                                          <span>Catering</span>
                                          <span>AED {getCatering}</span>
                                      </li>
                                      <li>
                                          <span>Extras</span>
                                          <span>AED {getExtra}</span>
                                      </li>
                                      <li>
                                          <span>TOTAL (inc. 5% VAT)</span>
                                          <span>AED {price+getCatering+getExtra}</span>
                                      </li>
                                  </ul>
                                  <div className="payment-method">
                                      <div>
                                      <p>Secure payment powered by</p>
                                      <img src={paymentMethod} />
                                      </div>
                                      {(clientSecret) && (
                                          <Elements stripe={stripePromise} options={options}>
                                              <CheckoutForm />
                                          </Elements>
                                      )}
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </div>

      <div id="contact">
       <ContactUsForm />
      </div>
      <Footer />
      <SideContactBar />
      <BackToTop />
    </>
    );
};
export default Checkout;