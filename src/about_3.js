import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperAboutContainer = document.querySelector('.swiper-about');

  const swiperMarkup = `
    <div class="swiper swiperAbout">
      <div class="swiper-wrapper">
        <div class="About swiper-slide">HTML/CSS</div>
        <div class="swiper-slide">JavaScript</div>
        <div class="swiper-slide">React</div>
        <div class="swiper-slide">Node.js</div>
        <div class="swiper-slide">React Native</div>
        <div class="swiper-slide">Soft skills</div>
      </div>
      
<div class="swiper-button-wrap">
        <button type="button" class="aboutme-swiper-btn" aria-label="aboutme swiper button">
          <svg class="reviews-icon">
            <use href="......"></use>
          </svg>
        </button>
      </div>
    </div>
  `;
  swiperAboutContainer.innerHTML = swiperMarkup;

  const swiper = new Swiper('.swiperAbout', {
    navigation: {
      nextEl: '.swiper-button-wrap .aboutme-swiper-btn',
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
    speed: 300,
  });

  swiperAboutContainer.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      const activeElement = document.activeElement;
      const slides = swiperAboutContainer.querySelectorAll('.swiper-slide');
      const activeIndex = Array.prototype.indexOf.call(slides, activeElement);

      if (e.shiftKey) {
        if (activeIndex > 0) {
          slides[activeIndex - 1].focus();
        } else {
          slides[slides.length - 1].focus();
        }
      } else {
        if (activeIndex < slides.length - 1) {
          slides[activeIndex + 1].focus();
        } else {
          slides[0].focus();
        }
      }
      e.preventDefault();
    }
  });

  const nextButton = document.querySelector(
    '.swiper-button-wrap .aboutme-swiper-btn'
  );
  nextButton.addEventListener('click', () => {
    if (window.innerWidth >= 1440) {
      swiper.slides[swiper.activeIndex].parentNode.appendChild(
        swiper.slides[swiper.activeIndex]
      );
      swiper.update();
    } else {
      swiper.slideNext();
    }
  });
});
