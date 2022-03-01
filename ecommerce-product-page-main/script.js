const openMobileMenu = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");

function toggleMenu() {
  mobileMenu.classList.toggle("open");
}

openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
