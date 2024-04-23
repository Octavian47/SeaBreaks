import { useEffect } from "react";
import modalWindowImg1 from "../assets/img/model-windows/modal-img-1.png";
import modalWindowImg2 from "../assets/img/model-windows/modal-img-2.png";
import modalWindowImg3 from "../assets/img/model-windows/modal-img-3.png";
import modalWindowImg4 from "../assets/img/model-windows/modal-img-4.png";
import modalWindowImg5 from "../assets/img/model-windows/modal-img-5.png";
import modalWindowImg6 from "../assets/img/model-windows/modal-img-6.png";
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
const ProductViewModals = () => {
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
              <Row className="main-morphic-body align-items-center">
                <Col xs={12} md={6} className="morphic-img">
                  <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={modalWindowImg1} alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg3} alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg6} alt="Third slide" />
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={modalWindowMod1Sub1} alt="First slide" />
                      </li>
                      <li data-target="#carousel-thumb" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod3Sub2} alt="Second slide" />
                      </li>
                      <li data-target="#carousel-thumb" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod6Sub3} alt="Third slide" />
                      </li>
                    </ol>
                  </div>

                </Col>
                <Col xs={12} md={6} className="morphic-title">
                  <h3>EXPRESS SEA BREAK: 5H</h3>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy. </p>
                  <Row className="pb-4">
                    <Col xs={12} md={6} className="morphic-title">
                      {/* Other details like length, capacity can be added here */}
                      <Form>
                        <Form.Group controlId="formBasicName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="tel" placeholder="Enter phone" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        {/* Add more form fields as needed */}
                        
                        <Button variant="primary" type="submit">
                          Proceed
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="justify-content-end">
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
            <span className="close-modal"><i /><i /></span>
          </header>
          <div className="morphic-body">
            <Container>
              <div className="row main-morphic-body align-items-center">
                <Col xs={12} md={6} className="morphic-img">
                  <div id="carousel-thumb2" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={modalWindowImg2} alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg4} alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg1} alt="Third slide" />
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb2" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={modalWindowMod2Sub1} alt="First slide" />
                      </li>
                      <li data-target="#carousel-thumb2" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod4Sub2} alt="Second slide" />
                      </li>
                      <li data-target="#carousel-thumb2" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod4Sub3} alt="Third slide" />
                      </li>
                    </ol>
                  </div>

                </Col>
                <Col xs={12} md={6} className="morphic-title">
                  <h5>Article PZ-1000-23</h5>
                  <h3>Nike Air Max</h3>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy. </p>
                  <Row className="pb-md-4">

                    <Col xs={3} md={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Size:</h6>
                      </div>
                    </Col>
                    <Col xs={9} md={10}>
                      <div className="color-picker text-center text-md-left">
                        <div className="size__item">
                          <h6 className="active">38</h6>
                          <h6>39</h6>
                          <h6>40</h6>
                          <h6>41</h6>
                          <h6>42</h6>
                          <h6>43</h6>
                          <h6>44</h6>
                          <h6>45</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-4">

                    <Col xs={6} md={1} lg={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Qty:</h6>
                      </div>
                    </Col>
                    <Col xs={6} md={5} lg={4} className="input_plus_mins">
                      <div className="qty">
                        <span className="minus bg-dark"><i className="lni-minus" /></span>
                        <input type="number" className="count" name="qty" defaultValue={1} />
                        <span className="plus bg-dark"><i className="lni-plus" /></span>
                      </div>
                    </Col>

                    <Col xs={6} md={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Color:</h6>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="color-picker text-center text-md-left">

                        <div className="color-picker__item">
                          <input id="input4" type="radio" className="color-picker__input" name="color-input" defaultValue={1} />
                          <label htmlFor="input4" className="color-picker__color  color-picker__color--white" />
                        </div>

                        <div className="color-picker__item">
                          <input id="input5" type="radio" className="color-picker__input" name="color-input" defaultValue={4} />
                          <label htmlFor="input5" className="color-picker__color color-picker__color--color2" />
                        </div>

                        <div className="color-picker__item">
                          <input id="input6" type="radio" className="color-picker__input" name="color-input" defaultValue={7} />
                          <label htmlFor="input6" className="color-picker__color color-picker__color--color5" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} className="price-modal"><h1>$180.00</h1></Col>
                    <Col xs={12} className="modal-btn"><a target="_blank" href="https://www.amazon.com/" className="btn btn-medium btn-rounded btn-trans text-capitalize">Buy Now</a></Col>
                  </Row>
                </Col>
              </div>

              <Row className="justify-content-end">
                <div className="d-none d-md-block left-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => prevWindow('morphic-window1')}><i className="fa fa-angle-left" /></a>
                </div>
                <div className="d-none d-md-block right-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => nextWindow('morphic-window3')}><i className="fa fa-angle-right" /></a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>


      <div className="modal-window" id="morphic-window3">
        <div className="modal-body">
          <header>
            <span className="close-modal"><i /><i /></span>
          </header>
          <div className="morphic-body">
            <Container>
              <div className="row main-morphic-body align-items-center">
                <Col xs={12} md={6} className="morphic-img">

                  <div id="carousel-thumb3" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={modalWindowImg3} alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg5} alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg2} alt="Third slide" />
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb3" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={modalWindowMod3Sub1} alt="First slide" />
                      </li>
                      <li data-target="#carousel-thumb3" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod5Sub2} alt="Second slide" />
                      </li>
                      <li data-target="#carousel-thumb3" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod2Sub3} alt="Third slide" />
                      </li>
                    </ol>
                  </div>

                </Col>
                <Col xs={12} md={6} className="morphic-title">
                  <h5>Article PZ-1000-23</h5>
                  <h3>Air Jordan</h3>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy. </p>
                  <Row className="pb-md-4">

                    <Col xs={3} md={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Size:</h6>
                      </div>
                    </Col>
                    <Col xs={9} md={10}>
                      <div className="color-picker text-center text-md-left">
                        <div className="size__item">
                          <h6 className="active">38</h6>
                          <h6>39</h6>
                          <h6>40</h6>
                          <h6>41</h6>
                          <h6>42</h6>
                          <h6>43</h6>
                          <h6>44</h6>
                          <h6>45</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-4">

                    <Col xs={6} md={1} lg={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Qty:</h6>
                      </div>
                    </Col>
                    <Col xs={6} md={5} lg={4} className="input_plus_mins">
                      <div className="qty">
                        <span className="minus bg-dark"><i className="lni-minus" /></span>
                        <input type="number" className="count" name="qty" defaultValue={1} />
                        <span className="plus bg-dark"><i className="lni-plus" /></span>
                      </div>
                    </Col>

                    <Col xs={6} md={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Color:</h6>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="color-picker text-center text-md-left">

                        <div className="color-picker__item">
                          <input id="input7" type="radio" className="color-picker__input" name="color-input" defaultValue={1} />
                          <label htmlFor="input7" className="color-picker__color  color-picker__color--white" />
                        </div>

                        <div className="color-picker__item">
                          <input id="input8" type="radio" className="color-picker__input" name="color-input" defaultValue={4} />
                          <label htmlFor="input8" className="color-picker__color color-picker__color--color2" />
                        </div>

                        <div className="color-picker__item">
                          <input id="input9" type="radio" className="color-picker__input" name="color-input" defaultValue={7} />
                          <label htmlFor="input9" className="color-picker__color color-picker__color--color5" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} className="price-modal"><h1>$220.00</h1></Col>
                    <Col xs={12} className="modal-btn"><a target="_blank" href="https://www.amazon.com/" className="btn btn-medium btn-rounded btn-trans text-capitalize">Buy Now</a></Col>
                  </Row>
                </Col>
              </div>

              <Row className="justify-content-end">
                <div className="d-none d-md-block left-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => prevWindow('morphic-window2')}><i className="fa fa-angle-left" /></a>
                </div>
                <div className="d-none d-md-block right-arrow-sec text-center mt-auto mb-auto">
                  <a className="d-flex justify-content-center" onClick={() => nextWindow('morphic-window4')}><i className="fa fa-angle-right" /></a>
                </div>
              </Row>
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
              <Row className="main-morphic-body align-items-center">
                <Col xs={12} md={6} className="morphic-img">

                  <div id="carousel-thumb4" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={modalWindowImg4} alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg2} alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={modalWindowImg6} alt="Third slide" />
                      </div>
                    </div>

                    <ol className="carousel-indicators">
                      <li data-target="#carousel-thumb4" data-slide-to={0} className="active">
                        <img className="d-block w-100 img-fluid" src={modalWindowMod4Sub1} alt="First slide" />
                      </li>
                      <li data-target="#carousel-thumb4" data-slide-to={1}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod2Sub2} alt="Second slide" />
                      </li>
                      <li data-target="#carousel-thumb4" data-slide-to={2}>
                        <img className="d-block w-100 img-fluid" src={modalWindowMod6Sub3} alt="Third slide" />
                      </li>
                    </ol>
                  </div>

                </Col>
                <Col xs={12} md={6} className="morphic-title">
                  <h5>Article PZ-1000-23</h5>
                  <h3>Adidas Consortium</h3>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy. </p>
                  <Row className="pb-md-4">

                    <Col xs={3} md={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Size:</h6>
                      </div>
                    </Col>
                    <Col xs={9} md={10}>
                      <div className="color-picker text-center text-md-left">
                        <div className="size__item">
                          <h6 className="active">38</h6>
                          <h6>39</h6>
                          <h6>40</h6>
                          <h6>41</h6>
                          <h6>42</h6>
                          <h6>43</h6>
                          <h6>44</h6>
                          <h6>45</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pb-4">

                    <Col xs={6} md={1} lg={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Qty:</h6>
                      </div>
                    </Col>
                    <Col xs={6} md={5} lg={4} className="input_plus_mins">
                      <div className="qty">
                        <span className="minus bg-dark"><i className="lni-minus" /></span>
                        <input type="number" className="count" name="qty" defaultValue={1} />
                        <span className="plus bg-dark"><i className="lni-plus" /></span>
                      </div>
                    </Col>

                    <Col xs={6} md={2} className="d-flex align-items-start">
                      <div className="color-selection">
                        <h6 className="text-center text-md-left">Color:</h6>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="color-picker text-center text-md-left">

                        <div className="color-picker__item">
                          <input id="input10" type="radio" className="color-picker__input" name="color-input" defaultValue={1} />
                          <label htmlFor="input10" className="color-picker__color  color-picker__color--white" />
                        </div>

                        <div className="color-picker__item">
                          <input id="input11" type="radio" className="color-picker__input" name="color-input" defaultValue={4} />
                          <label htmlFor="input11" className="color-picker__color color-picker__color--color2" />
                        </div>

                        <div className="color-picker__item">
                          <input id="input12" type="radio" className="color-picker__input" name="color-input" defaultValue={7} />
                          <label htmlFor="input12" className="color-picker__color color-picker__color--color5" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} className="price-modal"><h1>$160.00</h1></Col>
                    <Col xs={12} className="modal-btn"><a target="_blank" href="https://www.amazon.com/" className="btn btn-medium btn-rounded btn-trans text-capitalize">Buy Now</a></Col>
                  </Row>
                </Col>
              </Row>

              <Row className="justify-content-end">
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