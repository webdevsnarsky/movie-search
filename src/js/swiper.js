import Swiper from 'swiper';
// eslint-disable-next-line import/prefer-default-export
export const mySwiper = new Swiper('.swiper-container', { 
  slidesPerView: 4,
  spaceBetween: 45,
  observer: true,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    // dynamicMainBullets: 10,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    318: {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        dynamicMainBullets: 3,
      }
    },
    625: {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        dynamicMainBullets: 5,
      }
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        dynamicMainBullets: 7,
      }
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 40,
      pagination: {
        dynamicMainBullets: 10,
      }
    }
  }
});