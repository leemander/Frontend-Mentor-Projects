const openMobileMenu = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const currentImg = document.getElementById("gallery");
const nextImg = document.getElementById("nxt-img-btn");
const prevImg = document.getElementById("prev-img-btn");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const amountEl = document.getElementById("amount");
const addToCartBtn = document.getElementById("add-to-cart");

function toggleAside(aside) {
  aside === "menu"
    ? mobileMenu.classList.toggle("open")
    : cart.classList.toggle("open");
}

let imageIndex = 0;

function changeImage(target) {
  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  if (target === nextImg) {
    imageIndex < images.length - 1 ? imageIndex++ : (imageIndex = 0);
  } else if (target === prevImg) {
    imageIndex > 0 ? imageIndex-- : (imageIndex = 3);
  }

  currentImg.style.backgroundImage = `url(${images[imageIndex]})`;
}

let amount = 0;

function changeAmount(target) {
  target === addBtn ? amount++ : amount--;
  amount < 0 ? (amount = 0) : (amountEl.innerText = amount);
}

openMobileMenu.addEventListener("click", () => toggleAside("menu"));
closeMobileMenu.addEventListener("click", () => toggleAside("menu"));
mobileMenu.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    toggleAside("menu");
  }
});

cartBtn.addEventListener("click", toggleAside);
nextImg.addEventListener("click", (event) => changeImage(event.target));
prevImg.addEventListener("click", (event) => changeImage(event.target));
addBtn.addEventListener("click", (event) => changeAmount(event.target));
subtractBtn.addEventListener("click", (event) => changeAmount(event.target));
