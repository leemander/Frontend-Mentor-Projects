const initialContent = document.getElementById("initial");
const completeContent = document.getElementById("complete");
const selection = document.getElementById("selection");

const rating1 = document.getElementById("rating-1");
const rating2 = document.getElementById("rating-2");
const rating3 = document.getElementById("rating-3");
const rating4 = document.getElementById("rating-4");
const rating5 = document.getElementById("rating-5");

const submitBtn = document.getElementById("submit");

let rating = 0;

function selectRating(ratingBtn) {
  document
    .querySelectorAll(".card__rating-btn")
    .forEach((btn) => btn.classList.remove("selected"));

  ratingBtn.classList.add("selected");
  rating = +ratingBtn.innerText;
}

function submit() {
  console.log(rating);
  if (rating > 0) {
    initialContent.classList.add("hide");
    selection.innerText = `You selected ${rating} out of 5`;
    completeContent.classList.remove("hide");
  }
}

rating1.addEventListener("click", () => {
  selectRating(rating1);
});
rating2.addEventListener("click", () => {
  selectRating(rating2);
});
rating3.addEventListener("click", () => {
  selectRating(rating3);
});
rating4.addEventListener("click", () => {
  selectRating(rating4);
});
rating5.addEventListener("click", () => {
  selectRating(rating5);
});

submitBtn.addEventListener("click", () => submit());
