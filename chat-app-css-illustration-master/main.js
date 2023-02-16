const chatElements = [...document.querySelector(".screen__chat").children];

chatElements.forEach((element, index) => {
  setTimeout(() => element.classList.add("animate"), index * 800);
});
