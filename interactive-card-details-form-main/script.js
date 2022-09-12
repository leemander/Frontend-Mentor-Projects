const formWrapper = document.querySelector(".form-wrapper");

const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll("small");

const nameInput = document.getElementById("cardholder-name");
const numberInput = document.getElementById("card-number");
const monthInput = document.getElementById("expiry-month");
const yearInput = document.getElementById("expiry-year");
const cvcInput = document.getElementById("cvc");

const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const dateError = document.getElementById("date-error");
const cvcError = document.getElementById("cvc-error");

const submitBtn = document.getElementById("confirm-button");

const success = document.getElementById("success");
const continueButton = document.getElementById("continue");

const formatNumber = (number) => {
  let result = "";
  number.split("").forEach((digit, index) => {
    index === 3 || index === 7 || index === 11
      ? (result += `${digit} `)
      : (result += digit);
  });
  return result;
};

const processForm = () => {
  if (!nameInput.value) {
    nameInput.parentElement.classList.add("error");
    nameError.innerText = "Can't be blank";
    nameError.classList.add("show");
  } else {
    nameInput.parentElement.classList.remove("error");
    nameError.classList.remove("show");
  }

  //resets input value to be just numbers in case number already formatted
  numberInput.value = numberInput.value
    .split("")
    .filter((x) => x != " ")
    .join("");

  if (!numberInput.value) {
    numberInput.parentElement.classList.add("error");
    numberError.innerText = "Can't be blank";
    numberError.classList.add("show");
  } else if (!+numberInput.value) {
    numberInput.parentElement.classList.add("error");
    numberError.innerText = "Must be a number";
    numberError.classList.add("show");
  } else if (numberInput.value.length !== 16) {
    numberError.innerText = "Must be 16 digits";
    numberError.classList.add("show");
  } else {
    numberInput.value = formatNumber(numberInput.value);
    numberInput.parentElement.classList.remove("error");
    numberError.classList.remove("show");
  }

  if (!monthInput.value || !yearInput.value) {
    monthInput.parentElement.classList.add("error");
    yearInput.parentElement.classList.add("error");
    dateError.innerText = "Can't be blank";
    dateError.classList.add("show");
  } else if (!+monthInput.value || !+yearInput.value) {
    monthInput.parentElement.classList.add("error");
    yearInput.parentElement.classList.add("error");
    dateError.innerText = "Must be a number";
    dateError.classList.add("show");
  } else {
    monthInput.parentElement.classList.remove("error");
    yearInput.parentElement.classList.remove("error");
    dateError.classList.remove("show");
  }

  if (!cvcInput.value) {
    cvcInput.parentElement.classList.add("error");
    cvcError.innerText = "Can't be blank";
    cvcError.classList.add("show");
  } else if (!+cvcInput.value) {
    cvcInput.parentElement.classList.add("error");
    cvcError.innerText = "Must be a number";
    cvcError.classList.add("show");
  } else {
    cvcInput.parentElement.classList.remove("error");
    cvcError.classList.remove("show");
  }

  let pass = true;

  errors.forEach((error) => {
    if (error.classList.contains("show")) {
      pass = false;
    }
  });

  if (pass) {
    formWrapper.style.display = "none";
    success.classList.add("show");
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", (event) => {
    event.target.parentElement.classList.add("show");
  });

  input.addEventListener("focusout", (event) => {
    event.target.parentElement.classList.remove("show");
  });
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  processForm();
});

continueButton.addEventListener("click", () => {
  document.location.reload();
});
