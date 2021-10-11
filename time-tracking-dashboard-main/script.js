const app = document.getElementById("app");

let dailyView = "";
let weeklyView = "";
let monthlyView = "";

getTimes();
function getTimes() {
  let output = "";
  output = `
    
    `;

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((activity) => {
        output += `
        <section class="card">
            <div class="card__banner"></div>
            <div class="card__info">
                <div class="card__header">
                    <h2 class="card__title">${activity.title}</h2>
                    <img
                    src="images/icon-ellipsis.svg"
                    alt="more info"
                    class="card__ellipsis"
                    />
                </div>
                <div class="card__times">
                    <div class="times times__daily">
                        <p class="times__current">${activity.timeframes.daily.current} hrs</p>
                        <p class="times__previous">Yesterday - ${activity.timeframes.daily.previous} hrs</p>
                    </div>
                    <div class="times times__weekly times--selected">
                        <p class="times__current">${activity.timeframes.weekly.current}hrs</p>
                        <p class="times__previous">Last Week - ${activity.timeframes.weekly.previous}hrs</p>
                    </div>
                    <div class="times times__monthly">
                        <p class="times__current">${activity.timeframes.monthly.current}hrs</p>
                        <p class="times__previous">Last Month - ${activity.timeframes.monthly.previous}hrs</p>
                    </div>
                </div>
            </div>
        </section>
           
        `;
      });

      app.innerHTML += output;
    });
}

function changeView(view) {
  const dailyTimesEl = document.querySelectorAll(".times__daily");
  const weeklyTimesEl = document.querySelectorAll(".times__weekly");
  const monthlyTimesEl = document.querySelectorAll(".times__monthly");

  if (view == "daily") {
    for (let i = 0; i < dailyTimesEl.length; i++) {
      dailyTimesEl[i].classList.add("times--selected");
      weeklyTimesEl[i].classList.remove("times--selected");
      monthlyTimesEl[i].classList.remove("times--selected");
    }
  }
  if (view == "weekly") {
    for (let i = 0; i < dailyTimesEl.length; i++) {
      dailyTimesEl[i].classList.remove("times--selected");
      weeklyTimesEl[i].classList.add("times--selected");
      monthlyTimesEl[i].classList.remove("times--selected");
    }
  }
  if (view == "monthly") {
    for (let i = 0; i < dailyTimesEl.length; i++) {
      dailyTimesEl[i].classList.remove("times--selected");
      weeklyTimesEl[i].classList.remove("times--selected");
      monthlyTimesEl[i].classList.add("times--selected");
    }
  }
}

setTimeout(() => {
  dailyView = document.getElementById("view-daily");
  weeklyView = document.getElementById("view-weekly");
  monthlyView = document.getElementById("view-monthly");

  dailyView.addEventListener("click", () => {
    dailyView.classList.add("view-change__link--selected");

    weeklyView.classList.remove("view-change__link--selected");
    monthlyView.classList.remove("view-change__link--selected");
    changeView("daily");
  });

  weeklyView.addEventListener("click", () => {
    dailyView.classList.remove("view-change__link--selected");

    weeklyView.classList.add("view-change__link--selected");
    monthlyView.classList.remove("view-change__link--selected");
    changeView("weekly");
  });

  monthlyView.addEventListener("click", () => {
    dailyView.classList.remove("view-change__link--selected");

    weeklyView.classList.remove("view-change__link--selected");
    monthlyView.classList.add("view-change__link--selected");
    changeView("monthly");
  });
}, 100);
