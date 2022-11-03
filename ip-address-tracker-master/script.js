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
      console.log(data);
      ip = data.ip;
      locationText = `${data.location.city}, ${data.location.region} ${data.location.country}`;
      timezone = data.location.timezone;
      isp = data.isp;
      map = L.map("map", {
        attributionControl: false,
        zoomControl: false,
        scrollWheelZoom: false,
      }).setView([data.location.lat, data.location.lng], 18);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
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
