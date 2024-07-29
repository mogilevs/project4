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
    if (scrolled > 100) {
      goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}