const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const errorIcon = document.getElementById("error-icon");
const error = document.getElementById("error");

function validateForm() {
  if (!input.value || validateEmail(input.value) == false) {
    error.classList.remove("hide");
    errorIcon.classList.remove("hide");
    form.classList.add("main__form--error");
  } else {
    error.classList.add("hide");
    errorIcon.classList.add("hide");
    form.classList.remove("main__form--error");
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});
