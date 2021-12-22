// configure Swiper to use modules
var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.welcome-slider',
    clickable: true,
    bulletElement: 'div',
    bulletClass: 'round-slide',
    bulletActiveClass: 'active',
  },
});

const burger = document.querySelector('.burger');
const closeIcon = document.querySelector('.close-icon');
const headerNav = document.querySelector('.header-menu');

function showMenu() {
  closeIcon.style.display = 'block';
  burger.style.display = 'none';
  headerNav.style.display = 'block';
}
function hideMenu() {
  closeIcon.style.display = 'none';
  burger.style.display = 'flex';
  headerNav.style.display = 'none';
}

burger.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);
