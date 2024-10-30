const blockproj = new Swiper('.swiper.blocproj', {
  // Optional parameters
  slidesPerView: 4,
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
