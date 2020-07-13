//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
//first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//second question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//third question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//fourth question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
//fifty question
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);

q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);

q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);

q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);
q5a4.addEventListener("click", result4);

//#TODO: Define quiz functions here
function result1() {
  result1Score++, questionCount++;
  //alert("One Point to Gryffindor!");
  if (questionCount >= 5) {
    updateResult();
  }
}
function result2() {
  result2Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result3() {
  result3Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result4() {
  result4Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function updateResult() {
  if (result1Score >= 3) {
    result.innerHTML = "🚀You’ll go to Mars with X Æ A-Xii.";
  } else if (result2Score >3) {
    result.innerHTML =
      "💻You’ll use your CS wizardry to create a life-changing app.";
  } else if (result3Score >3) {
    result.innerHTML = "📱You’ll go viral (TikTok or Twitter, you decide).";
  } else if (result4Score > 3) {
    result.innerHTML = "🥰You'll meet your celebrity crush.";
  } else if (result1Score >=2) {
    result.innerHTML = "🦠You'll die of coronavirus";
  } else if (result2Score >= 2) {
    result.innerHTML = "🤖You’ll be the leader of the resistance against the robot uprising.";
  } else if (result3Score >= 2) {
    result.innerHTML = "🐶You'll get a pet dog.";
  } else if (result4Score >= 2) {
    result.innerHTML = "🐱You'll get a pet cat.";
  } else {
    result.innerHTML = "😲You'll meet Jack Dorsey on Thursday.";
  }
}
