const form = document.getElementById("q1");
const answerA = document.getElementById("q1-a");
const answerB = document.getElementById("q1-b");
const answerC = document.getElementById("q1-c");
const answerD = document.getElementById("q1-d");
const score = document.getElementById("score");
const questionNum = document.getElementById("question-num");
questionNumToPrint = questionNum.getAttribute('value');
questionNum.innerHTML = "Question "+questionNumToPrint+" of 10"

form.addEventListener("submit", function(event) {
    const buttonClicked = event.submitter.name;
    
    // If answer correct
    if (buttonClicked === 'q1-b'){
        answerB.style.backgroundColor = "rgba(41, 213, 84, 0.8)";
        scoreToPrint = parseInt(score.getAttribute('value')) + 1;
        score.setAttribute('value', scoreToPrint);
        score.innerHTML = "Score: "+ scoreToPrint;
    }
    // If answer incorrect
    else{
        answerA.style.backgroundColor = "rgba(235, 88, 88, 0.8)";
        answerB.style.backgroundColor = "rgba(41, 213, 84, 0.8)";
        answerC.style.backgroundColor = "rgba(235, 88, 88, 0.8)";
        answerD.style.backgroundColor = "rgba(235, 88, 88, 0.8)";
    }
    // Disable buttons after answer submitted
    answerA.disabled = "true";
    answerB.disabled = "true";
    answerC.disabled = "true";
    answerD.disabled = "true";
    // Prevent page refresh after form submit
    event.preventDefault();
  });
