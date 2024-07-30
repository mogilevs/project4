const form = {
  commentsElem: document.getElementById('comments'),
  emailElem: document.getElementById('email'),
  successMessage: document.getElementById('successMessage'),
  errorMessage: document.getElementById('errorMessage'),
  formElem: document.querySelector('.js-submit-form'),
  backdrop: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('.modal-close-btn'),
};

const EMAIL_PATTERN = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const API_URL = 'https://portfolio-js.b.goit.study/api/requests/';

//==========================================================

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
//===========================================================

export { form, EMAIL_PATTERN, API_URL, openModal, closeModal };
//=============================================================
