import React from 'react';
import '../assets/css/ImageGrid.css';
import img1 from '../assets/img/ImageGrid/package-1.jpg';
import img2 from '../assets/img/ImageGrid/package-2.jpg';
import img3 from '../assets/img/ImageGrid/package-3.jpg';
import img4 from '../assets/img/ImageGrid/package-4.jpg';

const ImageGrid = () => {
  const yachtInfo = [
    { name: "EXPRESS SEA BREAK: 4H", duration:"4H", length: "62FT", capacity: "25", price: "1300", modelYear: "2023 MODEL", imageName: "package-1.jpg", productId: '1', startTime: true},
    { name: "SHORT SEA BREAK: 1 DAY", duration:"1 DAY", length: "62FT", capacity: "25", price: "1300", modelYear: "2023 MODEL", imageName: "package-2.jpg", productId: '2', startTime: false },
    { name: "CLASSIC SEA BREAK: 2 DAYS",duration:"2 DAYS", length: "52FT", capacity: "17", price: "850", modelYear: "2022 MODEL", imageName: "package-3.jpg", productId: '3', startTime: false },
    { name: "CUSTOM SEA BREAK", duration:"", length: "52FT", capacity: "17", price: "850", modelYear: "2022 MODEL", imageName: "package-4.jpg", productId: '4' }
  ];

  // Function to open modal based on the provided modal ID
  const morphicWindow = (productId) => {
    // Example to show modal, adjust based on your project's implementation
      let modal = 'morphic-window3';
      if(productId == 4)
      {
            modal = 'morphic-window4';
      }
    const modalElement = document.getElementById(modal);
    if (modalElement) {
        if(productId != 4)
        {
            let selectedProduct = yachtInfo.filter(function (e) {
                return e.productId == productId;
            });
            if(selectedProduct[0].startTime){
                $('.express-time').show();
            }
            else{
                $('.express-time').hide();
            }
            $(".product-name").html(selectedProduct[0].name)
            $("select[name='yacht_size'], select[name='discount']").removeClass('error').val('').change();
            $("select[name='yacht_size'], select[name='discount']").next('span').hide();
            $("input[name='name']").val(selectedProduct[0].name)
            $("input[name='duration']").val(selectedProduct[0].duration)
            $(".discount-dropdown").addClass('d-none');
            $(".morphic-title h3").html(selectedProduct[0].name)
        }
      modalElement.style.display = 'block'; // Or another method to display the modal
      document.body.classList.add('show-modal'); // Optionally add a class to body to show modal is active
      packageSlider();
    }
  };

  function packageSlider(){
    $(".products").owlCarousel({
      items: 1,
      autoPlay: 1500, //Set AutoPlay to 3 seconds
      dots: true,
      loop: true
    });
  }
  return (
    <div className="image-grid">
      {yachtInfo.map((yacht, index) => {
        const images = [img1, img2, img3, img4];
        const imageToUse = images[index];
        
        return (
          <div className="image-container" key={index}>
            <img src={imageToUse} alt={yacht.name} />
            <div className="image-description">
              <div className="name-and-book">
                <h3>{yacht.name}</h3>
                <div className="book-now-container">
                 {/* Replace button with an anchor tag if needed, or use button with onClick */}
                 <button className="book-now-btn" onClick={() => morphicWindow(yacht.productId)}>BOOK NOW</button>
                </div>
              </div>
              <div className="details-row">
                <p><span className="detail-label">LENGTH</span><br></br><span className="detail-value">{yacht.length}</span></p>
                <p><span className="detail-label">CAPACITY</span><br></br><span className="detail-value">{yacht.capacity} PAX</span></p>
                <p><span className="detail-label">PRICE</span><br></br><span className="detail-value">{yacht.price}</span></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
