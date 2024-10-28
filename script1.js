const heroSlider = new Swiper('.swiper.heroslider', {
  // Optional parameters
  slidesPerView: auto,
  effect: fade,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
