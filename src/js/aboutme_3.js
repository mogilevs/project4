import { Navigation, Keyboard } from 'swiper/modules';

export const aboutmeSwiperConfig = {
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
  slidesPerView: 'auto',
  speed: 350,
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
};

export function setupNextButton(aboutmeSwiper) {
  const nextButton = document.querySelector('.aboutme-swiper-btn');
  nextButton.addEventListener('click', () => {
    aboutmeSwiper.slideNext();
  });
}

export function setupSlideChange(aboutmeSwiper) {
  aboutmeSwiper.on('slideChange', () => {
    document.querySelectorAll('.aboutme-swiper-item').forEach(slide => {
      slide.classList.remove('swiper-slide-active');
    });
    aboutmeSwiper.slides[aboutmeSwiper.activeIndex].classList.add(
      'swiper-slide-active'
    );
  });
}
