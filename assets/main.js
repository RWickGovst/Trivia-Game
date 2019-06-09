// create array of question objects
var trivia = [
    {
    question: "Why did the cow jump over the moon?",
    answers: ['This is impossible','The butcher was chasing it', 'The cow is fully cross-fit'],
    correctAnswer: 'The cow is fully cross-fit'
},
    {
        question: "What is the meaning of life?",
        answers:['To ride','To experience','To feel'], 
        correctAnswer: 'To ride'
    },
    {
    question: "Why do we live in Illinois?",
    answers:  ['The cold winters','The high taxes', 'The crooked politicians'],
    correctAnswer: 'The cold winters'
}

];
// $(document).ready(function() {
// create a game countdown timer
var number = 100;
var intervalId;
var currentQ = 0;
var right = 0;
var wrong = 0;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log(trivia[currentQ]);
    $("#quiz-area").html("<h2>" +trivia[currentQ].question +"</h2>");
    for(var i=0; i<trivia[currentQ].answers.length; i++){
        $("#quiz-area").append("<button class= 'answer-button' id='button' data-name ='" +trivia[currentQ].answers[i]+ "'>" +trivia[currentQ].answers[i] +"</button>");
    }
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

$(".answer-button").on("click", function(e){
    console.log("on click answer button");
    $(".answer-button").addClass("active");
    if($(e.target).attr("data-name") === trivia[currentQ].correctAnswer){
        correctAnswer();
    }
    else{
        wrongAnswer();
    }
});
function correctAnswer(){
    clearInterval(intervalId);
    right++;
    $("#quiz-area").html("<h2>Correct: </h2>");
    if(currentQ === trivia.length-1){
        setTimeout(results, 3000);
    }
    else{
        setInterval(nextQuestion, 3000);
    }
}
function wrongAnswer(){
    clearInterval(intervalId);
    number = 100;
    wrong++;
    $("#quiz-area").html("<h2>Incorrect: </h2>");
    console.log(currentQ);
    console.log(trivia.length-1);
    
    if(currentQ === trivia.length-1){
        
        setTimeout(results, 3000);
    }
    
    else{
        setInterval(nextQuestion, 3000);
    }
}
function nextQuestion(){
    number = 100;
    $("#show-number").html("<h2>" + number + "</h2>");
    currentQ++;
    run();
}
function results(){
    $("#quiz-area").html("<h3>Here are the results: </h3>");
    $("#quiz-area").append("<h3>Correct " + right + "</h3>");
    $("#quiz-area").append("<h3>Wrong " + wrong + "</h3>");
}


// grab question and answer list one at a time
   
// function generateQuiz(question, answer, correctAnswer);
// click to answer question
// submitButton.onclick = function(question, ){
    // function showResult();
    // display result with another button to go to the next question
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

