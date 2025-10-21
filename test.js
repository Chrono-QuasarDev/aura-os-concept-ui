const navbarToggle = document.querySelector('.navbar-toggle'); 
const navbarMenu = document.querySelector('.header__nav');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});