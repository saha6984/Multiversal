(function ($) {
  "use strict";

  $('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });
  new WOW().init();
  

})(jQuery);