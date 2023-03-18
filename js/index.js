const menuButton = document.querySelector('.btn-menu-toggle');
const primaryMenu = document.querySelector('#primary-menu');

menuButton.addEventListener('click', () => {
  primaryMenu.classList.toggle('active');
});

/*
$(document).ready(function() {
    $(".menu-toggle").click(function() {
      $("#primary-menu").toggleClass("active");
    });
  });
*/

const menuBtn = document.querySelector('.btn-menu-toggle');
const menu = document.querySelector('#primary-menu');

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
