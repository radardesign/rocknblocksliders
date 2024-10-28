const heroSlider = new Swiper('.swiper.heroslider', {
  // Optional parameters
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
      crossFade: true
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
