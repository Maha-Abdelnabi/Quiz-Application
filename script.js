
var quizArea = document.getElementsByClassName("quiz-area");
var answerArea = document.getElementsByClassName("answer");
document.getElementById("h2").innerHTML = "New text!";

console.log(quizArea);
console.log(answerArea);


//quizArea.innerHTML = "hello world";
const question1 = [
  {
    //first question
    q: (document.getElementById("h2").innerHTML =
      "Inside which HTML element do you put the JavaScript?"),
    a: [
      {
        Text: (document.getElementById("answer1").textContent = "<js>" ,isCorrect = false),
      },
      { Text: (document.getElementById("answer2").textContent = "<script>") },
      {
        Text: (document.getElementById("answer3").textContent = "<javascript>"),
      },
      {
        Text: (document.getElementById("answer4").textContent = "<scripting>"),
      },
    ],
  },
];
const question2=[
  {
    //second question
    q: (document.getElementById("h2").innerHTML =
      "Where is the correct place to insert JavaScript?"),
    a: [
      {
        Text: (document.getElementById("answer1").textContent =
          "The <body> section"),
      },
      {
        Text: (document.getElementById("answer2").textContent =
          "The <head> section"),
      },
      {
        Text: (document.getElementById("answer3").textContent =
          "Both the <head> section, and the <body> section"),
      },
      {
        Text: (document.getElementById("answer4").textContent =
          "None of the answers are true"),
      },
    ],
  },
];
const question3=[
  {
    //third question
    q: (document.getElementById("h2").innerHTML ="How do you write 'Hello World' in an alert box?"
      ),
    a: [
      {
        Text: (document.getElementById("answer1").textContent = "msg('Hello World');"),
      },
      { Text: (document.getElementById("answer2").textContent = "msgBox('Hello World'); "),
      
        Text: (document.getElementById("answer3").textContent = "<alertBox('Hello World'); "),
      },
      {
        Text: (document.getElementById("answer4").textContent ="alert('Hello World'); " ),
      },
    ],
  },
];
  const question4=[
  {
    //forth question
    q: (document.getElementById("h2").innerHTML =
      "How do you write 'Hello World' in an alert box?"),
    a: [
      {
        Text: (document.getElementById("answer1").textContent = "msg('Hello World');"),
      },
      { Text: (document.getElementById("answer2").textContent = "msgBox('Hello World');"),
    
        Text: (document.getElementById("answer3").textContent = "<alertBox('Hello World');"),
      },
      {
        Text: (document.getElementById("answer4").textContent = "alert('Hello World');"),
      },
    ],
  },
]
const question5=[
  {
    //fifth question
    q: (document.getElementById("h2").innerHTML =
      "How do you create a function in JavaScript?"),
    a: [
      {
        Text: (document.getElementById("answer1").textContent ="function = myFunction()", isCorrect = false),
      },
      { Text: (document.getElementById("answer2").textContent = "function:myFunction()"),
     },
      {
        Text: (document.getElementById("answer3").textContent = "function myFunction()"),
      },
      {
        Text: (document.getElementById("answer4").textContent = "{function = myFunction()}"),
      },
    ],
  },
];