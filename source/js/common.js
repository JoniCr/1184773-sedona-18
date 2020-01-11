var mainNav = document.querySelector('.main-nav');
var btnClose = document.querySelector('.main-nav__toggle');
var btnOpen = document.querySelector('.top-menu__burger');

function inactivate() {
  mainNav.classList.add('inactive-menu');
}

function activate() {
  mainNav.classList.remove('inactive-menu');
}

btnClose.addEventListener('click', inactivate);
btnOpen.addEventListener('click', activate);
