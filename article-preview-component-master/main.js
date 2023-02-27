const openShareMenuButton = document.getElementById("open-share-menu");
const closeShareMenuButton = document.getElementById("close-share-menu");
const shareMenu = document.getElementById("share-menu");
const infoElement = document.getElementById("info");

function openShareMenu() {
  if (screen.width < 800) infoElement.classList.add("closed");
  shareMenu.classList.add("open");
  openShareMenuButton.classList.add("active");
}

function closeShareMenu() {
  infoElement.classList.remove("closed");
  shareMenu.classList.remove("open");
  openShareMenuButton.classList.remove("active");
}

openShareMenuButton.addEventListener("click", openShareMenu);
closeShareMenuButton.addEventListener("click", closeShareMenu);

document.addEventListener("click", (event) => {
  const { target } = event;
  if (target !== openShareMenuButton && shareMenu.contains(target) === false) {
    closeShareMenu();
  }
});
