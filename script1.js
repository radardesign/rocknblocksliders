const heroSlider = new Swiper('.swiper.heroslider', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
