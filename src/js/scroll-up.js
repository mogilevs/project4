const goTopBtn = document.querySelector('.go-top');
goTopBtn.addEventListener('click', goTop);

function goTop() {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}
