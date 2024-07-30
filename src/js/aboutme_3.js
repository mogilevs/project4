import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const aboutmeSwiper = new Swiper('.aboutme-swiper-wrapper', {
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
    aboutmeSwiper.slideNext();
  });

  aboutmeSwiper.on('SlideChange', () => {
    document.querySelectorAll('.aboutme-swiper-item').forEach(slide => {
      slide.classList.remove('swiper-slide-active');
    });
    aboutmeSwiper.slides[aboutmeSwiper.activeIndex].classList.add(
      'swiper-slide-active'
    );
  });
});
