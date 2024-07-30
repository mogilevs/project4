
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const swiper = new Swiper('.projects-swiper', {
 
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  initialSlide: 0,
  mousewheel: {
    invert: true,
    
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});


const prevButton = document.querySelector('.swiper-btn-prev');
const nextButton = document.querySelector('.swiper-btn-next');
const svgNext = document.querySelector('.turn-right');
const svgPrev = document.querySelector('.turn-left');


nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);
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


function updateNavigationButtons() {
  if (swiper.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    svgNext.classList.add('swiper-svg-disabled');
    swiper.allowSlideNext = false;
  } else {
    nextButton.classList.remove('swiper-button-disabled');
    svgNext.classList.remove('swiper-svg-disabled');
    swiper.allowSlideNext = true;
  }

  if (swiper.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
svgPrev.classList.add('swiper-svg-disabled');
    swiper.allowSlidePrev = false;
  } else {
    prevButton.classList.remove('swiper-button-disabled');
    svgPrev.classList.remove('swiper-svg-disabled');
    swiper.allowSlidePrev = true;
  }


}


updateNavigationButtons();