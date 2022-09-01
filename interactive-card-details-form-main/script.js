const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("focus", (event) => {
    event.target.parentElement.classList.add("show");
  });

  input.addEventListener("focusout", (event) => {
    event.target.parentElement.classList.remove("show");
  });
});
