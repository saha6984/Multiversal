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

  $('.multiple-items').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: '60px',
    arrows: true,
    prevArrow: `<button type='button' class='prev btn rounded-pill'><i class="fal fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='next btn rounded-pill'><i class="fal fa-chevron-right"></i></button>`,
    responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.testimonial-container').slick({
    dots: true,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '60px',
    arrows: false,
    responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  new WOW().init();

  $(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').addClass('active');
        $('.btn-whatsapp').addClass('has-scroll');
      } else {
        $('.scrollToTop').removeClass('active');
        $('.btn-whatsapp').removeClass('has-scroll');
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

  });


})(jQuery);