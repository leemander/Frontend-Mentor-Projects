const ipInput = document.getElementById("ip-input");
const ipEl = document.getElementById("ip");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");

let ip;
let locationText;
let timezone;
let isp;

const getData = () => {
  fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_yjLrZHyDC4kVsYY1eDLpUl8yMmUXI"
  )
    .then((res) => res.json())
    .then((data) => {
      ip = data.ip;
      locationText = `${data.location.city}, ${data.location.region} ${data.location.country}`;
      timezone = data.location.timezone;
      isp = data.isp;
    });
};

const displayData = () => {
  ipInput.value = ip;
  ipEl.innerText = ip;
  locationEl.innerText = locationText;
  timezoneEl.innerText = "UTC " + timezone;
  ispEl.innerText = isp;
};

getData();

setTimeout(displayData, 1000);
