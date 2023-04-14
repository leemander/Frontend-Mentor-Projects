const dateForm = document.getElementById("date-form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const submitButton = document.getElementById("submit");
const yearResult = document.getElementById("results-years");
const monthResult = document.getElementById("results-months");
const dayResult = document.getElementById("results-days");

const CURRENT_DATE = luxon.DateTime.now(); //dates and difference calculation handled by the Luxon library

function validateForm() {
  let pass = true;
  const inputs = [dayInput, monthInput, yearInput];

  inputs.forEach((input) => {
    if (!input.value) {
      input.setAttribute("data-error", "");
      pass = false;
      document.querySelector(`#${input.id}-error`).innerText =
        "This field is required";
    } else {
      input.removeAttribute("data-error", "");
    }
  });

  if (dayInput.value) {
    if (
      dayInput.value < 1 ||
      dayInput.value > 31 ||
      !Number.isInteger(+dayInput.value)
    ) {
      dayInput.setAttribute("data-error", "");
      pass = false;
      dayError.innerText = "Must be a valid day";
    }
  }

  if (monthInput.value) {
    if (
      monthInput.value < 1 ||
      monthInput.value > 12 ||
      !Number.isInteger(+monthInput.value)
    ) {
      monthInput.setAttribute("data-error", "");
      pass = false;
      monthError.innerText = "Must be a valid month";
    }
  }

  if (yearInput.value) {
    if (yearInput.value > CURRENT_DATE.c.year) {
      yearInput.setAttribute("data-error", "");
      pass = false;
      yearError.innerText = "Must be in the past";
    } else if (!Number.isInteger(+yearInput.value)) {
      yearInput.setAttribute("data-error", "");
      pass = false;
      yearError.innerText = "Must be a valid year";
    }
  }

  if (pass) {
    if (validateDays(dayInput.value, monthInput.value, yearInput.value)) {
      getUserDate();
    } else {
      inputs.forEach((input) => {
        input.setAttribute("data-error", "");
        document.querySelector(`#${input.id}-error`).innerText =
          "Must be a valid date";
      });
    }
  }
}

function validateDays(days, month, year) {
  function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }
  const leapYear = isLeapYear(year);

  let valid = true;

  switch (+month) {
    case 2:
      if (leapYear) {
        if (days > 29) {
          valid = false;
        }
      } else {
        if (days > 28) {
          valid = false;
        }
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (days > 30) {
        valid = false;
      }
      break;
    default:
      if (days > 31) {
        valid = false;
      }
  }

  return valid;
}

function getUserDate() {
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  const userDate = luxon.DateTime.fromObject({
    day: day,
    month: month,
    year: year,
  });

  const difference = CURRENT_DATE.diff(userDate, ["years", "months", "days"]);

  const years = difference.years;
  const months = difference.months;
  const days = Math.floor(difference.days);

  displayResults(years, months, days);
}

function displayResults(years, months, days) {
  submitButton.disabled = true;

  let y = 0;
  let m = 0;
  let d = 0;

  const renderYears = setInterval(() => {
    yearResult.innerText = y;
    y++;
    if (y > years) {
      clearInterval(renderYears);
    }
  }, 35);

  const renderMonths = setInterval(() => {
    monthResult.innerText = m;
    m++;
    if (m > months) {
      clearInterval(renderMonths);
    }
  }, 35);

  const renderDays = setInterval(() => {
    dayResult.innerText = d;
    d++;
    if (d > days) {
      clearInterval(renderDays);
    }
  }, 35);

  checkRender(years, months, days);
}

function checkRender(years, months, days) {
  let renderedDays = 0;
  let renderedMonths = 0;
  let renderedYears = 0;

  function checkIfFinished() {
    console.log(renderedDays, days);
    if (
      +renderedDays === days &&
      +renderedMonths === months &&
      +renderedYears === years
    ) {
      submitButton.disabled = false;
    }
  }

  const yearObserver = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      renderedYears = mutation.addedNodes[0].nodeValue;
      checkIfFinished();
    });
  });

  const monthObserver = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      renderedMonths = mutation.addedNodes[0].nodeValue;
      checkIfFinished();
    });
  });

  const dayObserver = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      renderedDays = mutation.addedNodes[0].nodeValue;
      checkIfFinished();
    });
  });

  yearObserver.observe(yearResult, { childList: true });
  monthObserver.observe(monthResult, { childList: true });
  dayObserver.observe(dayResult, { childList: true });
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});
