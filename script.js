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
