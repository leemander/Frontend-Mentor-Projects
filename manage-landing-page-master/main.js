const header = document.getElementById("header");
const menuButton = document.getElementById("menu-button");
const slider = document.getElementById("slider");
const sliderIndicators = [
  ...document.getElementsByClassName("testimonials__indicator"),
];
let menuOpen = false;

function toggleMenu() {
  header.setAttribute("data-menu-open", !menuOpen);
  menuOpen = !menuOpen;
}

let sliderPosition = 410;
let currentSlideIndex = 1;

function moveSlider() {
  slider.scrollTo({ top: 0, left: sliderPosition, behavior: "smooth" });
  sliderIndicators.forEach((i) => i.classList.remove("current"));
  sliderIndicators[currentSlideIndex].classList.add("current");

  sliderPosition < 1230 ? (sliderPosition += 410) : (sliderPosition = 0);
  currentSlideIndex < 3 ? currentSlideIndex++ : (currentSlideIndex = 0);
}

setInterval(() => moveSlider(), 2500);

menuButton.addEventListener("click", toggleMenu);
