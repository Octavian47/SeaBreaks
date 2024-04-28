import {Col, Container, Row} from "react-bootstrap";
import expressProduct from "@/pages/Home/assets/img/model-windows/classic-product.jpg";
import classicproduct from "@/pages/Home/assets/img/model-windows/classic-product.jpg";
import modalWindowImg6 from "@/pages/Home/assets/img/model-windows/modal-img-6.png";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import paymentMethod from "@/pages/Home/assets/img/payment-img.png";
import paymentValet from "@/pages/Home/assets/img/payment-valet.png";
import {useEffect, useState} from "react";

const Checkout = ({price, date}) => {
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

    useEffect(() => {
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
    }, [price]);

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

    const handleBBQChange = () => {
        setIsBbqChecked(!isBbqChecked);
        if(event.target.checked){
            setCatering(Number(getCatering)+Number(event.target.value));
        }
        else{
            setCatering(Number(getCatering)-Number(event.target.value));
        }
    };
    const handleBreakfastChange = () => {
        setIsBreakfastChecked(!isBreakfastChecked);
        if(event.target.checked){
            setCatering(Number(getCatering)+Number(event.target.value));
        }
        else{
            setCatering(Number(getCatering)-Number(event.target.value));
        }
    };
    const handleHotDogChange = () => {
        setIsHotDogsChecked(!isHotDogsChecked);
        if(event.target.checked){
            setCatering(Number(getCatering)+Number(event.target.value));
        }
        else{
            setCatering(Number(getCatering)-Number(event.target.value));
        }
    };
    const handleVeggieChange = () => {
        setIsVeggieChecked(!isVeggieChecked);
        if(event.target.checked){
            setCatering(Number(getCatering)+Number(event.target.value));
        }
        else{
            setCatering(Number(getCatering)-Number(event.target.value));
        }
    };
    const handleWrapsChange = () => {
        setIsWrapsChecked(!isWrapsChecked);
        if(event.target.checked){
            setCatering(Number(getCatering)+Number(event.target.value));
        }
        else{
            setCatering(Number(getCatering)-Number(event.target.value));
        }
    };
    const handleElectricBoard = () => {
        setElectricBoardChecked(!isElectricBoardChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleSeaBobChange = () => {
        setSeaBobChecked(!isSeaBobChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleWakeBoardChange = () => {
        setWakeBoardChecked(!isWakeBoardChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleBananaBoatChange = () => {
        setBananaBoatChecked(!isBananaBoatChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleJetSKIChange = () => {
        setJetSKIChecked(!isJetSKIChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleSkyWalkerChange = () => {
        setSkyWalkerChecked(!isSkyWalkerChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleSeaToy = () => {
        setSeaToyChecked(!isSeaToyChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleWaterSlideChange = () => {
        setWaterSlideChecked(!isWaterSlideChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleRockShadeChange = () => {
        setRockShadeChecked(!isRockShadeChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleBreezeIslandChange = () => {
        setBreezeIslandChecked(!isBreezeIslandChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleLazyKubeChange = () => {
        setLazyKubeChecked(!isLazyKubeChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    const handleRapidQuadChange = () => {
        setRapidQuadChecked(!isRapidQuadChecked);
        if(event.target.checked){
            setExtra(Number(getExtra)+Number(event.target.value));
        }
        else{
            setExtra(Number(getExtra)-Number(event.target.value));
        }
    };
    return <>
        <Container>
    <Row className="main-morphic-body detail-page ">
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
                            <p>Secure payment powered by</p>
                            <img src={paymentMethod} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col className="booking-detail checkout-detail btn-checkout"  xs={12} md={12}>
            <Row>
                <Col xs={12}>
                    <a href="#" className="checkout-btn">
                        <img src={paymentValet}/>
                        <p>Procceed To Checkout</p>
                    </a>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
    </>;
};
export default Checkout;