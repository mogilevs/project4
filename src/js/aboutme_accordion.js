import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.accordion-container-abm');

const openAcc = document.querySelectorAll('.down-icons');

openAcc.forEach(button => {
  button.addEventListener('click', () => {
    const upIcon = button.querySelector('.icons');
    upIcon.classList.toggle('active-up');
  });
});

const activeContent = document.getElementById('ac-6');
activeContent.classList.add('is-active');
const activeText = document.getElementById('tab-1');
activeText.style.height = 'auto';

export { openAcc, activeContent, activeText };
