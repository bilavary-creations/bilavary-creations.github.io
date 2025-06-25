// Toggle mobile nav
const nav = document.querySelector('.nav');
const btn = document.querySelector('.nav-toggle');
btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});