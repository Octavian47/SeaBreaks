import { useEffect } from 'react';
import { toggleDocumentAttribute } from '@/utils';
import WOW from 'wow.js';
import Preloader from './components/Preloader';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HeroStandalone from './components/HeroStandalone';
import StandaloneContent from './components/StandaloneContent';
import './assets/css/style.css';
const Standalone = () => {
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
    toggleDocumentAttribute('data-target', '.side_menu', 'body');
    toggleDocumentAttribute('data-offset', '90', 'body');
    return () => {
      toggleDocumentAttribute('data-spy', 'scroll', 'body', true);
      toggleDocumentAttribute('data-target', '.side_menu', 'body', true);
      toggleDocumentAttribute('data-offset', '90', 'body', true);
    };
  }, []);
  return <>
      <Preloader />

      <NavigationBar headerClassName='other-page' />

      <HeroStandalone />

      <StandaloneContent />

      <Footer />

      <BackToTop />
    </>;
};
export default Standalone;