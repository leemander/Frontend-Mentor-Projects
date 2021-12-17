//moblile menu elements
const openMenuBtn = document.getElementById("open-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-mobile-menu");
//features section elements
const featureBtnArr = document.querySelectorAll(".toggle__option");
const featureDivArr = document.querySelectorAll(".feature");
//q+a section elements
const questionArr = document.querySelectorAll(".faqs__header");
const answerArr = document.querySelectorAll(".faqs__a");
//contact section elements
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("error");
const emailBtn = document.getElementById("contact-btn");

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

function validateEmail() {
  if (checkEmail(emailInput.value.trim()) == false) {
    emailInput.classList.add("section__input--error");
    emailError.classList.add("section__error-msg--active");
  } else {
    emailInput.classList.remove("section__input--error");
    emailError.classList.remove("section__error-msg--active");
  }
}

function checkEmail(email) {
  regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

checkEmail();

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

emailBtn.addEventListener("click", validateEmail);
