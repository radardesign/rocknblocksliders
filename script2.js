const blockproj = new Swiper('.swiper.blocproj', {
  // Optional parameters
  slidesPerView: 2,
  grid: {
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
