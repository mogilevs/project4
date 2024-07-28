

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function updateNavigationButtons() {
      const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');
      

        if (swiper.isEnd) {
            nextButton.classList.add('swiper-button-disabled');
            swiper.allowSlideNext = false;
        } else {
            nextButton.classList.remove('swiper-button-disabled');
            swiper.allowSlideNext = true;
        }

        if (swiper.isBeginning) {
            prevButton.classList.add('swiper-button-disabled');
            swiper.allowSlidePrev = false;
        } else {
            prevButton.classList.remove('swiper-button-disabled');
            swiper.allowSlidePrev = true;
        }
    }

    swiper.on('slideChange', updateNavigationButtons);
});