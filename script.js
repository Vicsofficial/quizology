

const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const answerOptions = document.querySelectorAll('.answer');
const timerElement = document.getElementById('time-remaining');
const gameOverContainer = document.getElementById('game-over-container');
const initialsInput = document.getElementById('initials');
const saveScoreButton = document.getElementById('save-score');

let currentQuestionIndex = 0;
let timeRemaining = 60; // Timer value in seconds
let timerInterval;

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: ['<js>', '<java>', '<javascript>', '<script>'],
    correctAnswer: 3,
  },

  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: ['<body>', '<head>', 'footer', 'both <head and <body>'],
    correctAnswer: 0,
  },

  {
    question: 'The external JavaScript file must contain the <script> tag',
    answers: ['True', 'False'],
    correctAnswer: 1,
  },
  
];

startButton.addEventListener('click', startQuiz);
saveScoreButton.addEventListener('click', saveScore);

function startQuiz() {
  startButton.style.display = 'none';
  quizContainer.style.display = 'block';
  startTimer();
  displayQuestion();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = timeRemaining;
    if (timeRemaining <= 0) {
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;
  answerOptions.forEach((option, index) => {
    option.textContent = currentQuestion.answers[index];
    option.addEventListener('click', () => checkAnswer(index));
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    // Correct answer
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  } else {
    // Incorrect answer
    timeRemaining -= 10;
    if (timeRemaining <= 0) {
      endQuiz();
    }
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.style.display = 'none';
  gameOverContainer.style.display = 'block';
}

function saveScore() {
  const initials = initialsInput.value;
  const score = timeRemaining;
}

function saveScore() {
  const initials = initialsInput.value;
  const score = timeRemaining;

  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  highScores.push({initials, score });

  localStorage.setItem('highScores', JSON.stringify(highScores));

  initialsInput.value = '';
}



