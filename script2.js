const blockproj = new Swiper('.swiper.blocproj', {
  // Optional parameters
  slidesPerView: 4,
  grid: {
    column: 2,
    rows: 2,
  },
  spaceBetween: 8,
  effect: "fade",
  fadeEffect: {
      crossFade: true
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next1',
    prevEl: '.swiper-btn-prev1',
  },
});
