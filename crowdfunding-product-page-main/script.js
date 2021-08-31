const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

const backThisButton = document.getElementById("back-button");

const selectionModal = document.getElementById("selection-modal");

const pledgeRadios = document.getElementsByClassName("pledge__radio");

const noRewardRadio = document.getElementById("no-reward");
const noRewardPledgeDiv = document.getElementById("pledge-div-1");

const continueButtons = document.getElementsByClassName("enter__button");

const closeSelectionModalButton = document.getElementById(
  "close-selection-modal"
);

const successModal = document.getElementById("success-modal");
const successButton = document.getElementById("success-button");

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
  }
  div.parentNode.classList.toggle("pledge-div--selected");
  div.classList.remove("hide");
};

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

closeSelectionModalButton.addEventListener("click", () => {
  showHideModal(selectionModal);
});

noRewardRadio.addEventListener("change", () => {
  showPledgeDiv(noRewardRadio, noRewardPledgeDiv);
});
