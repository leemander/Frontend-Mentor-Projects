const openNavButton = document.getElementById("open-nav");
const nav = document.getElementById("nav");
const links = nav.querySelectorAll("a");
const lastLink = links[links.length - 1];
const closeNavButton = document.getElementById("close-nav");

openNavButton.addEventListener("click", () => {
  nav.classList.add("open");
  closeNavButton.focus();
});

closeNavButton.addEventListener("click", () => {
  nav.classList.remove("open");
  openNavButton.focus();
});

lastLink.addEventListener("keydown", (e) => {
  if (e.shiftKey === false && e.key === "Tab") {
    e.preventDefault();
    closeNavButton.focus();
  }
});

closeNavButton.addEventListener("keydown", (e) => {
  if (e.shiftKey === true && e.key === "Tab") {
    e.preventDefault();
    lastLink.focus();
  }
});

document.body.addEventListener("click", (e) => {
  //if the click target isn't the open nav button or located within the nav then close the nav
  if (e.target !== openNavButton && !e.target.closest("nav")) {
    nav.classList.remove("open");
  }
});
