import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.accordion-container');

const titles = document.querySelectorAll('.accordion-title');
const contents = document.querySelectorAll('.accordion-content');

titles.forEach(item =>
  item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
      activeContent.classList.remove('active');
      item.classList.remove('active');

      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach(element => {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });

      titles.forEach(element => element.classList.remove('active'));

      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  })
);

document.querySelector('[data-tab="tab-1"]').classList.add('active');
document.querySelector('#tab-1').classList.add('active');
document.querySelector('#tab-1').style.maxHeight =
  document.querySelector('#tab-1').scrollHeight + 'px';

// function setupAccordion() {
//   // Select all accordion headers
//   const headers = document.querySelectorAll('.accordion-title');

// Add click event listener to each header
//   headers.forEach(header => {
//     header.addEventListener('click', () => {
//       // Get the associated tab id from the data-tab attribute
//       const tabId = header.getAttribute('data-tab');
//       const content = document.getElementById(tabId);

//       // Check if the content is already visible
//       const isOpen = content.classList.contains('is-active');

//       // Close all open contents
//       document.querySelectorAll('.accordion-content').forEach(section => {
//         section.classList.remove('is-active');
//         section.previousElementSibling
//           .querySelector('.icons')
//           .classList.remove('up-icons');
//       });

//       // If the content was not open, open it
//       if (!isOpen) {
//         content.classList.add('is-active');
//         header.querySelector('.icons').classList.add('up-icons');
//       }
//     });
//   });
// }

// const accButton = document.querySelectorAll('.down-icons');
// accButton.forEach(button => {
//   button.addEventListener('click', () => {
//     const upIcon = button.querySelector('.icons');
//     upIcon.classList.add('active');
//   });
// });
