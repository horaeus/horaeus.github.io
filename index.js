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