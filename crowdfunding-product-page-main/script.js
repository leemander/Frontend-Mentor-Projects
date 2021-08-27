const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const main = document.getElementById("main");

const changeMenuButton = (button1, button2) => {
  button1.classList.toggle("hide");
  button2.classList.toggle("hide");
};

const showHideMenu = () => {
  if (mobileMenu.classList.contains("hide")) {
    main.style.filter = "contrast(10%)";
  } else {
    main.style.filter = "none";
  }
  mobileMenu.classList.toggle("hide");
};

hamburger.addEventListener("click", () => {
  changeMenuButton(hamburger, closeMenu);
  showHideMenu();
});

closeMenu.addEventListener("click", () => {
  changeMenuButton(closeMenu, hamburger);
  showHideMenu();
});
