import faqAccordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionFaq = new faqAccordion('.accordion-container-faq', {
  duration: 400,
  showMultiple: true,
});

const faqButton = document.querySelectorAll('.faq-show-text-button');
faqButton.forEach(button => {
  button.addEventListener('click', () => {
    const arrowUpIcon = button.querySelector('.faq-icon');
    arrowUpIcon.classList.toggle('arrow-up');
  });
});


// function accordionClip() {
// const faqList = document.querySelectorAll('.faq-list-item');
// // const faqTrigger = document.querySelectorAll('.faq-question');

//     faqList.forEach((item) => {
//         console.log(item);
//       item.addEventListener('click', () => {
//           item.classList.toggle('active');
//       });
//     });
// }
// accordionClip();

// const faqList = document.querySelector('.faq-list-item');
// const arrowUpIcon = document.querySelector('.faq-icon');
// faqList.addEventListener('click', handlerAccordion)

// function handlerAccordion(evt) {
//   if (evt.currentTarget === evt.target) {
//     return;
//     }

// //  const arrowUpIcon = document.querySelector('.faq-icon');
// //           arrowUpIcon.classList.toggle('arrow-up');
//   const parentList = evt.target.closest('.faq-list-item');
//     console.log(parentList);

// }

// const faqList = document.querySelector(".faq-list");
// const arrowUpIcon = document.querySelector(".faq-icon");
// faqList.addEventListener("click", handlerAccordion);

// function handlerAccordion(evt) {
//   if (evt.currentTarget === evt.target) {
//     return;
//   }

//   const parentList = evt.target.closest(".faq-list-item");
//   console.log(parentList);
  //    arrowUpIcon.classList.toggle('arrow-up');

  //  if (!parentList.classList.contains('is-active')) {
  //       parentList.classList.add('is-active');
  //     } else {
  //       parentList.classList.remove('is-active');
  //     }
// }


// function accordionClip() {
//   const faqList = document.querySelectorAll('.faq-list');
//   const faqTrigger = document.querySelectorAll('.faq-list-item');

//   faqTrigger.forEach(trigger => {
//     console.log(trigger);
//     trigger.addEventListener('click', () => {
//       const parent = trigger.parentNode;
//       console.log(parent);

//       if (!parent.classList.contains('active')) {
//         parent.classList.add('active');
//       } else {
//         parent.classList.remove('active');
//       }
//     });
//   });
// }
// accordionClip();