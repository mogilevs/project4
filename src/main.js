import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';

import { heroBg } from './js/hero.js';
import {
  aboutmeSwiperConfig,
  setupNextButton,
  setupSlideChange,
} from './js/aboutme_3.js';
import { coversSection, observer } from './js/covers.js';
import {
  form,
  EMAIL_PATTERN,
  API_URL,
  openModal,
  closeModal,
} from './js/footer.js';

import './js/header.js';
import './js/review.js';
import './js/faq';
import './js/projects.js';
import './js/aboutme_accordion.js';
import './js/scroll-up.js';

document.addEventListener('DOMContentLoaded', () => {
  const aboutmeSwiper = new Swiper(
    '.aboutme-swiper-wrapper',
    aboutmeSwiperConfig
  );

  setupNextButton(aboutmeSwiper);
  setupSlideChange(aboutmeSwiper);
});

//================COVERS=============================================
observer.observe(coversSection);

//================FOOTER=============================================

// обмеження розміру comments
form.commentsElem.addEventListener('blur', function () {
  const maxLength = 10;
  const textComment = form.commentsElem.value;
  if (textComment.length > maxLength) {
    form.commentsElem.value = textComment.substring(0, maxLength) + '...';
  }
});

// перевірка на валідність email
form.emailElem.addEventListener('input', function () {
  form.successMessage.style.display = 'none';
  form.errorMessage.style.display = 'none';
  const email = form.emailElem.value.trim();
  if (email === '') {
    form.emailElem.classList.remove('success');
    form.emailElem.classList.remove('error');
    return;
  }

  if (EMAIL_PATTERN.test(email)) {
    form.emailElem.classList.add('success');
    form.emailElem.classList.remove('error');
    form.successMessage.style.display = 'block';
  } else {
    form.emailElem.classList.add('error');
    form.emailElem.classList.remove('success');
    form.errorMessage.style.display = 'block';
  }
});

// збереження данних localStorage
form.commentsElem.addEventListener('input', function () {
  localStorage.setItem('comments', form.commentsElem.value);
});

form.emailElem.addEventListener('input', function () {
  localStorage.setItem('email', form.emailElem.value);
});

// загрузка з localStorage
document.addEventListener('DOMContentLoaded', function () {
  const savedComments = localStorage.getItem('comments');
  const savedEmail = localStorage.getItem('email');
  if (savedComments) {
    form.commentsElem.value = savedComments;
  }
  if (savedEmail) {
    form.emailElem.value = savedEmail;
  }
});
// обробник подій для модал вікна
form.modalCloseBtn.addEventListener('click', closeModal);
form.backdrop.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// обробник відпровки форми
form.formElem.addEventListener('submit', async function (event) {
  event.preventDefault();
  const emailValue = form.emailElem.value.trim();
  const textComment = form.commentsElem.value;

  if (!EMAIL_PATTERN.test(emailValue)) {
    iziToast.error({
      title: 'Error:',
      message: 'Invalid email address',
    });
    return;
  }

  try {
    const response = await axios.post(API_URL, {
      email: emailValue,
      comment: textComment,
    });

    if (response.status === 201) {
      openModal();
      form.successMessage.style.display = 'none';
      form.emailElem.classList.remove('success');
      form.formElem.reset();
      localStorage.removeItem('email');
      localStorage.removeItem('comments');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error:',
      message: 'Error sending request. Try again.',
    });
  }
});
