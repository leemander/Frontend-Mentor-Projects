//menu elements
const openMobileMenu = document.getElementById("open-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const cartBtn = document.getElementById("cart-btn");

//cart elements
const cart = document.getElementById("cart");
const cartContents = document.getElementById("cart-contents");
const cartEmpty = document.getElementById("cart-empty");

//image gallery elements
const currentImg = document.getElementById("gallery");
const nextImg = document.getElementById("nxt-img-btn");
const prevImg = document.getElementById("prev-img-btn");
const thumb1 = document.getElementById("thumb-1");
const thumb2 = document.getElementById("thumb-2");
const thumb3 = document.getElementById("thumb-3");
const thumb4 = document.getElementById("thumb-4");

//lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxMainImg = document.getElementById("lightbox-main-img");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const lightboxThumb1 = document.getElementById("lightbox-thumb-1");
const lightboxThumb2 = document.getElementById("lightbox-thumb-2");
const lightboxThumb3 = document.getElementById("lightbox-thumb-3");
const lightboxThumb4 = document.getElementById("lightbox-thumb-4");

//buy controls element
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const amountEl = document.getElementById("amount");
const addToCartBtn = document.getElementById("add-to-cart");

function toggleAside(aside) {
  aside === "menu"
    ? mobileMenu.classList.toggle("open")
    : cart.classList.toggle("open");
}

function replaceSelected(thumbnail) {
  let thumbnailArr = [];
  thumbnail.parentNode.classList.contains("gallery__thumbnails")
    ? (thumbnailArr = document.querySelectorAll(".gallery__thumbnail"))
    : (thumbnailArr = document.querySelectorAll(".lightbox__thumbnail"));
  thumbnailArr.forEach((thumb) => thumb.classList.remove("selected"));
  thumbnail.classList.add("selected");
}

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let imageIndex = 0;

console.log(eval("lightboxThumb1"));

function changeImage(target) {
  if (target === nextImg || target === lightboxNext) {
    imageIndex < images.length - 1 ? imageIndex++ : (imageIndex = 0);
    if (target == lightboxNext) {
      replaceSelected(eval(`lightboxThumb${imageIndex + 1}`));
    }
  } else if (target === prevImg || target === lightboxPrev) {
    imageIndex > 0 ? imageIndex-- : (imageIndex = 3);
    if (target == lightboxPrev) {
      replaceSelected(eval(`lightboxThumb${imageIndex + 1}`));
    }
  } else if (target === thumb1 || target === lightboxThumb1) {
    imageIndex = 0;
  } else if (target === thumb2 || target === lightboxThumb2) {
    imageIndex = 1;
  } else if (target === thumb3 || target === lightboxThumb3) {
    imageIndex = 2;
  } else if (target === thumb4 || target === lightboxThumb4) {
    imageIndex = 3;
  }

  return `url(${images[imageIndex]})`;
}

let amount = 0;
let amountInCart = 0;

function changeAmount(target) {
  target === addBtn ? amount++ : amount--;
  amount < 0 ? (amount = 0) : (amountEl.innerText = amount);
}

function deleteItem() {
  amountInCart = 0;
  cartContents.style.display = "none";
  cartEmpty.style.display = "block";
  document.querySelector(".cart__label").remove();
}

function addToBasket() {
  if (amount > 0) {
    amountInCart += amount;
    if (document.querySelector(".cart__label")) {
      document.querySelector(".cart__label").remove();
    }
    const cartLabel = document.createElement("span");
    cartLabel.classList.add("cart__label");
    cartLabel.innerText = amountInCart;
    cartBtn.appendChild(cartLabel);

    cartEmpty.style.display = "none";
    cartContents.style.display = "block";

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

//mobile menu event listeners
openMobileMenu.addEventListener("click", () => toggleAside("menu"));
closeMobileMenu.addEventListener("click", () => toggleAside("menu"));
mobileMenu.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    toggleAside("menu");
  }
});

//cart event listeners
cartBtn.addEventListener("click", toggleAside);
document.addEventListener("click", (event) => {
  //checks to see if the click target is contained within the cart element or another relevant element and if not closes the cart
  if (!cart.contains(event.target) && !cartBtn.contains(event.target)) {
    if (cart.classList.contains("open")) {
      cart.classList.toggle("open");
    }
  }
});

//main image gallery listeners
nextImg.addEventListener("click", (event) => {
  currentImg.style.backgroundImage = changeImage(event.target);
});
prevImg.addEventListener("click", (event) => {
  currentImg.style.backgroundImage = changeImage(event.target);
});
thumb1.addEventListener("click", (event) => {
  replaceSelected(event.target);
  currentImg.style.backgroundImage = changeImage(event.target);
});
thumb2.addEventListener("click", (event) => {
  replaceSelected(event.target);
  currentImg.style.backgroundImage = changeImage(event.target);
});
thumb3.addEventListener("click", (event) => {
  replaceSelected(event.target);
  currentImg.style.backgroundImage = changeImage(event.target);
});
thumb4.addEventListener("click", (event) => {
  replaceSelected(event.target);
  currentImg.style.backgroundImage = changeImage(event.target);
});

//lightbox image gallery listeners
currentImg.addEventListener("click", () => {
  if (window.screen.width > 1000) {
    lightbox.classList.add("open");
  }
});
currentImg.addEventListener("keydown", (event) => {
  if (event.keyCode === 13 || event.keyCode === 32)
    if (window.screen.width > 1000) {
      lightbox.classList.add("open");
    }
});
lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("open");
});
lightboxNext.addEventListener("click", (event) => {
  lightboxMainImg.style.backgroundImage = changeImage(event.target);
});
lightboxPrev.addEventListener("click", (event) => {
  lightboxMainImg.style.backgroundImage = changeImage(event.target);
});
lightboxThumb1.addEventListener("click", (event) => {
  replaceSelected(event.target);
  lightboxMainImg.style.backgroundImage = changeImage(event.target);
});
lightboxThumb2.addEventListener("click", (event) => {
  replaceSelected(event.target);
  lightboxMainImg.style.backgroundImage = changeImage(event.target);
});
lightboxThumb3.addEventListener("click", (event) => {
  replaceSelected(event.target);
  lightboxMainImg.style.backgroundImage = changeImage(event.target);
});
lightboxThumb4.addEventListener("click", (event) => {
  replaceSelected(event.target);
  lightboxMainImg.style.backgroundImage = changeImage(event.target);
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("open");
  }
});

//buying controls listeners
addBtn.addEventListener("click", (event) => changeAmount(event.target));
subtractBtn.addEventListener("click", (event) => changeAmount(event.target));
addToCartBtn.addEventListener("click", addToBasket);
