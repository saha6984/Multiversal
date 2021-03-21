(function ($) {
  "use strict";

  var $body = $('body'),
    $window = $(window),
    $document = $(document),
    $backToTop = $('.scrollToTop'),
    $slickSlider = $('.slick-slider'),
    $slickSliderMultiple = $('.multiple-items'),
    $slickSlidertestimonial = $('.testimonial-container'),
    $btnWhatsapp = $('.btn-whatsapp');
  $mixItUpGallery = $('.mixitup-container');



  $document.ready(function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    new WOW().init();

    if ($slickSlider.length > 0) {
      $slickSlider.slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
      });
    };
    if ($slickSliderMultiple.length > 0) {
      $slickSliderMultiple.slick({
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
        ]
      });
    }
    if ($slickSlidertestimonial.length > 0) {
      $slickSlidertestimonial.slick({
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
    }
    if ($backToTop.length > 0) {
      $backToTop.on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: '0px'
        }, 800);
      });
      $window.on('scroll', function (event) {
        var scrollPosition = $window.scrollTop(),
          windowHeight = $window.height() / 2;
        if (scrollPosition > windowHeight) {
          $backToTop.addClass('active');
          $btnWhatsapp.addClass('has-scroll');
        } else {
          $backToTop.removeClass('active');
          $btnWhatsapp.removeClass('has-scroll');
        }
      });
    }

  });

  if ($mixItUpGallery.length > 0) {
    var $mixItUpGallery = document.querySelector('.mixitup-container');
    var mixer = mixitup($mixItUpGallery);
  }





})(jQuery);