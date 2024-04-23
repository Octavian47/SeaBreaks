import { useEffect } from 'react';
import surfingImg from '../assets/img/loader.png';
const Preloader = () => {
  useEffect(() => {
    setTimeout(function () {
      $('.loader').fadeOut();
    }, 1500);
  }, []);
  return <div className="loader">
      <div className="inner-loader">
        <div className="image-holder-loader">
          <img src={surfingImg} />
        </div>
        <div className="circle-loader">
          <div className="wave-loader">
          </div>
        </div>
      </div>
    </div>;
};
export default Preloader;