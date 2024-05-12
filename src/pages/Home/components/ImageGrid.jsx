import React from 'react';
import '../assets/css/ImageGrid.css';
import img1 from '../assets/img/ImageGrid/package-1.jpg';
import img2 from '../assets/img/ImageGrid/package-2.jpg';
import img3 from '../assets/img/ImageGrid/package-3.jpg';
import img4 from '../assets/img/ImageGrid/package-4.jpg';

const ImageGrid = () => {
  const yachtInfo = [
    { name: "EXPRESS SEA BREAK: 5H", duration:"5H", length: "62FT", capacity: "25", price: "1300", modelYear: "2023 MODEL", imageName: "package-1.jpg", modalId: 'morphic-window1' },
    { name: "SHORT SEA BREAK: 1 DAY", duration:"1 DAY", length: "62FT", capacity: "25", price: "1300", modelYear: "2023 MODEL", imageName: "package-2.jpg", modalId: 'morphic-window2' },
    { name: "CLASSIC SEA BREAK: 2 DAYS",duration:"2 DAYS", length: "52FT", capacity: "17", price: "850", modelYear: "2022 MODEL", imageName: "package-3.jpg", modalId: 'morphic-window3' },
    { name: "CUSTOM SEA BREAK", duration:"", length: "52FT", capacity: "17", price: "850", modelYear: "2022 MODEL", imageName: "package-4.jpg", modalId: 'morphic-window4' }
  ];

  // Function to open modal based on the provided modal ID
  const morphicWindow = (modalId) => {
    // Example to show modal, adjust based on your project's implementation
    const modalElement = document.getElementById('morphic-window3');
    if (modalElement) {
     let selectedProduct = yachtInfo.filter(function (e) {
        return e.modalId == modalId;
      });
      $("select[name='yacht_size'], select[name='discount']").removeClass('error').val('').change();
      $("select[name='yacht_size'], select[name='discount']").next('span').hide();
      $("input[name='name']").val(selectedProduct[0].name)
      $("input[name='duration']").val(selectedProduct[0].duration)
      $("input[name='length']").val(selectedProduct[0].length)
      $("input[name='capacity']").val(selectedProduct[0].capacity)
      $(".discount-dropdown").addClass('d-none');
      $(".morphic-title h3").html(selectedProduct[0].name)
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
                 <button className="book-now-btn" onClick={() => morphicWindow(yacht.modalId)}>BOOK NOW</button>
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
