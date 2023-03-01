const openShareMenuButton = document.getElementById("open-share-menu");
const closeShareMenuButton = document.getElementById("close-share-menu");
const shareMenu = document.getElementById("share-menu");
const infoElement = document.getElementById("info");

let shareMenuIsOpen = false;

function openShareMenu() {
  if (screen.width < 800) infoElement.classList.add("hidden");
  shareMenu.classList.add("open");
  openShareMenuButton.classList.add("active");
  shareMenuIsOpen = true;
}

function closeShareMenu() {
  infoElement.classList.remove("hidden");
  shareMenu.classList.remove("open");
  openShareMenuButton.classList.remove("active");
  shareMenuIsOpen = false;
}

closeShareMenuButton.addEventListener("click", closeShareMenu);

document.addEventListener("click", (event) => {
  const { target } = event;

  if (target !== openShareMenuButton && shareMenu.contains(target) === false) {
    //if the the click target is outside of the share menu or is not the open menu button then close the menu
    closeShareMenu();
  }

  if (target === openShareMenuButton) {
    //when the open menu button is clicked either open or close the menu based on its current status
    shareMenuIsOpen ? closeShareMenu() : openShareMenu();
  }
});
