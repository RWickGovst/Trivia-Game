// create array of question objects
var trivia = [
    {
    question: "Why did the cow jump over the moon?",
    answers: {a: 'This is impossible',b: 'The butcher was chasing it',c: 'The cow is fully cross-fit'
},
correctAnswer: 'c'
    },
    {
        question: "What is the meaning of life?",
        answers: {a: 'To ride',b: 'To experience',c: 'To feel'
    },
    correctAnswer: 'a'
    },
    {
    question: "Why do we live in Illinois?",
    answers: {a: 'The cold winters',b: 'The high taxes',c: 'The crooked politicians'
},
correctAnswer: 'a'
    },
];
// $(document).ready(function() {
// create a game countdown timer
var number = 100;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
  number--;
  
  $("#show-number").html("<h2>" + number + "</h2>");
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
  
//   else{ or while number > 1

// while timer is > 00
//   for(var i=0; i<trivia.length;i++){

// display the first question and answer

$("#question").text(trivia[0].question);   
// the user selects a button (a,b,or c) - the button stays dark

$("#answers").text(trivia[0].answers.a);
$("#answersTwo").text(trivia[0].answers.b);
$("#answersThree").text(trivia[0].answers.c);


// grab question and answer list one at a time
   
// function generateQuiz(question, answer, correctAnswer);
// click to answer question
// submitButton.onclick = function(question, ){
    // function showResult();
// }

// onclick submit button - checks right or wrong
// increments right or wrong on test
// need a way to get to the next question after
//  after trivia.length is condition the quiz ends
}
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
//   });
$("#start").on("click", run);

