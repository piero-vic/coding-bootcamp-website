function toggleNavMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('mobile-menu-toggle');
}

const toggleButtons = Array.from(document.getElementsByClassName('toggle-btn'));
toggleButtons.forEach((element) => element.addEventListener('click', toggleNavMenu));
