// create array of question objects
var trivia = [
    {
    question: "Why did the cat jump over the moon?",
    answers: {a: 'This is impossible',b: 'The dog was chasing it',c: 'The cat is fully cross-fit'
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
}
$("#start").on("click", run);
// while timer is > 00
//   for(var i=0; i<trivia.length;i++){
    // grab question and answer list one at a time
   
// display question and then possible answers in a table format?
       
        // keep totals of right and wrong answers

//  call function to start display
// $(document).ready(function() {

    

        
        // generateQuiz();
    

//   });
// function generateQuiz(question, answer, correctAnswer);
// click to answer question
// submitButton.onclick = function(question, ){
    // function showResult();
// }
