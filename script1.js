const heroSlider = new Swiper('.swiper.heroslider', {
  // Optional parameters
  slidesPerView: 1,
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
