const buttons = [...document.querySelectorAll(".buttons__button")];
const display = document.getElementById("screen");

let xRegister = "";
let yRegister = "";
let operator = "";
let result = 0;

const operators = ["plus", "minus", "divide", "multiply"];

function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

function handleButtonPress() {
  if (!operator) {
    if (+this.dataset.button >= 0 || this.dataset.button === ".") {
      xRegister += this.dataset.button;
    } else if (operators.includes(this.dataset.button)) {
      operator = this.dataset.button;
    }
  } else {
    if (+this.dataset.button >= 0 || this.dataset.button === ".") {
      yRegister += this.dataset.button;
    }
  }

  if (this.dataset.button === "equals") {
    if (yRegister) {
      if (operator === "plus") {
        result = +xRegister + +yRegister;
      } else if (operator === "minus") {
        result = +xRegister - +yRegister;
      } else if (operator === "divide") {
        result = +xRegister / yRegister;
      } else {
        result = +xRegister * yRegister;
      }
      yRegister = "";
      display.innerHTML = formatNumber(result);
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonPress);
});
