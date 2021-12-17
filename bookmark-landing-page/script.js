//moblile menu elements
const openMenuBtn = document.getElementById("open-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-mobile-menu");
//features section elements
const featureBtnArr = document.querySelectorAll(".toggle__option");
const featureDivArr = document.querySelectorAll(".feature");
//q+a section elements
const questionOne = document.getElementById("q1");
const questionTwo = document.getElementById("q2");
const questionThree = document.getElementById("q3");
const questionFour = document.getElementById("q4");
const questionArr = document.querySelectorAll(".faqs__header");
const answerOne = document.getElementById("a1");
const answerTwo = document.getElementById("a2");
const answerThree = document.getElementById("a3");
const answerFour = document.getElementById("a4");
const answerArr = document.querySelectorAll(".faqs__a");

//functions
function openCloseMenu() {
  mobileMenu.classList.toggle("mobile-menu--open");
}

function selectFeature(index) {
  featureBtnArr.forEach((btn) => {
    btn.classList.remove("toggle__option--selected");
    if (index == btn.getAttribute("data-index")) {
      btn.classList.add("toggle__option--selected");
    }
  });

  featureDivArr.forEach((div) => {
    div.classList.remove("feature--selected");
  });

  featureDivArr[index].classList.add("feature--selected");
}

function showAnswer(selected) {
  answerArr.forEach((answer, index) => {
    answer.classList.remove("faqs__a--selected");
    if (index == +selected) {
      answer.classList.add("faqs__a--selected");
    }
  });
}

function changeArrow(q) {
  const arrows = document.querySelectorAll(".faqs__arrow");
  arrows.forEach((arrow) => {
    arrow.classList.remove("faqs__arrow--up");
  });
  q.querySelector(".faqs__arrow").classList.add("faqs__arrow--up");
}

//listeners
openMenuBtn.addEventListener("click", openCloseMenu);
closeMenuBtn.addEventListener("click", openCloseMenu);

featureBtnArr.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectFeature(btn.getAttribute("data-index"));
  });
});

questionArr.forEach((q) => {
  q.addEventListener("click", () => {
    showAnswer(q.getAttribute("data-index"));
  });
});
