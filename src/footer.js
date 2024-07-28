import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = {
  commentsElem: document.getElementById('comments'),
  emailElem: document.getElementById('email'),
  successMessage: document.getElementById('successMessage'),
  errorMessage: document.getElementById('errorMessage'),
  formElem: document.querySelector('.js-submit-form'),
  backdrop: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('.modal-close-btn'),
};

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

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

  if (emailPattern.test(email)) {
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

// відкривання модального вікна
function openModal() {
  form.backdrop.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

// закріття модального вікна
function closeModal() {
  form.backdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

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

  if (!emailPattern.test(emailValue)) {
    iziToast.error({
      title: 'Error:',
      message: 'Invalid email address',
    });
    return;
  }

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests/',
      {
        email: emailValue,
        comment: textComment,
      }
    );

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
