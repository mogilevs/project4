import faqAccordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionFaq = new faqAccordion('.accordion-container-faq', {
  duration: 400,
  showMultiple: true,
});

const faqButton = document.querySelectorAll('.ac-trigger');

faqButton.forEach(button => {
  button.addEventListener('click', () => {
    const arrowUpIcon = button.querySelector('.faq-icon');
    arrowUpIcon.classList.toggle('arrow-up');
  });
});
