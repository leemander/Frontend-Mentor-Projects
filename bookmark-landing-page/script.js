//moblile menu elements
const openMenuBtn = document.getElementById("open-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-mobile-menu");
//features section elements
const featureOneBtn = document.getElementById("bookmarking-btn");
const featureTwoBtn = document.getElementById("searching-btn");
const featureThreeBtn = document.getElementById("sharing-btn");
const featureBtnArr = [featureOneBtn, featureTwoBtn, featureThreeBtn];
const featureOne = document.getElementById("feature-1");
const featureTwo = document.getElementById("feature-2");
const featureThree = document.getElementById("feature-3");
const featureDivArr = [featureOne, featureTwo, featureThree];

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

//listeners
openMenuBtn.addEventListener("click", openCloseMenu);
closeMenuBtn.addEventListener("click", openCloseMenu);
featureBtnArr.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectFeature(btn.getAttribute("data-index"));
  });
});
