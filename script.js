const highScore = "";
const countDown = "";
let questions = ["Question 1", "Question 2", "Question 3"];
let options = ["Option 1", "Option 2", "Option 3", "Option 4"];
let rightAnswer = "";
let timer = 6000;
var questionIndex;

// List of questions
var questionBank = [
  {
    prompt: "Question 1",
    choices: ["answer a", "answer b", "answer c", "answer d"],
    correctAnswer: "answer c",
  },
  {
    prompt: "Question 2",
    choices: ["answer a", "answer b", "answer c", "answer d"],
    correctAnswer: "answer b",
  },
  {
    prompt: "Question 2",
    choices: ["answer a", "answer b", "answer c", "answer d"],
    correctAnswer: "answer a",
  },
  {
    prompt: "Question 2",
    choices: ["answer a", "answer b", "answer c", "answer d"],
    correctAnswer: "answer d",
  },
  {
    prompt: "Question 2",
    choices: ["answer a", "answer b", "answer c", "answer d"],
    correctAnswer: "answer a",
  },
];

// Get started button click starts the time function here

// function 1
function startQuiz() {
  document.getElementById("start-button").addEventListener("click", startQuiz);
  console.log("Starting the quiz");
  questionIndex = 0;
  startTimer();
  showQuestion();
}

//function 2
function showQuestion() {
  console.log("show question");
  var currentQuestion = questionBank[questionIndex];
  // existing element in the html
  // h3 element to show question prompt
  // Add unordered list to html document
  // Target the option choice container Element
  // we have our choices array --iterate through it
  // im going to do something for each choice -> create a button, populate its content, add event listener, and append it to choices Element
}

// function 3
function checkAnswer(event) {
  console.log(event);
  console.log(event.target);
  console.dir(event.target);
  // deduct time if incorrect answer
  var currentQuestion = questionBank[questionIndex];

  // have to decide when you can move to the next question, or if you will call endQuiz()
  // after you're done checking the answer, you will move questionIndex ++ and call showQuestion()
}

//function 4
function endQuiz() {}






