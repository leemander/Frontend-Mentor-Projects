const header = document.getElementById("header");
const menuButton = document.getElementById("menu-button");

let menuOpen = false;

function toggleMenu() {
  header.setAttribute("data-menu-open", !menuOpen);
  menuOpen = !menuOpen;
}

menuButton.addEventListener("click", toggleMenu);
