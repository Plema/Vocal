$(document).ready(function () {
  $('.slider-reviews').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    swipe: true,
    waitForAnimate: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          speed: 700,
          waitForAnimate: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          speed: 700,
          waitForAnimate: true,
        },
      },
    ],
  })
})
