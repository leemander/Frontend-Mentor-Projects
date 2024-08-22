//inputs
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const generalRadio = document.getElementById("general");
const supportRadio = document.getElementById("support");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");
const submitButton = document.getElementById("submit");

const form = document.getElementById("form");
const toast = document.getElementById("toast");

function validateInput(input) {
  if (!input.validity.valid) {
    input.setAttribute("data-error", "true");
    return false;
  } else {
    input.removeAttribute("data-error");
    return true;
  }
}

function validateForm() {
  let valid;
  valid = validateInput(firstNameInput);
  valid = validateInput(lastNameInput);
  valid = validateInput(emailInput);
  valid = validateInput(generalRadio);
  valid = validateInput(messageInput);
  valid = validateInput(consentCheckbox);
  if (valid) {
    toast.setAttribute("open", "");
    form.reset();
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});
