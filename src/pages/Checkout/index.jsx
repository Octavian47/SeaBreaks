import { toggleDocumentAttribute } from '@/utils';
import { useEffect, useState } from 'react';
import Preloader from '../Home/components/Preloader';
import Footer from '../Home/components/Footer';
import BackToTop from '../Home/components/BackToTop';
import '@vendor/css/LineIcons.min.css';
import '../Home/assets/css/style.css';
import '../Home/assets/css/navigation.css';
import {Col, Container, Row} from "react-bootstrap";
import classicproduct from "@/pages/Home/assets/img/model-windows/classic-product.jpg";
import paymentMethod from "@/pages/Home/assets/img/payment-img.png";
import SideContactBar from "@/pages/Home/components/SideContactBar";
import {Link} from "react-router-dom";
import moment from "moment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import '@/pages/Home/assets/css/style.css';
import modalWindowImg5 from "@/pages/Home/assets/img/model-windows/modal-img-5.png";
import modalWindowImg2 from "@/pages/Home/assets/img/model-windows/modal-img-2.png";
import logo from "@/pages/Home/assets/img/sea-breaks-logo.png";
import '@vendor/css/owl.carousel.min.css';
import '@vendor/js/owl.carousel.min.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NMGCzGFJGDu2WV4FCa58ZKE2bhROOhEnSkUjVX8Rt8givG80t7NDJjZ2MbZljY7iMnxJUnacVecP10BgvV8Dxoz00uk4kPDaF');
let price =  0;
let name = '';
let yacht_length = '';
let capacity = '';
let cabin = '';
let yacht_type = 'Standard';
let cabin_length = { 'premium': {'length':'15m+','cabin': '2-3'}, 'standard':{'length':'10m+', 'cabin': '1-2'}};
let coupon_code = { 'XACIO': '5', 'VCFIO': '15', 'SFRUI': '25'};
let extra_option = [];
let catering_option = [];
const Checkout = () => {
    const [selectedTime, setSelectedTime] = useState('');
    const [inputGuest, setInputGuest] = useState('');
    const [inputDep, setInputDep] = useState('Marina Ibiza');
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
    const [activityOption, setActivityOption] = useState('');
    const [date, setSelectedDate] = useState(new Date());
    const [applyDiscount,  setCoupon] = useState(false)
    const [totalPrice, setTotal] = useState(0)
    const [datePickerOpen, setDatePickerOpen] = useState(false)

    let [clientSecret, setClientSecret] = useState("");
    let cart = localStorage.getItem('cart') || '{}'
    if(cart) {
        cart = JSON.parse(cart);
        price = cart.price;
        name = cart.name;
        capacity = cart.capacity;
        yacht_type = (cart.premium_yacht)?'Premium':'Standard';
        yacht_length = cabin_length[yacht_type.toLowerCase()]['length'];
        cabin = cabin_length[yacht_type.toLowerCase()]['cabin'];
    }
    else{
        window.history.back();
    }
    useEffect(() => {
        $(".black-text-datepicker").focus();
        setTotal(cart.total_price)
        setCoupon(cart.apply_coupon)
        setSelectedDate(moment(cart.date).format("MM/DD/YYYY"));
        setInputGuest(cart.guest);

        // Create PaymentIntent as soon as the page loads
        setSelectedTime(cart.duration);
        setActivityOption(cart.activity);
        packageSlider();
        setCheckboxChecked();
    }, []);

    const setCheckboxChecked = () =>{
        let catering_total = 0;
        let extra_total = 0;
        if(cart['extra'].length) {
            extra_option = new Array();
            {cart['extra'].map((e, index) => {
                let func = $("input[name='"+e.name+"'][value='"+e.price+"']").attr('data-function');
                eval(func+"(true)")
                extra_total +=Number(e.price);
                extra_option.push(e.name)
            })}
            setExtra(Number(extra_total));
        }
        if(cart['catering'].length) {
            {
                catering_option = new Array();
                cart['catering'].map((ele, index) => {
                    let func = $("input[name='" + ele.name + "'][value='" + ele.price + "']").attr('data-function');
                    eval(func + "(true)")
                    catering_total += Number(ele.price);
                    catering_option.push(ele.name)
                })
            }
            setCatering(Number(catering_total));
        }
        let total  = Number(cart.total_price)+Number(catering_total)+Number(extra_total)
            getStripSecret(total);
    };

    const getStripSecret = async (total = 0) => {
        setClientSecret('')
        try {
            let guest = $("input[name='guest']").val();
            total = (total)?total:Number(totalPrice)+Number(getCatering)+Number(getExtra);
            const response = await fetch('http://localhost:4242/secret?price='+total
                +'&email='+$("input[name='email']").val()+'&guest='+inputGuest+'&date='+date
                +'&product_name=' +cart.name +'&yacht_type='+yacht_type +'&activity='+cart.activity
                +'&extra_option='+extra_option.join(", ") +'&catering_option='+catering_option.join(", ")
                +'&phone='+$("input[name='phone']").val() +'&name='+$("input[name='name']").val()
                +'&unit_price='+totalPrice
            );
            let {client_secret: secret} = await response.json();
            setClientSecret(secret)
        } catch (e) {
            console.log(e)
        }

    }

    // Event handler to update the input value when it changes
    const handleFullName = (event) => {
        setInputName(event.target.value);
        $("input[name='name']").removeClass('error');
        getStripSecret();
    };
    const handlePhone = (event) => {
        setInputPhone(event.target.value);
        $("input[name='phone']").removeClass('error');
        getStripSecret();
    };
    const handleEmail = (event) => {
        setInputEmail(event.target.value);
        $("input[name='email']").removeClass('error');
        getStripSecret();
    };
    const handleGuest = (event) => {
        setInputGuest(event.target.value);
        $("input[name='guest']").removeClass('error').next('span').hide();
        if($("input[name='guest']").val() > capacity){
            $("input[name='guest']").addClass('error').next('span').show();
        }
        else
        {
            getStripSecret();
        }
    };

    const handleDeparture = (event) => {
        setInputDep(event.target.value);
        $("input[name='dep_point']").removeClass('error');
    };

    // Event handler to update the selected time
    const handleTime = (event) => {
        setSelectedTime(event.target.value);
        $("input[name='duration']").removeClass('error');
    };
    const activityChange = (event) => {
        setActivityOption(event.target.value);
        $("select[name='yacht_activity']").removeClass('error');
        getStripSecret();
    };

    const calCatering = (event) => {
        let amount = 0;
        if(event.target.checked){
            amount = Number(getCatering)+Number(event.target.value);
            setCatering(amount);
            cart['catering'].push({'name': event.target.name, 'price': event.target.value})
        }
        else{
            amount = Number(getCatering)-Number(event.target.value);
            setCatering(amount);
            let remove_extra_index = cart['extra'].findIndex(function(el) {
                return el.name === event.target.name && Number(el.price) === Number(event.target.value);
            });
            cart['catering'].splice(remove_extra_index, 1)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setCheckboxChecked()
    };

    const calExtra = (event) => {
        let amount = 0;
        if(event.target.checked){
            amount = Number(getExtra)+Number(event.target.value);
            setExtra(amount);
            cart['extra'].push({'name': event.target.name, 'price': event.target.value})
        }
        else{
            amount = Number(getExtra)-Number(event.target.value);
            setExtra(amount);
            let remove_extra_index = cart['extra'].findIndex(function(el) {
                return el.name === event.target.name && Number(el.price) === Number(event.target.value);
            });
            cart['extra'].splice(remove_extra_index, 1)
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        setCheckboxChecked()
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
    const handleLazyKubeChange = (event) => {
        setLazyKubeChecked(!isLazyKubeChecked);
        calExtra(event);
    };
    const handleRapidQuadChange = (event) => {
        setRapidQuadChecked(!isRapidQuadChecked);
        calExtra(event);
    };
    const applyCoupon = () => {
        $(".coupon-error").hide();
        let coupon = $('input[name="discount_code"]').val();
        if(coupon) {
            if (typeof coupon_code[coupon] !== "undefined") {
                let item_total = totalPrice+getExtra+getCatering;
                let dis = (item_total / 100) * coupon_code[coupon];
                let total_price = item_total - dis;
                setTotal(total_price);
                setCoupon(true);
                let local_storage = localStorage.getItem('cart') || '{}'
                if (local_storage) {
                    local_storage = JSON.parse(local_storage);
                    local_storage['apply_coupon'] = true;
                    local_storage['total_price'] = total_price;
                    local_storage['coupon_code'] = coupon;
                    localStorage.setItem("cart", JSON.stringify(local_storage));
                    $('input[name="discount_code"]').val('');
                    let email = '';
                    if($("input[name='email']").val() && !filter.test($("input[name='email']").val())){
                        email = $("input[name='email']").val();
                    }
                    getStripSecret();
                }
            } else {
                $(".coupon-error").show();
            }
        }
        else
        {
            $('input[name="discount_code"]').focus()
        }
    }
    const appearance = {
        theme: 'stripe',
        variables: {
            borderRadius: '8px',
            colorPrimary: '#EFC078',
            colorText: 'white',
            colorTextSecondary: '#000000',
            colorTextPlaceholder: '#000000',
            logoColor: 'dark'
        },
        rules: {
            '.Input': {
                backgroundColor: '#ffffff',
                border: '1px solid var(--colorPrimary)',
                color: 'var(--colorTextSecondary)'
            },
            '.Tab': {
                border: '1px solid #E0E6EB',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
            },

            '.Tab:hover': {
                color: 'var(--colorText)',
            },

            '.Tab--selected': {
                borderColor: '#E0E6EB',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)',
            },

            '.Input--invalid': {
                boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
            }
        }
    };
    const options = {
        clientSecret,
        appearance,
    };
    const selectTerms = () =>{
        $("label[for='terms']").removeClass('error');
    }
    const selectPolicy = () =>{
        $("label[for='cancellation_policy']").removeClass('error');
    }
    const handleDateChange = (date) =>{
        setSelectedDate(moment(date).format("MM/DD/YYYY"));
        setDatePickerOpen(false)
    }
    const validation = () => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if($("input[name='dep_point']").val() == ''){
            $("input[name='dep_point']").addClass('error').focus();
            return false;
        }
        else if($("select[name='yacht_activity']").val() == ''){
            $("select[name='yacht_activity']").addClass('error').focus();
             return false;
        }
        else if($("input[name='guest']").val() == ''){
            $("input[name='guest']").addClass('error').focus();
            return false;
        }
        else if($("input[name='guest']").val() &&
            $("input[name='guest']").val() > capacity){
                $("input[name='guest']").addClass('error').focus().next('span').show();
                return false;
        }
        else if($("input[name='name']").val() == ''){
            $("input[name='name']").addClass('error').focus();
            return false;
        }
        else if($("input[name='phone']").val() == ''){
            $("input[name='phone']").addClass('error').focus();
            return false;
        }
        else if($("input[name='email']").val() == ''){
            $("input[name='email']").addClass('error').focus();
            return false;
        }
        else if($("input[name='email']").val() &&
            !filter.test($("input[name='email']").val())){
                alert('Please provide a valid email address');
                return false;
        }
        else if(!$("input[name='terms']").is(":checked")){
            $("label[for='terms']").addClass('error').focus();
            return false;
        }
        else if(!$("input[name='cancellation_policy']").is(":checked")){
            $("label[for='cancellation_policy']").addClass('error').focus();
            return false;
        }
        else{
            return true;
        }
    }
    function packageSlider(){
        $(".products").owlCarousel({
            items: 1,
            autoPlay: 1500, //Set AutoPlay to 3 seconds
            dots: true,
            loop: true
        });
    }
    return (
        <>
            <Preloader/>
            <div id="checkout">
                <header>
                    <nav className="navbar">
                        <Link to="/" title="Logo" className="logo scroll">
                            <img src={logo} alt="logo" className="logo-white"/>
                        </Link>
                    </nav>
                </header>
                <Container>
                    <div className={'detail-page'}>
                        <div className={'desktop-line-top'}>
                        <Row className={'desktop-left-line'}>
                            <Col xs={12} className="menu-divider">
                                <div className="divider"><span>YOURS CHARTER</span>
                                </div>
                            </Col>
                            <div className={'w-100 d-flex justify-content-between flex-wrap desktop-design'}>
                                {/*slider section*/}
                                <Col sm={12} md={6} className="morphic-img">
                                    <div className="products owl-carousel owl-theme">
                                        <div className="item active">
                                            <img className="d-block" src={classicproduct} alt="First slide"/>
                                        </div>
                                        <div className="item">
                                            <img className="d-block" src={modalWindowImg5} alt="Second slide"/>
                                        </div>
                                        <div className="item">
                                            <img className="d-block" src={modalWindowImg2} alt="Third slide"/>
                                        </div>
                                    </div>
                                </Col>
                                {/*chekcout form*/}
                                <Col sm={12} md={6} className="morphic-title">
                                    <div className={'checkout-form'}>
                                        <h3>{name}</h3>
                                        <div className={'price font-weight-bold'}>Price: €{totalPrice}</div>
                                        <div className={'product-detail'}>
                                            <div className={'sub-detail yacht-block'}>
                                                <div>LENGTH</div>
                                                <div>{yacht_length}</div>
                                            </div>
                                            <div className={'sub-detail yacht-block'}>
                                                <div>YACHT TYPE</div>
                                                <div>{yacht_type}</div>
                                            </div>
                                            <div className={'sub-detail yacht-block'}>
                                                <div>CABIN</div>
                                                <div>{cabin}</div>
                                            </div>
                                        </div>
                                        <div className={'form'}>
                                            <div>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Departure Date</h6>
                                                </div>
                                               <div className={'position-relative'}>
                                                <div className="datepicket-handler" onClick={() => setDatePickerOpen(!datePickerOpen)}></div>
                                                <DatePicker
                                                    selected={date}
                                                    readOnly={true}
                                                    onChange={handleDateChange}
                                                    onClickOutside={() => setDatePickerOpen(false)}
                                                    open={datePickerOpen}
                                                    minDate={new Date()}
                                                    className="black-text-datepicker"
                                                />
                                               </div>
                                            </div>
                                            <div>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Duration</h6>
                                                </div>
                                                <div className="color-picker select-duration text-center text-md-left">
                                                    <input
                                                        name={'duration'}
                                                        type="text"
                                                        value={selectedTime}
                                                        onChange={handleTime}
                                                        placeholder=""
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Activity</h6>
                                                </div>
                                                <div
                                                    className="w-100 color-picker select-opacity font-weight-500 text-center text-md-left">
                                                    <select value={activityOption} name={'yacht_activity'}
                                                            onChange={activityChange}>
                                                        <option value="">Select Activity</option>
                                                        <option value="Scuba Diving">Scuba Diving</option>
                                                        <option value="Parasailing">Parasailing</option>
                                                        <option value="Jet Ski">Jet Ski</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Departure Point</h6>
                                                </div>
                                                <div className="color-picker departure-point text-center text-md-left">
                                                    <input
                                                        name={'dep_point'}
                                                        type="text"
                                                        value={inputDep}
                                                        onChange={handleDeparture}
                                                        placeholder="Enter Location..."
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">YACHT Capacity</h6>
                                                </div>
                                                <div className="color-picker passenger-detail text-center text-md-left">
                                                    <input
                                                        name={'capacity'}
                                                        type="number"
                                                        value={capacity}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Guests</h6>
                                                </div>
                                                <div
                                                    className="color-picker passenger-detail flex-wrap text-center text-md-left">
                                                    <input
                                                        name={'guest'}
                                                        type="number"
                                                        value={inputGuest}
                                                        onChange={handleGuest}
                                                        placeholder={'Guest'}
                                                        min={1}
                                                        max={capacity}
                                                    />
                                                    <span className={'mandatory'}>Your selected guest number greater than capacity.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <Col xs={12} md={12}>
                                <Row className="menu-divider">
                                    <Col xs={12}>
                                        <div className="divider"><span>ON BOARD CATERING</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <div className={'w-100 desktop-design'}>
                                <Col xs={12} md={12}>
                                    <Col xs={12}>
                                        <Row className="menu-list">
                                            <div className="menu-title">
                                                <ul>
                                                <li>Menus</li>
                                                <li>Price</li>
                                                </ul>
                                            </div>
                                        </Row>

                                    </Col>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Col xs={12}>
                                        <Row>
                                            <div className="menu-list-detail">
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'BBQ'}
                                                                    type="checkbox"
                                                                    data-function={'setIsBbqChecked'}
                                                                    checked={isBbqChecked}
                                                                    onChange={handleBBQChange}
                                                                    value={'180'}
                                                                />
                                                                <div>BBQ</div>
                                                            </div>
                                                            <div className="price">€ 180pp</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Breakfast'}
                                                                    type="checkbox"
                                                                    data-function={'setIsBreakfastChecked'}
                                                                    checked={isBreakfastChecked}
                                                                    onChange={handleBreakfastChange}
                                                                    value={'75'}
                                                                />
                                                                <div>Breakfast</div>
                                                            </div>
                                                            <div className="price">€ 75pp</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Hotdogs & Burgers'}
                                                                    type="checkbox"
                                                                    data-function={'setIsHotDogsChecked'}
                                                                    checked={isHotDogsChecked}
                                                                    onChange={handleHotDogChange}
                                                                    value={'95'}
                                                                />
                                                                <div>Hotdogs & Burgers</div>
                                                            </div>
                                                            <div className="price">€ 95pp</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Veggie'}
                                                                    type="checkbox"
                                                                    data-function={'setIsVeggieChecked'}
                                                                    checked={isVeggieChecked}
                                                                    onChange={handleVeggieChange}
                                                                    value={'120'}
                                                                />
                                                                <div>Veggie</div>
                                                            </div>
                                                            <div className="price">€ 120pp</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Wraps'}
                                                                    type="checkbox"
                                                                    data-function={'setIsWrapsChecked'}
                                                                    checked={isWrapsChecked}
                                                                    onChange={handleWrapsChange}
                                                                    value={'120'}
                                                                />
                                                                <div>Wraps</div>
                                                            </div>
                                                            <div className="price">€ 120pp</div>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Row>
                                    </Col>
                                </Col>
                            </div>
                            <Col xs={12} md={12}>
                                <Row className="menu-divider">
                                    <Col xs={12}>
                                        <div className="divider"><span>WATER SPORTS & YACHT TOYS</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <div className={'w-100 desktop-design'}>
                                <Col xs={12} md={12}>
                                    <Col xs={12}>
                                        <Row className="menu-list">
                                            <div className="menu-title">
                                                <ul>
                                                    <li>Water Sports</li>
                                                    <li>Price</li>
                                                </ul>
                                            </div>
                                        </Row>

                                    </Col>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Col xs={12}>
                                        <Row>
                                            <div className="menu-list-detail">
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Electric Surfboard'}
                                                                    type="checkbox"
                                                                    data-function={'setElectricBoardChecked'}
                                                                    checked={isElectricBoardChecked}
                                                                    onChange={handleElectricBoard}
                                                                    value={'500'}
                                                                />
                                                                <div>Electric Surfboard</div>
                                                            </div>
                                                            <div className="price">€ 500</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Sea Bob'}
                                                                    type="checkbox"
                                                                    data-function={'setSeaBobChecked'}
                                                                    checked={isSeaBobChecked}
                                                                    onChange={handleSeaBobChange}
                                                                    value={'200'}
                                                                />
                                                                <div>Sea Bob</div>
                                                            </div>
                                                            <div className="price">€ 200</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Wake Board/Surf'}
                                                                    type="checkbox"
                                                                    data-function={'setWakeBoardChecked'}
                                                                    checked={isWakeBoardChecked}
                                                                    onChange={handleWakeBoardChange}
                                                                    value={'700'}
                                                                />
                                                                <div>Wake Board/Surf</div>
                                                            </div>
                                                            <div className="price">€ 700</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Banana Boat'}
                                                                    type="checkbox"
                                                                    data-function={'setBananaBoatChecked'}
                                                                    checked={isBananaBoatChecked}
                                                                    onChange={handleBananaBoatChange}
                                                                    value={'500'}
                                                                />
                                                                <div>Banana Boat</div>
                                                            </div>
                                                            <div className="price">€ 500</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Jet SKI'}
                                                                    type="checkbox"
                                                                    data-function={'setJetSKIChecked'}
                                                                    checked={isJetSKIChecked}
                                                                    onChange={handleJetSKIChange}
                                                                    value={'600'}
                                                                />
                                                                <div>Jet SKI</div>
                                                            </div>
                                                            <div className="price">€ 600</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Sky Walker Jet Skii 2'}
                                                                    type="checkbox"
                                                                    data-function={'setSkyWalkerChecked'}
                                                                    checked={isSkyWalkerChecked}
                                                                    onChange={handleSkyWalkerChange}
                                                                    value={'600'}
                                                                />
                                                                <div>Sky Walker Jet Skii 2</div>
                                                            </div>
                                                            <div className="price">€ 600</div>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Row>
                                    </Col>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Col xs={12}>
                                        <Row className="menu-list">
                                            <div className="menu-title">
                                                <ul>
                                                    <li>Yacht Toys</li>
                                                    <li>Price</li>
                                                </ul>
                                            </div>
                                        </Row>

                                    </Col>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Col xs={12}>
                                        <Row>
                                            <div className="menu-list-detail">
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Sea Toy'}
                                                                    type="checkbox"
                                                                    data-function={'setSeaToyChecked'}
                                                                    checked={isSeaToyChecked}
                                                                    onChange={handleSeaToy}
                                                                    value={'500'}
                                                                />
                                                                <div>Sea Toy</div>
                                                            </div>
                                                            <div className="price">€ 500</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'BBQ'}
                                                                    type="checkbox"
                                                                    data-function={'setWaterSlideChecked'}
                                                                    checked={isWaterSlideChecked}
                                                                    onChange={handleWaterSlideChange}
                                                                    value={'500'}
                                                                />
                                                                <div>Water Slide</div>
                                                            </div>
                                                            <div className="price">€ 500</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Lazy Dayz Kube'}
                                                                    type="checkbox"
                                                                    data-function={'setLazyKubeChecked'}
                                                                    checked={isLazyKubeChecked}
                                                                    onChange={handleLazyKubeChange}
                                                                    value={'350'}
                                                                />
                                                                <div>Lazy Dayz Kube</div>
                                                            </div>
                                                            <div className="price">€ 350</div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="checkbox">
                                                                <input
                                                                    name={'Sea Toy'}
                                                                    type="checkbox"
                                                                    data-function={'setRapidQuadChecked'}
                                                                    checked={isRapidQuadChecked}
                                                                    onChange={handleRapidQuadChange}
                                                                    value={'350'}
                                                                />
                                                                <div>Sea Toy</div>
                                                            </div>
                                                            <div className="price">€ 350</div>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Row>
                                    </Col>
                                </Col>
                            </div>
                            <Col xs={12} md={12}>
                                    <Row className="menu-divider">
                                        <Col xs={12}>
                                            <div className="divider"><span>BOOKING SUMMARY</span>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>
                        </Row>
                        </div>
                        <Row>
                            <div className={'w-100 d-flex justify-content-between flex-wrap booking-summary'}>
                                <Col sm={12} md={6}>
                                    <div className={'booking-detail'}>
                                        <Row>
                                            <Col xs={12}>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Name</h6>
                                                </div>
                                                <div className="color-picker date-picker text-center text-md-left">
                                                    <input
                                                        name={'name'}
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
                                                    <h6 className="text-md-left">Phone</h6>
                                                </div>
                                                <div className="color-picker date-picker text-center text-md-left">
                                                    <input
                                                        name={'phone'}
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
                                                    <h6 className="text-md-left">Email</h6>
                                                </div>
                                                <div className="color-picker date-picker text-center text-md-left">
                                                    <input
                                                        name={'email'}
                                                        type="email"
                                                        value={inputEmail}
                                                        onChange={handleEmail}
                                                        placeholder="Enter Email..."
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Departure Date</h6>
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
                                        <Row>
                                            <Col xs={12}>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Duration</h6>
                                                </div>
                                                <div className="color-picker select-duration text-center text-md-left">
                                                    <input
                                                        type="text"
                                                        value={selectedTime}
                                                        placeholder=""
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Activity</h6>
                                                </div>
                                                <div className="color-picker select-duration text-center text-md-left">
                                                    <input
                                                        type="text"
                                                        value={activityOption}
                                                        placeholder=""
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Departure Point</h6>
                                                </div>
                                                <div className="color-picker departure-point text-center text-md-left">
                                                    <input
                                                        type="text"
                                                        value={inputDep}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <div className="color-selection">
                                                    <h6 className="text-md-left">Guests</h6>
                                                </div>
                                                <div className="color-picker passenger-detail text-center text-md-left">
                                                    <div className="passenger-detail">
                                                        <input
                                                            type="number"
                                                            value={inputGuest}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <div className="summary-space"></div>
                                <Col sm={12} md={6}>
                                    <div className="booking-detail checkout-summary">
                                        <div className="total">
                                            <ul>
                                                <li>
                                                    <span>Charter</span>
                                                    <span>€ {totalPrice}</span>
                                                </li>
                                                <li>
                                                    <span>Catering</span>
                                                    <span>€ {getCatering}</span>
                                                </li>
                                                <li>
                                                    <span>Extras</span>
                                                    <span>€ {getExtra}</span>
                                                </li>
                                                <li className={'total-amount'}>
                                                    <span>TOTAL <span className={'tax'}>(inc. 5% VAT)</span></span>
                                                    <span>€ {totalPrice + getCatering + getExtra}</span>
                                                </li>
                                            </ul>
                                            <div
                                                className={`formbold-email-subscription-form ${(applyDiscount) ? 'd-none' : ''}`}>
                                                <div className={'w-100 d-flex'}>
                                                <input
                                                    type="text"
                                                    name="discount_code"
                                                    placeholder="Enter Coupon Code"
                                                    className="formbold-form-input"
                                                />
                                                <button className="formbold-btn" onClick={applyCoupon}> Apply</button>
                                                </div>
                                                    <span
                                                    className={'mandatory coupon-error'}>Coupon code is not valid.</span>

                                            </div>
                                            <div className={'col-12 van-checkbox'}>
                                            <div>
                                                <input type={'checkbox'} name={'terms'} id="terms" value={'1'}
                                                           onChange={selectTerms}/>
                                                    <label htmlFor={'terms'}></label>
                                                    <span className="text">
                                                      I have read &amp; agree to the <span>Terms of Service and Conditions</span>
                                                  </span>
                                                </div>
                                                <div>
                                                    <input type={'checkbox'} id={'cancellation_policy'}
                                                           name={'cancellation_policy'}
                                                           value={1} onChange={selectPolicy}/>
                                                    <label htmlFor={'cancellation_policy'}></label>
                                                    <span className="text">
                                                      I have read &amp; agree to the <span>Cancellation Policy</span>
                                                     </span>
                                                </div>
                                            </div>
                                            <div className="payment-method">
                                                <p>Secure payment powered by <img src={paymentMethod}/></p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            {(clientSecret) && (
                                <div className={'w-100 desktop-design'}>
                                    <Col xs={12} md={12}>
                                        <div className="checkout-detail">
                                            <Elements stripe={stripePromise} options={options}>
                                                <CheckoutForm validation={validation}/>
                                            </Elements>
                                        </div>
                                    </Col>
                                </div>
                            )}
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer/>
            <SideContactBar/>
            <BackToTop/>
        </>
    );
};
export default Checkout;