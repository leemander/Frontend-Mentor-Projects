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
      if (result) {
        result = 0;
        xRegister = 0;
      }
      xRegister += this.dataset.button;
      if (+xRegister) {
        display.innerHTML = formatNumber(+xRegister);
      } else {
        display.innerHTML = xRegister;
      }
    }
  } else {
    if (+this.dataset.button >= 0 || this.dataset.button === ".") {
      yRegister += this.dataset.button;
      display.innerHTML = formatNumber(+yRegister);
    }
  }

  if (operators.includes(this.dataset.button)) {
    operator = this.dataset.button;
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
      xRegister = result;
      operator = "";
      display.innerHTML = formatNumber(result);
    }
  }

  if (this.dataset.button === "reset") {
    window.location.reload();
  }

  if (this.dataset.button === "delete") {
    if (result !== xRegister) {
      if (!operator) {
        const xRegisterCopy = xRegister.split("");
        xRegisterCopy.pop();
        xRegister = xRegisterCopy.join("");
        display.innerHTML = formatNumber(+xRegister);
      } else {
        const yRegisterCopy = yRegister.split("");
        yRegisterCopy.pop();
        yRegister = yRegisterCopy.join("");
        display.innerHTML = formatNumber(+yRegister);
      }
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonPress);
});
