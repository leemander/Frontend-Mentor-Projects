const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

const form = document.getElementById("form");
const input = document.getElementById("url");

function isValidHttpUrl(str) {
  //https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/

  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}

function validateForm() {
  form.classList.remove("error");
  if (input.value === "" || !isValidHttpUrl(input.value)) {
    form.classList.add("error");
    return false;
  }
  return true;
}

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
