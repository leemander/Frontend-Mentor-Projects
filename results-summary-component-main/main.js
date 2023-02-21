const totalElement = document.getElementById("total");
const summaryElement = document.getElementById("summary");
const loadingScreen = document.getElementById("loading");

let results = [];

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => results.push(...data));

function populateSummary() {
  let html = "";
  results.forEach((result) => {
    html += `
        <div class="summary__result" data-test="${result.category}">
            <img
                class="result__icon"
                src="${result.icon}"
                alt=""
            />
            <span class="result__name">${result.category}</span>
            <span class="result__score"><strong>${result.score}</strong> / 100</span>
        </div>
    `;
  });
  summaryElement.innerHTML = html;
}

function calculateTotal() {
  let total = 0;
  total = Math.floor(
    results.reduce((total, current) => total + current.score, 0) / 4
  );
  totalElement.innerText = total;
}

setTimeout(() => {
  calculateTotal();
  populateSummary();
  loadingScreen.style.display = "none";
}, 500);
