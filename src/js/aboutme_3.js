import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.aboutme-swiper-wrapper', {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: '.aboutme-swiper-btn',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    centeredSlidesBounds: true,
    speed: 350,
  });

  const nextButton = document.querySelector('.aboutme-swiper-btn');
  nextButton.addEventListener('click', () => {
    if (window.innerWidth >= 1440) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      activeSlide.parentNode.appendChild(activeSlide);
      swiper.update();
    } else {
      swiper.slideNext();
    }
  });
});
