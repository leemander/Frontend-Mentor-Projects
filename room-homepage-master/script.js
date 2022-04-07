const openMenuBtn = document.getElementById("open");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close");

const nextBtns = document.querySelectorAll(".slide__change-btn--next");
const prevBtns = document.querySelectorAll(".slide__change-btn--prev");

const slides = document.querySelectorAll(".hero__slide");

let slideIndex = 0;

function changeSlide(direction) {
  console.log("hi");
  if (direction === "next") {
    slideIndex !== 2 ? slideIndex++ : (slideIndex = 0);
  } else {
    slideIndex !== 0 ? slideIndex-- : (slideIndex = 2);
  }

  slides.forEach((slide) => slide.classList.remove("selected"));
  slides[slideIndex].classList.add("selected");
}

openMenuBtn.addEventListener("click", () => mobileMenu.showModal());
closeMenuBtn.addEventListener("click", () => mobileMenu.close());

nextBtns.forEach((btn) =>
  btn.addEventListener("click", () => changeSlide("next"))
);

prevBtns.forEach((btn) =>
  btn.addEventListener("click", () => changeSlide("prev"))
);

console.log(nextBtns);
