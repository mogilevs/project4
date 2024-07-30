export const coversSection = document.querySelector('.covers');

export const options = {
  rootMargin: '0px',
  threshold: 0,
};

export function addToggleAnimation(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      coversSection.classList.add('animate');
    } else {
      coversSection.classList.remove('animate');
    }
  });
}

export const observer = new IntersectionObserver(addToggleAnimation, options);

observer.observe(coversSection);
