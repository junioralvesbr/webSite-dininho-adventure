const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  initialSlide: 0,
  loop: true,
  spaceBetween: 1000,
  centeredSlides: true,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
