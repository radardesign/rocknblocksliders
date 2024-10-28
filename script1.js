const heroSlider = new Swiper('.swiper.heroslider', {
  // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
