const blockproj = new Swiper('.swiper.blocproj', {
  // Optional parameters
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 8,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next1',
    prevEl: '.swiper-btn-prev1',
  },
});
