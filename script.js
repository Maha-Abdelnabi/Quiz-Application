var theQuestions = [
  {
    //first question
    question:
      "Inside which HTML element do you put the JavaScript?",

    Text1:  "<js>",

    Text2:  "<script>",

    Text3:  "<javascript>",

    Text4:  "<scripting>",

    correct: "answer_2",//the input id which matches the label for
  },

  {
    //second question
    question:
      "Where is the correct place to insert JavaScript?",

    Text1: 
      "The <body> section",

    Text2: 
      "The <head> section",

    Text3: 
      "Both the <head> section, and the <body> section",

    Text4: 
      "None of the answers are true",

    correct: "answer_1",
  },
  {
    //third question
    question:
      "How do you write 'Hello World' in an alert box?",

    Text1: 
      "msg('Hello World');",

    Text2: 
      "msgBox('Hello World');",

    Text3: 
      "<alertBox('Hello World');",

    Text4: 
      "alert('Hello World');",

    correct: "answer_4",
  },
  {
    //forth question
    question:
      "How to write an IF statement for executing some code if 'i' is not equal to five?",

    Text1:  "if (i <> 5)",

    Text2:  "if (i != 5)",

    Text3:  "if i <> 5",

    Text4:  "if i =! 5 then",

    correct: "answer_2",
  },

  {
    //fifth question
    question:
      "How do you create a function in JavaScript?",

    Text1: 
      "function = myFunction()",

    Text2: 
      "function:myFunction()",

    Text3: 
      "function myFunction()",

    Text4: 
      "{function = myFunction()}",

    correct: "answer_3",
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
var countDownEl = document.querySelector(".countdown");

//countdown timer
const startingMinutes = 1;
var time = startingMinutes * 60;// getting all the seconds

setInterval(updateCountdown, 1000);
//function that run every second
function updateCountdown() {
  const minutes = Math.floor(time / 60); //math.floor to retrieve the number without a decimal
  var seconds = time % 60;
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  //let time = 0.25 * 60; //minutes * 60 seconds
 // let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second
  time--;
}

var currentQuiz = 0;
var score = 0;

loadQuiz(); //the main funtion

function loadQuiz() {
  deselectAnswers(); //this function to remove the answer from the pervios quiz  (Default answer),and prepare it for the next quiz

  const currentQuizData = theQuestions[currentQuiz];

  //These attributes make it easy to change a DOM element’s text and its HTML code

  // preper the nex QuizData
  questionEl.innerText = currentQuizData.question;
  answer_1.innerText = currentQuizData.Text1;
  answer_2.innerText = currentQuizData.Text2;
  answer_3.innerText = currentQuizData.Text3;
  answer_4.innerText = currentQuizData.Text4;
}

function deselectAnswers() {//if i don't run this function,the answer from the previous question will stay the same for the next answer
  //enter to each index of an question array
  answerArea.forEach(function (answerEl) {
    if ((answerEl.checked = false)) return answerEl;
  });
}

function getSelected() {
  var answer;
  answerArea.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;//.id returns to the element that matches the id, which means each answer id
    }
  });
  return answer;
}
//the button function
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === theQuestions[currentQuiz].correct) {
      score++;
    }

    

    currentQuiz++;

    if (currentQuiz < theQuestions.length) {//to stop the quiz
      loadQuiz();
    } else {
      quizApp.innerHTML = `<h2> you answer ${score}/ ${theQuestions.length} quesions correctly </h2>
  `;
    }
  }
});
