const openMobileMenu = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");

function toggleAside(aside) {
  aside === "menu"
    ? mobileMenu.classList.toggle("open")
    : cart.classList.toggle("open");
}

openMobileMenu.addEventListener("click", () => toggleAside("menu"));
closeMobileMenu.addEventListener("click", () => toggleAside("menu"));
mobileMenu.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    toggleAside("menu");
  }
});

cartBtn.addEventListener("click", toggleAside);
