const currentDay = new Date().getDay();
const data = [
  {
    day: 1,
    amount: 17.45,
  },
  {
    day: 2,
    amount: 34.91,
  },
  {
    day: 3,
    amount: 52.36,
  },
  {
    day: 4,
    amount: 31.07,
  },
  {
    day: 5,
    amount: 23.39,
  },
  {
    day: 6,
    amount: 43.28,
  },
  {
    day: 7,
    amount: 25.48,
  },
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const barsEl = document.getElementById("bars");
const totalEl = document.getElementById("total");

let total = data.reduce((accumulator, day) => accumulator + day.amount, 0);

//generates the bars for the bar chart
data.forEach((day) => {
  const barContainer = document.createElement("div");
  barContainer.tabIndex = 0;
  barContainer.ariaLabel = `${days[day.day - 1]}: $${day.amount}`;
  barContainer.classList.add("chart__bar-container");

  //figures out how tall to make the current
  //bar based on what percentage of the total it represents

  barContainer.style.height = `${(day.amount / total) * 375}%`;

  const bar = document.createElement("div");
  bar.classList.add("chart__bar");
  if (currentDay === day.day) {
    bar.classList.add("chart__bar--current");
  }

  const barPopup = document.createElement("div");
  barPopup.classList.add("chart__popup");
  barPopup.innerText = `$${day.amount}`;

  barContainer.append(bar);
  barContainer.append(barPopup);
  barsEl.append(barContainer);
});
