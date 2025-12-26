let currentIndex = 0;
const questions = document.querySelectorAll(".question");
const answers = {};

// hide all questions except first
questions.forEach((q, i) => {
    if (i !== 0) q.style.display = "none";
});

// OPTION SELECTION
function selectAnswer(questionId, value) {
    const currentQuestion = questions[currentIndex];
    const buttons = currentQuestion.querySelectorAll("button");

    // remove previous selection
    buttons.forEach(btn => btn.classList.remove("selected"));

    // find clicked button using event
    event.target.classList.add("selected");

    // store answer
    answers[questionId] = value;
    console.log(answers);
}

// NEXT QUESTION
function nextQuestion() {
    const qId = questions[currentIndex].getAttribute("data-q");

    // check if option selected
    if (!answers[qId]) {
        alert("Please select an option first");
        return;
    }

    // hide current question
    questions[currentIndex].style.display = "none";
    currentIndex++;

    // show next question
    if (currentIndex < questions.length) {
        questions[currentIndex].style.display = "block";
    } else {
        alert("Quiz completed!");
        console.log("Final Answers:", answers);
    }
}