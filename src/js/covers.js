const coversSection = document.querySelector('.covers');

const options = {
  rootMargin: '0px',
  threshold: 0,
};

function addToggleAnimation(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      coversSection.classList.add('animate');
    } else {
      coversSection.classList.remove('animate');
    }
  });
}

const observer = new IntersectionObserver(addToggleAnimation, options);

observer.observe(coversSection);
