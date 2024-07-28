import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    initialSlide: 0,
    speed: 650,
    preventClicks: true,
    freeMode: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    slidesPerView: 1,
    on: {
        slideChange: updateNavigationButtons,
    }
});

// Function to update the state of navigation buttons
function updateNavigationButtons() {
    const buttonPrev = document.querySelector('.swiper-button-prev');
    const buttonNext = document.querySelector('.swiper-button-next');
    buttonNext.disabled = swiper.isEnd;
    buttonPrev.disabled = swiper.isBeginning;
}

// Add event listeners for custom navigation
const buttonNext = document.querySelector('.swiper-button-next');
const buttonPrev = document.querySelector('.swiper-button-prev');

buttonNext.addEventListener('click', moveNext);
buttonPrev.addEventListener('click', movePrev);
document.addEventListener('keydown', keyMove);

function keyMove(evt) {
    if (evt.code === 'ArrowRight') {
        moveNext();
    }
    if (evt.code === 'ArrowLeft') {
        movePrev();
    }
}

function moveNext() {
    swiper.slideNext();
    updateNavigationButtons();
}

function movePrev() {
    swiper.slidePrev();
    updateNavigationButtons();
}

// Initial button state update
updateNavigationButtons();

// Disable the next button if it's the last slide and previous button if it's the first slide initially
const slides = document.querySelectorAll('.swiper-slide');
if (swiper.activeIndex === slides.length - 1) {
    buttonNext.disabled = true;
}

if (swiper.activeIndex === 0) {
    buttonPrev.disabled = true;
}


// import Swiper from 'swiper';
// document.addEventListener('DOMContentLoaded', () => {
//     const swiper = new Swiper('.swiper', {
//         direction: 'horizontal',
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });

//     function updateNavigationButtons() {
//       const prevButton = document.querySelector('.swiper-button-prev');
//         const nextButton = document.querySelector('.swiper-button-next');
      

//         if (swiper.isEnd) {
//             nextButton.classList.add('swiper-button-disabled');
//             swiper.allowSlideNext = false;
//         } else {
//             nextButton.classList.remove('swiper-button-disabled');
//             swiper.allowSlideNext = true;
//         }

//         if (swiper.isBeginning) {
//             prevButton.classList.add('swiper-button-disabled');
//             swiper.allowSlidePrev = false;
//         } else {
//             prevButton.classList.remove('swiper-button-disabled');
//             swiper.allowSlidePrev = true;
//         }
//     }

//     swiper.on('slideChange', updateNavigationButtons);
// });