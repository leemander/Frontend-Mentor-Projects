const header = document.getElementById("header");
const menuButton = document.getElementById("menu-button");
const slider = document.getElementById("slider");
const sliders = [...document.getElementsByClassName("slider__slide")];
const sliderIndicators = [
  ...document.getElementsByClassName("testimonials__indicator"),
];

let menuOpen = false;

function toggleMenu() {
  header.setAttribute("data-menu-open", !menuOpen);
  menuOpen = !menuOpen;
}

let slideWidth = sliders[0].getBoundingClientRect().width;
let sliderPosition = slideWidth + 32;
let currentSlideIndex = 1;

function moveSlider() {
  slider.scrollTo({ top: 0, left: sliderPosition, behavior: "smooth" });
  sliderIndicators.forEach((i) => i.classList.remove("current"));
  sliderIndicators[currentSlideIndex].classList.add("current");

  sliderPosition <= slider.scrollWidth - slider.scrollLeft
    ? (sliderPosition += slideWidth + 32)
    : (sliderPosition = 0);
  currentSlideIndex < 3 ? currentSlideIndex++ : (currentSlideIndex = 0);
}

setInterval(() => moveSlider(), 2500);

menuButton.addEventListener("click", toggleMenu);
