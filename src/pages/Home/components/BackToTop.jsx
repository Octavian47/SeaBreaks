import { useEffect } from 'react';
const BackToTop = () => {
  useEffect(() => {
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();
      if (scrollTop && scrollTop > 500) $('.scroll-top-arrow').fadeIn('slow');else $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }, []);
  return <span className="scroll-top-arrow">
      <i className="fas fa-angle-up" />
    </span>;
};
export default BackToTop;