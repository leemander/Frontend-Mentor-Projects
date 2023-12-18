const questions = document.querySelectorAll(".list__q");
const answers = document.querySelectorAll(".list__a");

function showAnswer(e) {
  const questionID = e.target.closest("button").dataset.q;
  answers.forEach((answer) => {
    const answerID = answer.dataset.a;
    if (answerID === questionID) {
      answer.classList.toggle("show");
    } else {
      answer.classList.remove("show");
    }
  });
}

questions.forEach((question) =>
  question.addEventListener("click", (e) => showAnswer(e))
);
