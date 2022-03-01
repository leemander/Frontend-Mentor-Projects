const openMobileMenu = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const cartContents = document.getElementById("cart-contents");
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
let amountInCart = 0;

function changeAmount(target) {
  target === addBtn ? amount++ : amount--;
  amount < 0 ? (amount = 0) : (amountEl.innerText = amount);
}

function deleteItem() {
  amountInCart = 0;
  cartContents.innerHTML = `<p>Your cart is empty.</p>`;
  document.querySelector(".cart__label").remove();
}

function addToBasket() {
  if (amount > 0) {
    amountInCart += amount;
    const cartLabel = document.createElement("span");
    cartLabel.classList.add("cart__label");
    cartLabel.innerText = amountInCart;
    cartBtn.appendChild(cartLabel);

    cartContents.innerHTML = `
        <div class="cart__contents">
            <img src="./images/image-product-1-thumbnail.jpg" class="contents__img"/>
            <div class="contents__info">
                <p class="info__name">Autumn Limited Edition Sneakers</p>
                <p class="info__price">$125.00 x ${amountInCart} <strong>$${
      125 * amountInCart
    }.00</strong></p>
            </div>
            <button class="contents__delete" id="delete-btn" onclick="deleteItem()"><span class="sr-only">delete item</span></button>
        </div>
        <button class="cart__checkout" id="checkout-btn" onclick="location.reload()">Checkout</button>
    `;
  }
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
addToCartBtn.addEventListener("click", addToBasket);
