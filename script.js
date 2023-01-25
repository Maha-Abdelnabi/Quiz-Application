//first starting page
var homePage = document.getElementById("home-page");
var questionsPage = document.getElementById("questions-page");

function myFunction() {
  //the onclick func
  homePage.classList.add("hide"); //hide all the element on the page,and only show the elements that got selected
  questionsPage.classList.remove("hide");
  questionsPage.classList.add("show");
  var fname = document.getElementById("fname"); //the initials
}
//the questions
var theQuestions = [
  {
    //first question
    question: "Inside which HTML element do you put the JavaScript?",

    Text1: "<js>",

    Text2: "<script>",

    Text3: "<javascript>",

    Text4: "<scripting>",

    correct: "answer_2", //the input id which matches the label for
  },

  {
    //second question
    question: "Where is the correct place to insert JavaScript?",

    Text1: "The <body> section",

    Text2: "The <head> section",

    Text3: "Both the <head> section, and the <body> section",

    Text4: "None of the answers are true",

    correct: "answer_1",
  },
  {
    //third question
    question: "How do you write 'Hello World' in an alert box?",

    Text1: "msg('Hello World');",

    Text2: "msgBox('Hello World');",

    Text3: "<alertBox('Hello World');",

    Text4: "alert('Hello World');",

    correct: "answer_4",
  },
  {
    //forth question
    question:
      "How to write an IF statement for executing some code if 'i' is not equal to five?",

    Text1: "if (i <> 5)",

    Text2: "if (i != 5)",

    Text3: "if i <> 5",

    Text4: "if i =! 5 then",

    correct: "answer_2",
  },

  {
    //fifth question
    question: "How do you create a function in JavaScript?",

    Text1: "function = myFunction()",

    Text2: "function:myFunction()",

    Text3: "function myFunction()",

    Text4: "{function = myFunction()}",

    correct: "answer_3",
  },
];

//select DOM elements
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
//timer
var countDownEl = document.querySelector(".countdown");

//var for the questions functions
var currentQuiz = 0;
var score = 0;


//the main funtion
function loadQuiz() {
  deselectAnswers(); //this function to remove the answer from the pervios quiz  (Default answer),and prepare it for the next quiz

  const currentQuizData = theQuestions[currentQuiz];

  //These attributes make it easy to change a DOM element’s text and its HTML code

  // preper the next QuizData,,enter each question and answers to their places in html
  questionEl.innerText = currentQuizData.question;
  answer_1.innerText = currentQuizData.Text1;
  answer_2.innerText = currentQuizData.Text2;
  answer_3.innerText = currentQuizData.Text3;
  answer_4.innerText = currentQuizData.Text4;
}

function deselectAnswers() {
  //if i don't run this function,the answer from the previous question will stay the same for the next answer
  //enter to each index of an question array,,and detect if it false
  answerArea.forEach(function (answerEl) {
    if ((answerEl.checked = false)) return answerEl;
  });
}
//the selested answers..matches the checked answer to the id
function getSelected() {
  var answer;
  answerArea.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id; //.id returns to the element that matches the id
    }
  });
  return answer;
}
//the button function
submitButton.addEventListener("click", () => {
  const answer = getSelected(); //if the answer that selected matches the correct one ,,the score will add 1
  if (answer) {
    if (answer === theQuestions[currentQuiz].correct) {
      score++;
    } else {
      time = time - 15;// takes out 15 seconds on each wrong answer
    }

    currentQuiz++; //go to next question

    //to stop the quiz
    if (currentQuiz < theQuestions.length && time > 0) {
      loadQuiz();
      //last page
    } else {//game is over
      quizApp.innerHTML = `<h2>${fname.value}, you score is ${score}/ ${theQuestions.length}  correct </h2>`;
    }
  }
});
loadQuiz();


//countdown timer
var startingMinutes = 3;
var time = startingMinutes * 60; // getting all the seconds
//function that run every second
var intEl = setInterval(updateCountdown, 1000);

function updateCountdown() {
  var minutes = Math.floor(time / 60); //math.floor to retrieve the number without a decimal
  var seconds = time % 60;
  var currentTime = `${minutes}.${seconds}`; //it's a float num

 // console.log(parseFloat(currentTime));
  time--; // minus every second
  countDownEl.innerHTML = currentTime;
  //to stop the timer at zero
  if (parseFloat(currentTime) <= 0.01) {
    countDownEl.innerHTML = 0;
    clearInterval(intEl); //to stop the timer at the consol at zero
  }
//game is over
  if (time === 0) {
    quizApp.innerHTML = `<h2>${fname.value}, you score is ${score}/ ${theQuestions.length}  correct </h2>`;
  }
}
