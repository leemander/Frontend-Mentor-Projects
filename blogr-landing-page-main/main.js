const toggleMenuButton = document.getElementById("toggle-menu");
const menu = document.getElementById("navigation-menu");

const submenus = document.querySelectorAll(".header__sub-menu");

/*const productButton = document.getElementById("product-button");
const companyButton = document.getElementById("company-button");
const connectButton = document.getElementById("connect-button");

const productSubmenu = document.getElementById("product-submenu");
const companySubmenu = document.getElementById("company-submenu");
const connectSubmenu = document.getElementById("connect-submenu");
*/

function toggleShow(event, target) {
  const button = event.target;
  const element = document.getElementById(target);

  button.classList.toggle("active");

  submenus.forEach((submenu) => {
    if (submenu !== element) {
      submenu.classList.remove("show");
    }
  });

  element.classList.toggle("show");
}

toggleMenuButton.addEventListener("click", () => {
  submenus.forEach((submenu) => submenu.classList.remove("show"));
  menu.classList.toggle("show");
});
