import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

class ReviewAPI {
    async getReviews() {
        try {
            const res = await axios.get('/reviews');
            return res.data;
        } catch (error) {
            throw new Error('Error fetching reviews');
        }
    }
}

const reviewsList = document.querySelector('.js-reviews-list');
const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
const swiperContainer = document.querySelector('.swiper-container');



const createLoader = () => {
    const loaderContainer = document.createElement('div');
    loaderContainer.classList.add('loader-container', 'js-loader-container', 'hidden');

    const loader = document.createElement('span');
    loader.classList.add('loader', 'js-loader');

    loaderContainer.appendChild(loader);
    swiperContainer.appendChild(loaderContainer);

    return loaderContainer;
};

const loaderContainer = createLoader();

const toggleLoader = (show) => {
  if (show) {
    loaderContainer.classList.remove('hidden');
  } else {
    loaderContainer.classList.add('hidden');
  }
};



function createMarkup(arr) {
    const markup = arr.map(({ _id, author, avatar_url, review }) =>
         `<li class="swiper-slide" data-id="${_id}">
          <div class="swiper-card">
            <div class="card-image" style="background: #e0e0e0 url('${avatar_url}') no-repeat center center; background-size: cover;"></div>
            <h3 class="card-title">${author}</h3>
            <p class="card-text">${review}</p>
          </div>
        </li>`).join('');
    
    return reviewsList.insertAdjacentHTML("beforeend", markup);
}


async function fetchAndDisplayReviews() {
    const reviewAPI = new ReviewAPI();
    toggleLoader(true);
    try {
        const data = await reviewAPI.getReviews();

        if (data && data.length > 0) {
            createMarkup(data);
            toggleLoader(false);
        }
        else {
            toggleLoader(false);
            showErrorMessage();
            showError();
        }
    } catch (error) {
        toggleLoader(false);
        showErrorMessage();
        showError();
    }

}


const swiperReview = new Swiper('.swiper', {
    initialSlide: 0,
    speed: 650,
    spaceBetween: 16,
    preventClicks: true,
    freeMode: false,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        375: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1440: {
            slidesPerView: 4
        }
    }, 
        on: {
        slideChange: updateButtonStates,
    }
    });

function updateButtonStates() {
    buttonNext.disabled = swiperReview.isEnd;
    buttonPrev.disabled = swiperReview.isBeginning;
}


function showErrorMessage() {
    reviewsList.innerHTML = '<div class="err-container"></div>';
    const errorAnimationContainer = document.querySelector('.err-container');
       lottie.loadAnimation({
        container: errorAnimationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './img/redcat.json'  
    });
    buttonNext.disabled = true;
    buttonPrev.disabled = true;
}

buttonNext.addEventListener('click', goToNextSlide); 
buttonPrev.addEventListener('click', goToPrevSlide); 
document.addEventListener('keydown', handleKeyNavigation);

function handleKeyNavigation(evt) {
  if (evt.code === 'ArrowRight') {
    goToNextSlide();
  }
  if (evt.code === 'ArrowLeft') {
    goToPrevSlide();
  }
}

function goToNextSlide() {
    swiperReview.slideNext();
    updateButtonStates();
}
function goToPrevSlide() {
    swiperReview.slidePrev();
    updateButtonStates();
}

const slides = document.querySelectorAll('.swiper-slide'); 
if (swiperReview.activeIndex === slides.length - 1) { 
    buttonNext.addEventListener('click', moveNext); 
buttonNext.disabled = true;
  } 


if (swiperReview.activeIndex === 0) { 
    buttonPrev.disabled = true;
}

function showError() {
    return iziToast.error({
        icon: false,
        message: 'Failed to load data. Please try again later!',
        backgroundColor: '#ed3b44',
        maxWidth: 400,
        timeout: 2000,
        messageColor: '#fafafb',
        messageSize: '16',
        theme: 'dark',
        progressBarColor: '#b51b1',
        position: 'bottomRight',
    });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayReviews);







