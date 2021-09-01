const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

const backThisButton = document.getElementById("back-button");
const bambooButton = document.getElementById("bamboo-button");
const blackButton = document.getElementById("black-button");

const selectionModal = document.getElementById("selection-modal");

const pledgeRadios = document.getElementsByClassName("pledge__radio");
const noRewardRadio = document.getElementById("no-reward-radio");
const bambooRadio = document.getElementById("bamboo-radio");
const blackRadio = document.getElementById("black-radio");

const pledgeDivs = document.getElementsByClassName("pledge-div__enter");
const noRewardPledgeDiv = document.getElementById("pledge-div-no-reward");
const bambooPledgeDiv = document.getElementById("pledge-div-bamboo");
const blackPledgeDiv = document.getElementById("pledge-div-black");

const continueButtons = document.getElementsByClassName("enter__button");

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

for (let i = 0; i < continueButtons.length; i++) {
  continueButtons[i].addEventListener("click", () => {
    showHideModal(selectionModal);
    showHideModal(successModal);
  });
}

successButton.addEventListener("click", () => {
  clearPledges();
  showHideModal(successModal);
});
