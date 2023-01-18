const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

const interactiveElements = [...menu.querySelectorAll("a"), menuButton];
let index = 0;

function handleTabPress(e) {
  if (menu.getAttribute("aria-expanded") === "true") {
    e.preventDefault();
    interactiveElements[index].focus();
    if (e.shiftKey) {
      if (index === 0) {
        index = 4;
      } else {
        index--;
      }
    } else {
      if (index === interactiveElements.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }
  }
}

function handleMenuButtonClick() {
  if (menu.getAttribute("aria-expanded") === "false") {
    menu.setAttribute("aria-expanded", true);
    menuButton.style.backgroundImage = "url(./images/icon-close.svg)";
    document.body.classList.add("menu-open");
  } else {
    menu.setAttribute("aria-expanded", false);
    menuButton.style.backgroundImage = "url(./images/icon-hamburger.svg)";
    document.body.classList.remove("menu-open");
  }
}

menuButton.addEventListener("click", handleMenuButtonClick);
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    handleTabPress(e);
  } else {
    return;
  }
});
