openCloseMenu = document.getElementById("open-close-menu");
mobileNav = document.getElementById("mobile-nav");

function openClose(openOrClose) {
  if (openOrClose === "open menu") {
    openCloseMenu.src = "images/icon-close.svg";
    openCloseMenu.alt = "close menu";
  } else if (openOrClose === "close menu") {
    openCloseMenu.src = "images/icon-hamburger.svg";
    openCloseMenu.alt = "open menu";
  }

  mobileNav.classList.toggle("nav__list--show");
}

openCloseMenu.addEventListener("click", () => {
  openClose(openCloseMenu.alt);
});
