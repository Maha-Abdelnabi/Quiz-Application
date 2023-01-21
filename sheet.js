let theQuestions ={ 
    question1:
  {
    //first question
    q: (document.getElementById("h2").innerHTML =
      "Inside which HTML element do you put the JavaScript?"),
    a1: [
      {
        Text1:
          ((document.getElementById("answer1").textContent = "<js>"),
          (isCorrect = false)),
      },
      {
        Text2:
          ((document.getElementById("answer2").textContent = "<script>"),
          (isCorrect = true)),
      },
      {
        Text3:
          ((document.getElementById("answer3").textContent = "<javascript>"),
          (isCorrect = false)),
      },
      {
        Text4:
          ((document.getElementById("answer4").textContent = "<scripting>"),
          (isCorrect = false)),
      },
    ],
  },

question2:
  {
    //second question
    q: (document.getElementById("h2").innerHTML =
      "Where is the correct place to insert JavaScript?"),
    a2: [
      {
        Text1:
          ((document.getElementById("answer1").textContent =
            "The <body> section"),
          (isCorrect = true)),
      },
      {
        Text2:
          ((document.getElementById("answer2").textContent =
            "The <head> section"),
          (isCorrect = false)),
      },
      {
        Text3:
          ((document.getElementById("answer3").textContent =
            "Both the <head> section, and the <body> section"),
          (isCorrect = false)),
      },
      {
        Text4:
          ((document.getElementById("answer4").textContent =
            "None of the answers are true"),
          (isCorrect = false)),
      },
    ],
  },

 question3 : 
  {
    //third question
    q: (document.getElementById("h2").innerHTML =
      "How do you write 'Hello World' in an alert box?"),
    a3: [
      {
        Text1:
          ((document.getElementById("answer1").textContent =
            "msg('Hello World');"),
          (isCorrect = false)),
      },
      {
        Text2:
          ((document.getElementById("answer2").textContent =
            "msgBox('Hello World');"),
          (isCorrect = false)),

        Text3:
          ((document.getElementById("answer3").textContent =
            "<alertBox('Hello World');"),
          (isCorrect = false)),
      },
      {
        Text4:
          ((document.getElementById("answer4").textContent =
            "alert('Hello World');"),
          (isCorrect = true)),
      },
    ],
  },

 question4 :
  {
    //forth question
    q: (document.getElementById("h2").innerHTML =
      "How do you write 'Hello World' in an alert box?"),
    a4: [
      {
        Text1:
          ((document.getElementById("answer1").textContent =
            "msg('Hello World');"),
          (isCorrect = false)),
      },
      {
        Text2:
          ((document.getElementById("answer2").textContent =
            "msgBox('Hello World');"),
          (isCorrect = false)),

        Text3:
          ((document.getElementById("answer3").textContent =
            "<alertBox('Hello World');"),
          (isCorrect = false)),
      },
      {
        Text4:
          ((document.getElementById("answer4").textContent =
            "alert('Hello World');"),
          (isCorrect = true)),
      },
    ],
  },
 question5 :
  {
    //fifth question
    q: (document.getElementById("h2").innerHTML =
      "How do you create a function in JavaScript?"),
    a5: [
      {
        Text1:
          ((document.getElementById("answer1").textContent =
            "function = myFunction()"),
          (isCorrect = false)),
      },
      {
        Text2:
          ((document.getElementById("answer2").textContent =
            "function:myFunction()"),
          (isCorrect = false)),
      },
      {
        Text3:
          ((document.getElementById("answer3").textContent =
            "function myFunction()"),
          (isCorrect = true)),
      },
      {
        Text4:
          ((document.getElementById("answer4").textContent =
            "{function = myFunction()}"),
          (isCorrect = false)),
      },
    ],
  },

}

console.log(theQuestions);
console.log(theQuestions.question1);
//console.log(theQuestions.a1);
