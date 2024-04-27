import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/LocationSlider.css';

const LocationCarousel = () => {
  const [selectedLocation, setSelectedLocation] = useState('LOS ANGELES');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const locations = ['DUBAI', 'MIAMI', 'LOS ANGELES', 'LONG BEACH', 'NEWPORT BEACH'];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <section className="custom-carousel-section">
      <div className="custom-carousel-container">
        <Slider {...settings}>
          {locations.map((location) => (
            <div key={location} className="custom-carousel-item" onClick={() => handleLocationClick(location)}>
              <h3 className={selectedLocation === location ? 'selected' : ''}>
                {location}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="custom-slick-arrow custom-slick-next"
      onClick={onClick}
      aria-label="Next"
    >
      <i className="fas fa-chevron-right" />
    </button>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="custom-slick-arrow custom-slick-prev"
      onClick={onClick}
      aria-label="Previous"
    >
      <i className="fas fa-chevron-left" />
    </button>
  );
};

export default LocationCarousel;
