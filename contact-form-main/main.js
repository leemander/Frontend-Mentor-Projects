//inputs
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const generalRadio = document.getElementById("general");
const supportRadio = document.getElementById("support");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");
// //errors
// const firstNameError = document.getElementById("first-name-error");
// const lastNameError = document.getElementById("last-name-error");
// const emailError = document.getElementById("email-error");
// const queryError = document.getElementById("query-error");
// const messageError = document.getElementById("message-error");
// const consentError = document.getElementById("consent-error");

const submitButton = document.getElementById("submit");

function validateInput(input) {
  console.log(input, input.validity.valid);
  if (!input.validity.valid) {
    input.setAttribute("data-error", "true");
  } else {
    input.removeAttribute("data-error");
  }
}

function validateForm() {
  validateInput(firstNameInput);
  validateInput(lastNameInput);
  validateInput(emailInput);
  validateInput(generalRadio);
  validateInput(messageInput);
  validateInput(consentCheckbox);
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});
