import { toggleDocumentAttribute } from '@/utils';
import { useEffect, useState } from 'react';
import WOW from 'wow.js';
import Preloader from './components/Preloader';
import MobileNavigation from './components/MobileNavigation';
import NavigationBar from './components/NavigationBar';
import LocationSlider from './components/LocationSlider';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Advertisement from './components/Advertisement';
import Features from './components/Features';
import ReadMoreParallax from './components/ReadMoreParallax';
import ProductSwiper from './components/ProductSwiper';  
import ProductViewModals from './components/ProductViewModals'; 
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import ClientsSlider from './components/ClientsSlider';
import ContactUsForm from './components/ContactUsForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import '@vendor/css/LineIcons.min.css';
import './assets/css/style.css';
import './assets/css/navigation.css';
const Home = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    const isMobileNow = window.innerWidth < 768;
    console.log('Is mobile:', isMobileNow); // Logs the value on resize
    setIsMobile(isMobileNow);
  };

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

    return () => {
      window.removeEventListener('resize', handleResize);
      toggleDocumentAttribute('data-spy', 'scroll', 'body', true);
      toggleDocumentAttribute('data-target', '.navbar', 'body', true);
      toggleDocumentAttribute('data-offset', '90', 'body', true);
    };
  }, []);
  return <>
      <Preloader />

      {isMobile ? <MobileNavigation /> : <NavigationBar />}

      <LocationSlider />

      <HeroSlider />

      <AboutUs />

      <Advertisement />

      <Features />

      <ReadMoreParallax />

      <ProductSwiper />

      <Showcase />

      <Testimonials />

      <ClientsSlider />

      <ContactUsForm />

      <ProductViewModals />

      <Footer />

      <BackToTop />
    </>;
};
export default Home;