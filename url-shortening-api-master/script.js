const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

const form = document.getElementById("form");
const input = document.getElementById("url");
const results = document.getElementById("results");

const urls = [];

function checkLocal() {
  const localData = JSON.parse(localStorage.getItem("savedUrls"));
  if (localData) {
    localData.forEach((url) => {
      urls.push(url);
      renderUrls();
    });
  }
}

checkLocal();

function copyLink(e) {
  document
    .querySelectorAll(".shortener__copy")
    .forEach((button) => button.classList.remove("copied"));
  e.target.innerText = "Copied!";
  e.target.classList.add("copied");
  navigator.clipboard.writeText(e.target.dataset.link);
}

function renderUrls() {
  results.innerHTML = "";

  urls.reverse().forEach((url) => {
    const li = document.createElement("li");
    li.classList.add("shortener__result", "bg-white");

    const longLink = document.createElement("span");
    longLink.classList.add("text-black");
    longLink.innerText = url.long;
    li.appendChild(longLink);

    const shortLink = document.createElement("span");
    shortLink.classList.add("text-cyan");
    shortLink.innerText = url.short;
    li.appendChild(shortLink);

    const copyButton = document.createElement("button");
    copyButton.dataset.link = url.short;
    copyButton.classList.add("shortener__copy");
    copyButton.innerText = "Copy";
    li.appendChild(copyButton);

    results.appendChild(li);
  });
}

async function getShortUrl(url) {
  const data = {
    url: url,
  };

  const res = await fetch("https://shrtlnk.dev/api/v2/link", {
    method: "POST",
    headers: {
      "api-key": "uCUmOutexRpV7uTIw7jFgUfTeHunTYz7bxFD0gY2Q7Snn",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      if (urls.length === 5) {
        urls.pop();
      }
      urls.push({ short: json.shrtlnk, long: json.url });
    });
  localStorage.setItem("savedUrls", JSON.stringify(urls));
  renderUrls();
}

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
  getShortUrl(input.value);
  input.value = "";
}

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

document.querySelectorAll(".shortener__copy").forEach((button) => {
  button.addEventListener("click", (e) => copyLink(e));
});
