const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const questions = [
  {
    question: "What is the color of the sky?",
    answers: {
      a: "Red",
      b: "Green",
      c: "Blue"
    },
    correctAnswer: "c"
  },
  {
    question: "What makes the sites look pretty(this one isnt tho)?",
    answers: {
      a: "CSS",
      b: "HTML",
      c: "Javascript"
    },
    correctAnswer: "a"
  },
  {
    question: "What language do you wirte functions in?",
    answers: {
      a: "CSS",
      b: "Javascript",
      c: "HTML"
    },
    correctAnswer: "b"
  }
];


function buildQuiz() {
  const output = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}: ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}


function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

 
  const score = Math.round((numCorrect / questions.length) * 100);
  quizContainer.innerHTML = `You scored ${score}%`;
}


submitButton.addEventListener('click', showResults);


buildQuiz();