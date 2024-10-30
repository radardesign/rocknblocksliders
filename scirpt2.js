const blockproj = new Swiper('.swiper.blocproj', {
  // Optional parameters
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
      crossFade: true
  },
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
