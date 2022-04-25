const openMenuBtn = document.getElementById("open-menu");
const menu = document.getElementById("mobile-menu");
const featuresBtn = document.getElementById("features-btn");
const features = document.getElementById("features");
const companyBtn = document.getElementById("company-btn");
const company = document.getElementById("company");
const closeMenuBtn = document.getElementById("close-menu");

openMenuBtn.addEventListener("click", () => {
  menu.showModal();
});

closeMenuBtn.addEventListener("click", () => {
  menu.close();
});

featuresBtn.addEventListener("click", () => {
  featuresBtn.classList.toggle("active");
  features.classList.toggle("active");
});

companyBtn.addEventListener("click", () => {
  companyBtn.classList.toggle("active");
  company.classList.toggle("active");
});
