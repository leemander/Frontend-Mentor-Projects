const mainContent = document.getElementById("main-content");
const signUpForm = document.getElementById("sign-up-form");
const emailInput = document.getElementById("email");
const successContent = document.getElementById("success-content");
const successMessage = document.getElementById("success-message");
const dismissButton = document.getElementById("dismiss-button");

function validateEmail() {
  const input = emailInput.value.toLowerCase();

  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.match(pattern)) {
    successMessage.innerText = `A confirmation email has been sent to ${input}. Please open it and click the button inside to confirm your subscription`;
    mainContent.classList.add("hide");
    successContent.classList.add("show");
  } else {
    signUpForm.classList.add("error");
  }
}

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail();
});

signUpForm.addEventListener("focusin", () =>
  signUpForm.classList.remove("error")
);

dismissButton.addEventListener("click", () => window.location.reload());
