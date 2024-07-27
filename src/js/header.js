const mobMenuOpen = document.querySelector('.mob-menu-open-btn');
const mobMenu = document.querySelector('.mob-menu');
const mobMenuClose = document.querySelector('.mob-menu-close-btn');
const dropMenu = document.querySelector('.drop-menu-nav');
const dropMenuBtn = document.querySelector('.header-menu');
const mobMenuLink = document.querySelector('.mob-menu-nav');

mobMenuOpen.addEventListener('click', openMobMenu);
mobMenuClose.addEventListener('click', closeMobMenu);
dropMenuBtn.addEventListener('click', openDropMenu);
dropMenu.addEventListener('click', handlerScroll);
mobMenuLink.addEventListener('click', handlerScroll);
window.addEventListener('keydown', closeDropMenuECS);


function openMobMenu() {
  mobMenu.classList.add('is-open');
}

function closeMobMenu() {
  mobMenu.classList.remove('is-open');
}

function openDropMenu() {
  if (dropMenu.classList.contains('drop-menu-show')) {
    dropMenu.classList.remove('drop-menu-show');
  } else {
    dropMenu.classList.add('drop-menu-show');
  }
}

window.onclick = function (evt) {
  if (
    !evt.target.matches('.header-menu') &&
    !evt.target.matches('.drop-menu-nav')
  ) {
    dropMenu.classList.remove('drop-menu-show');
  }
};

function closeDropMenuECS(evt) {
  if (evt.key === 'Escape') {
    dropMenu.classList.remove('drop-menu-show');
  }
}

function handlerScroll(evt) {
  evt.preventDefault();
  if (mobMenu.classList.contains('is-open')) {
    mobMenu.classList.remove('is-open');
  }
    const target = evt.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(target);
    

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
}
