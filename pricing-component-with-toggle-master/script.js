const annualRadio = document.querySelector("#annually");
const monthRadio = document.querySelector("#monthly");
const toggle = document.querySelector(".toggle");
const annualPrices = document.querySelectorAll(".card__price--annually");
const monthPrices = document.querySelectorAll(".card__price--monthly");

toggle.style.justifyContent = "start";

const displayNone = (element) => {
  element.style.display = "none";
};

const displayBlock = (element) => {
  element.style.display = "block";
};

const updateToggle = (option) => {
  if (option == monthly) {
    toggle.style.justifyContent = "end";
    annualPrices.forEach(displayNone);
    monthPrices.forEach(displayBlock);
  } else {
    toggle.style.justifyContent = "start";
    monthPrices.forEach(displayNone);
    annualPrices.forEach(displayBlock);
  }
};

annualRadio.addEventListener("change", () => {
  updateToggle(annually);
});

monthRadio.addEventListener("change", () => {
  updateToggle(monthly);
});

toggle.addEventListener("click", () => {
  if (toggle.style.justifyContent == "start") {
    updateToggle(monthly);
  } else {
    updateToggle(annually);
  }
});
