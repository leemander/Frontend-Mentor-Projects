const openMenuBtn = document.getElementById("open-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-mobile-menu");

function openCloseMenu() {
  mobileMenu.classList.toggle("mobile-menu--open");
}

openMenuBtn.addEventListener("click", openCloseMenu);
closeMenuBtn.addEventListener("click", openCloseMenu);
