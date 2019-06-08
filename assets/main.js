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
// need to start a game timer, counting down
function count() {
    var time = 75;
    time--;
  
    // Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#time-left").text(converted);
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = 60;
    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
  }
// while timer is > 00
  for(var i=0; i<trivia.length;i++){
    // grab question and answer list one at a time
    function generateQuiz(question, quizContainer, results, submitButton){
// display question and then possible answers in a table format?
        function showQuestions(question, quizContainer){
            // code will go here
        }
    // check answer
        function showResult(question, quizContainer, results){
            // code will go here
        }
        // keep totals of right and wrong answers

//  call function to start display
startButton.onclick = function(event){
    function count();
// function generateQuiz(question, answer, correctAnswer);
}
// click to answer question
// submitButton.onclick = function(question, ){
    // function showResult();
// }