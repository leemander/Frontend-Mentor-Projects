/* DOM elements */

const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

const backThisButton = document.getElementById("back-button");
const bookmarkButton = document.getElementById("bookmark-button");
const bambooButton = document.getElementById("bamboo-button");
const blackButton = document.getElementById("black-button");

const funds = document.getElementById("funds");
const backers = document.getElementById("backers");
const progressBar = document.getElementById("progress-bar");

const selectionModal = document.getElementById("selection-modal");

const pledgeRadios = document.getElementsByClassName("pledge__radio");
const noRewardRadio = document.getElementById("no-reward-radio");
const bambooRadio = document.getElementById("bamboo-radio");
const blackRadio = document.getElementById("black-radio");

const pledgeDivs = document.getElementsByClassName("pledge-div__enter");
const noRewardPledgeDiv = document.getElementById("pledge-div-no-reward");
const bambooPledgeDiv = document.getElementById("pledge-div-bamboo");
const blackPledgeDiv = document.getElementById("pledge-div-black");

const continueButton1 = document.getElementById("continue-button-1");
const continueButton2 = document.getElementById("continue-button-2");
const continueButton3 = document.getElementById("continue-button-3");

const pledge1 = document.getElementById("pledge1");
const pledge2 = document.getElementById("pledge2");
const pledge3 = document.getElementById("pledge3");

const closeSelectionModalButton = document.getElementById(
  "close-selection-modal"
);

const successModal = document.getElementById("success-modal");
const successButton = document.getElementById("success-button");

/* functions */

const changeMenuButton = (button1, button2) => {
  button1.classList.toggle("hide");
  button2.classList.toggle("hide");
};

const toggleBookmarked = () => {
  if (!bookmarkButton.classList.contains("button--bookmarked")) {
    bookmarkButton.innerHTML =
      '<img src="images/icon-bookmark.svg" alt="bookmark"/><span class="padding">Bookmarked</span>';
  } else {
    bookmarkButton.innerHTML =
      '<img src="images/icon-bookmark.svg" alt="bookmark"/><span class="padding">Bookmark</span>';
  }
  console.log(bookmarkButton);
  bookmarkButton.classList.toggle("button--bookmarked");
};

const showHideModal = (modal) => {
  if (modal.classList.contains("hide")) {
    main.style.filter = "contrast(10%)";
  } else {
    main.style.filter = "none";
  }
  modal.classList.toggle("hide");
};

const showPledgeDiv = (radio, div) => {
  for (let i = 0; i < pledgeRadios.length; i++) {
    if (pledgeRadios[i].id != radio.id) {
      pledgeRadios[i].checked = false;
    }

    if (pledgeDivs[i].id !== div.id) {
      pledgeDivs[i].classList.add("hide");
      pledgeDivs[i].parentNode.classList.remove("pledge-div--selected");
    }
  }
  div.parentNode.classList.toggle("pledge-div--selected");
  div.classList.remove("hide");
};

const clearPledges = () => {
  for (let i = 0; i < pledgeRadios.length; i++) {
    pledgeRadios[i].checked = false;
    pledgeDivs[i].classList.add("hide");
    pledgeDivs[i].parentNode.classList.remove("pledge-div--selected");
  }
};

const updateStats = (pledge) => {
  let oldFunds = funds.innerHTML.substring(1).split("");
  oldFunds.splice(oldFunds.indexOf(","), 1);
  oldFunds = Number(oldFunds.join(""));
  console.log(oldFunds);

  let newFunds = oldFunds + Number(pledge.value);
  let newFundsInt = newFunds;
  newFunds = newFunds.toString().split("");
  if (newFunds.length == 5) {
    newFunds.splice(2, 0, ",");
  } else if (newFunds.length == 6) {
    newFunds.splice(3, 0, ",");
  }
  newFunds.splice(0, 0, "$");
  let finalFunds = "";
  for (let i = 0; i < newFunds.length; i++) {
    finalFunds += newFunds[i];
  }
  console.log(finalFunds);
  funds.innerHTML = finalFunds;

  backers.innerHTML = "5,008";

  if (newFundsInt / 1000 > 100) {
    progressBar.style.width = "100%";
  } else {
    progressBar.style.width = newFundsInt / 1000 + "%";
  }
};

/* listeners */

hamburger.addEventListener("click", () => {
  changeMenuButton(hamburger, closeMenu);
  showHideModal(mobileMenu);
});

closeMenu.addEventListener("click", () => {
  changeMenuButton(closeMenu, hamburger);
  showHideModal(mobileMenu);
});

backThisButton.addEventListener("click", () => {
  showHideModal(selectionModal);
});

bookmarkButton.addEventListener("click", () => {
  toggleBookmarked();
});

bambooButton.addEventListener("click", () => {
  bambooRadio.checked = true;
  bambooPledgeDiv.parentNode.classList.add("pledge-div--selected");
  bambooPledgeDiv.classList.remove("hide");
  showHideModal(selectionModal);
});

blackButton.addEventListener("click", () => {
  blackRadio.checked = true;
  blackPledgeDiv.parentNode.classList.add("pledge-div--selected");
  blackPledgeDiv.classList.remove("hide");
  showHideModal(selectionModal);
});

closeSelectionModalButton.addEventListener("click", () => {
  showHideModal(selectionModal);
  clearPledges();
});

noRewardRadio.addEventListener("change", () => {
  showPledgeDiv(noRewardRadio, noRewardPledgeDiv);
});

bambooRadio.addEventListener("change", () => {
  showPledgeDiv(bambooRadio, bambooPledgeDiv);
});

blackRadio.addEventListener("change", () => {
  showPledgeDiv(blackRadio, blackPledgeDiv);
});

continueButton1.addEventListener("click", () => {
  updateStats(pledge1);
  showHideModal(selectionModal);
  showHideModal(successModal);
});

continueButton2.addEventListener("click", () => {
  updateStats(pledge2);
  showHideModal(selectionModal);
  showHideModal(successModal);
});

continueButton3.addEventListener("click", () => {
  updateStats(pledge3);
  showHideModal(selectionModal);
  showHideModal(successModal);
});

successButton.addEventListener("click", () => {
  clearPledges();
  showHideModal(successModal);
});
