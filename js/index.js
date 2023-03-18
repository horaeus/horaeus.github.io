const menuBtn = document.querySelector('nav .nav-toggle');
const menu = document.querySelector('nav #primary-menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('show');
    menuOpen = false;
  }
});
