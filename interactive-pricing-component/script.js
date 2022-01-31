const viewsEl = document.getElementById("views");
const slider = document.getElementById("slider");
const sliderFill = document.getElementById("slider-fill");
const priceEl = document.getElementById("price");
const toggle = document.getElementById("toggle");
const toggleDot = document.getElementById("toggle-dot");

let views = "100k";
let price = 16;
let yearly = false;
let yearlyPrice = price * 0.75;

function updateDOM() {
  viewsEl.innerHTML = `${views} Pageviews`;
  priceEl.innerHTML = `        
        <span class="price__figure">$${
          !yearly ? price : yearlyPrice
        }.00</span> / month
    `;
  sliderFill.style.width = `${slider.value}%`;
}

function updateViews() {
  if (slider.value == 0) {
    views = "10k";
    price = 8;
  } else if (slider.value == 25) {
    views = "50k";
    price = 12;
  } else if (slider.value == 50) {
    views = "100k";
    price = 16;
  } else if (slider.value == 75) {
    views = "500k";
    price = 24;
  } else {
    views = "1M";
    price = 36;
  }

  yearlyPrice = price * 0.75;

  updateDOM();
}

function toggleYearly() {
  yearly = !yearly;
  toggleDot.classList.toggle("yearly");
  updateDOM();
}

slider.addEventListener("mousedown", () => {
  slider.classList.add("dragged");
});

slider.addEventListener("mouseup", () => {
  slider.classList.remove("dragged");
});

slider.addEventListener("change", updateViews);
toggle.addEventListener("click", toggleYearly);
