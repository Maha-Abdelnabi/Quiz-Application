//select elements
var quizArea = document.getElementsByClassName("quiz-area");
var answerArea = document.getElementsByClassName("answer");
var countSpan = document.querySelector(".count span");
var submitButton = document.querySelector(".submit-button");
//var bulletsSpanContainer = document.querySelector(".bullets .spans");

var questionTitle1 = title1();
var questionTitle2 = title2();
var questionTitle3 = title3();
var questionTitle4 = title4();
var questionTitle5 = title5();
var answerQ1 = asnsFunc1();
var answerQ2 = asnsFunc2();
var answerQ3 = asnsFunc3();
var answeQ4 = asnsFunc4();
var answerQ5 = asnsFunc5();

var questionArray = [
  questionTitle1,
  questionTitle2,
  questionTitle3,
  questionTitle4,
  questionTitle5,
];
var answersArray = [answerQ1, answerQ2, answerQ3, answeQ4, answerQ5];



//count
let num =5;
function creatBullets(num){
    countSpan.innerHTML = num;
for( let i =0; i < num ; i++){
    
}
}



//


//function addQuestionData(){
  //1st question
  function title1(){
  let questionTitle1 = (document.getElementById("h2").innerHTML =
    "Inside which HTML element do you put the JavaScript?");
return questionTitle1;
}

  //2nd question
  function title2(){
 let questionTitle2 = (document.getElementById("h2").innerHTML =
   "Where is the correct place to insert JavaScript?");
   return questionTitle2;
  }
  function title3(){
//3rd question
   let questionTitle3 =(document.getElementById("h2").innerHTML =
      "How do you write 'Hello World' in an alert box?");
      return questionTitle3;
  }
  function title4(){
//4th question
   let questionTitle4 =(document.getElementById("h2").innerHTML =
      "How do you write 'Hello World' in an alert box?");
      return questionTitle4;
  }
  function title5(){
//5th questin
   let questionTitle5 = (document.getElementById("h2").innerHTML =
     "How do you create a function in JavaScript?");
     return questionTitle5;
  }
//}
//console.log(addQuestionData);
//addQuestionData();


//function addAnswerData(){
    //1st answer
    function asnsFunc1(){
    let answerQ1 = {
      a1:  {
          Text1:
            ((document.getElementById("answer1").textContent = "<js>"),
            (isCorrect = false)),
    
          Text2:
            ((document.getElementById("answer2").textContent = "<script>"),
            (isCorrect = true)),
        
        
          Text3:
            ((document.getElementById("answer3").textContent = "<javascript>"),
            (isCorrect = false)),
        
    
          Text4:
            ((document.getElementById("answer4").textContent = "<scripting>"),
            (isCorrect = false)),
      }
      }
    return answerQ1;
    };

    //second answers
    function asnsFunc2() {
      let answerQ2 = {
        a2: {
          Text1:
            ((document.getElementById("answer1").textContent =
              "The <body> section"),
            (isCorrect = true)),

          Text2:
            ((document.getElementById("answer2").textContent =
              "The <head> section"),
            (isCorrect = false)),

          Text3:
            ((document.getElementById("answer3").textContent =
              "Both the <head> section, and the <body> section"),
            (isCorrect = false)),

          Text4:
            ((document.getElementById("answer4").textContent =
              "None of the answers are true"),
              (isCorrect = false)),
        }
        }
        return answerQ2;
      };
      //third answer
      function asnsFunc3() {
        let answerQ3 = {
          a3: {
            Text1:
              ((document.getElementById("answer1").textContent =
                "msg('Hello World');"),
              (isCorrect = false)),

            Text2:
              ((document.getElementById("answer2").textContent =
                "msgBox('Hello World');"),
              (isCorrect = false)),

            Text3:
              ((document.getElementById("answer3").textContent =
                "<alertBox('Hello World');"),
              (isCorrect = false)),

            Text4:
              ((document.getElementById("answer4").textContent =
                "alert('Hello World');"),
              (isCorrect = true)),
          }
          }
          return answerQ3;
        };
        //forth answer
        function asnsFunc4() {
          let answeQ4 = {
            a4: {
              Text1:
                ((document.getElementById("answer1").textContent =
                  "msg('Hello World');"),
                (isCorrect = false)),

              Text2:
                ((document.getElementById("answer2").textContent =
                  "msgBox('Hello World');"),
                (isCorrect = false)),

              Text3:
                ((document.getElementById("answer3").textContent =
                  "<alertBox('Hello World');"),
                (isCorrect = false)),

              Text4:
                ((document.getElementById("answer4").textContent =
                  "alert('Hello World');"),
                (isCorrect = true)),
            }
            }
            return answeQ4;
          };

          //fifth answer
          function asnsFunc5() {
            let answerQ5 = {
              a5: {
                Text1:
                  ((document.getElementById("answer1").textContent =
                    "function = myFunction()"),
                  (isCorrect = false)),

                Text2:
                  ((document.getElementById("answer2").textContent =
                    "function:myFunction()"),
                  (isCorrect = false)),

                Text3:
                  ((document.getElementById("answer3").textContent =
                    "function myFunction()"),
                  (isCorrect = true)),

                Text4:
                  ((document.getElementById("answer4").textContent =
                    "{function = myFunction()}"),
                  (isCorrect = false)),
              }
            }
            return answerQ5;
          };






     //console.log(questionArray);
submitButton.onclick = function(){
//get right answer
let theRightAnswer = {
    answerQ1: a1[1],
    answerQ2: a2[0],
    answerQ3: a3[3],
    answeQ4: a4[3],
    answerQ5: a5[2]
};
console.log(theRightAnswer);
//increase current index
i++;

//check the answer(right answer,num of questions)
//checkAnswer(theRightAnswer, num);

};

function checkAnswer(theRightAnswer, num){
    console.log(theRightAnswer);
    console.log(num);
}

     //click on submit





    //matchingQA();


// function checkAnswer(){
//     let theChooseAnswer;
//     for(let i = 0; i < answerArea.length; i++){
//         if( answerArea[i].checked){
//             theChooseAnswer = answerArea[i].dataset.answerArea;
//         }
//     }
//     console.log(checkAnswer());
// };
  




// const filterAnswer =[{a1}, {a2}, {a3},{a4}].filter(item => Object.values(item)[0]);


// console.log(filterAnswer);