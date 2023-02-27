const openShareMenuButton = document.getElementById("open-share-menu");
const closeShareMenuButton = document.getElementById("close-share-menu");
const shareMenu = document.getElementById("share-menu");
const infoElement = document.getElementById("info");

function openShareMenu() {
  infoElement.classList.add("closed");
  shareMenu.classList.add("open");
}

function closeShareMenu() {
  infoElement.classList.remove("closed");
  shareMenu.classList.remove("open");
}

openShareMenuButton.addEventListener("click", openShareMenu);
closeShareMenuButton.addEventListener("click", closeShareMenu);
