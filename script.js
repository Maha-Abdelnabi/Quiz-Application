let theQuestions = [
  {
    //first question
    question: (document.getElementById("question").innerHTML =
      "Inside which HTML element do you put the JavaScript?"),

    Text1: (document.getElementById("answer1").textContent = "<js>"),

    Text2: (document.getElementById("answer2").textContent = "<script>"),

    Text3: (document.getElementById("answer3").textContent = "<javascript>"),

    Text4: (document.getElementById("answer4").textContent = "<scripting>"),

    correct: "Text2",
  },

  {
    //second question
    question: (document.getElementById("question").innerHTML =
      "Where is the correct place to insert JavaScript?"),

    Text1: (document.getElementById("answer1").textContent =
      "The <body> section"),

    Text2: (document.getElementById("answer2").textContent =
      "The <head> section"),

    Text3: (document.getElementById("answer3").textContent =
      "Both the <head> section, and the <body> section"),

    Text4: (document.getElementById("answer4").textContent =
      "None of the answers are true"),

    correct: "Text1",
  },
  {
    //third question
    question: (document.getElementById("question").innerHTML =
      "How do you write 'Hello World' in an alert box?"),

    Text1: (document.getElementById("answer1").textContent =
      "msg('Hello World');"),

    Text2: (document.getElementById("answer2").textContent =
      "msgBox('Hello World');"),

    Text3: (document.getElementById("answer3").textContent =
      "<alertBox('Hello World');"),

    Text4: (document.getElementById("answer4").textContent =
      "alert('Hello World');"),

    correct: "Text4",
  },
  {
    //forth question
    question: (document.getElementById("question").innerHTML =
      "How do you write 'Hello World' in an alert box?"),

    Text1: (document.getElementById("answer1").textContent =
      "msg('Hello World');"),

    Text2: (document.getElementById("answer2").textContent =
      "msgBox('Hello World');"),

    Text3: (document.getElementById("answer3").textContent =
      "<alertBox('Hello World');"),

    Text4: (document.getElementById("answer4").textContent =
      "alert('Hello World');"),

    correct: "Text4",
  },

  {
    //fifth question
    question: (document.getElementById("question").innerHTML =
      "How do you create a function in JavaScript?"),

    Text1: (document.getElementById("answer1").textContent =
      "function = myFunction()"),

    Text2: (document.getElementById("answer2").textContent =
      "function:myFunction()"),

    Text3: (document.getElementById("answer3").textContent =
      "function myFunction()"),

    Text4: (document.getElementById("answer4").textContent =
      "{function = myFunction()}"),

    correct: "Text3",
  },
];


//select elements
var quizApp = document.getElementById("quiz-app");
var quizArea = document.querySelector(".quiz-area");
//h2 question
var questionEl = document.getElementById("question");
//li all the answers
var answerArea = document.querySelectorAll(".answer");
var countSpan = document.querySelector(".count span");
//li each answer
var answer_1 = document.getElementById("answer1");
var answer_2 = document.getElementById("answer2");
var answer_3 = document.getElementById("answer3");
var answer_4 = document.getElementById("answer4");
//button
var submitButton = document.querySelector(".submit-button");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  //enter to each index of an question array
  const currentQuizData = theQuestions[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  answer_1.innerText = currentQuizData.Text1;
  answer_2.innerText = currentQuizData.Text2;
  answer_3.innerText = currentQuizData.Text3;
  answer_4.innerText = currentQuizData.Text4;
}

function deselectAnswers() {
   answerArea.forEach(function (answerEl) {
     if ((answerEl.checked = false)) return answerEl;
   });
}

function getSelected() {
  let answer;
  answerArea.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === theQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < theQuestions.length) {
      loadQuiz();
    } else {
      quizApp.innerHTML = `<h2> you answer ${score}/ ${theQuestions.length} quesions correctly </h2>
  
  <button onclick = "location.relaoad()">reload</button>
  `;
    }
  }
});