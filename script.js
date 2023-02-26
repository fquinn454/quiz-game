import quiz from 'Quiz.js';

const quiz = quiz;

// select the HTML elements that will have information added using script
function getPageElements(){
    const form = document.getElementById("question");
    const questionBox = document.getElementById("question-box");
    const answerA = document.getElementById("answer-a");
    const answerB = document.getElementById("answer-b");
    const answerC = document.getElementById("answer-c");
    const answerD = document.getElementById("answer-d");
    let score = document.getElementById("score");
    let scoreToPrint = parseInt(score.getAttribute('value'));
    let questionNum = document.getElementById("question-num");
    let questionNumToPrint = parseInt(questionNum.getAttribute('value'));
    const questionArrayNum = questionNumToPrint - 1;
    const question = quiz.questionArrayNum;
    const pageElements = [form, question, questionBox, answerA, answerB, answerC, answerD, score, scoreToPrint, questionNum, questionNumToPrint, questionArrayNum];
    return pageElements;
}

// set the innerHTML for the selected HTML elements
function setPageElements(pageElements, quiz){
    const question = quiz.getQuestions[pageElements[11]];
    pageElements[2].innerHTML = question.question;
    pageElements[3].setAttribute('value', question.answers[0]);
    pageElements[4].setAttribute('value', question.answers[1]);
    pageElements[5].setAttribute('value', question.answers[2]);
    pageElements[6].setAttribute('value', question.answers[3]);
    pageElements[9].setAttribute('value', pageElements[10]);
    pageElements[9].innerHTML = "Question "+pageElements[10]+" of "+quiz.getQuestions.length;
    pageElements[7].innerHTML = "Score: "+ pageElements[8];
};

// reset answer box background colours after question answered
function resetColors(){
    pageElements[3].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
    pageElements[4].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
    pageElements[5].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
    pageElements[6].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
}

let globalScore = 0;
let results = false;
let pageElements = getPageElements();
setPageElements(pageElements, quiz);

// Reset onhover light grey background to buttons after red/green change
pageElements[3].onmouseover = function(){
    pageElements[3].style.backgroundColor = "lightslategrey";
}

pageElements[3].onmouseout = function(){
    pageElements[3].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
}

pageElements[4].onmouseover = function(){
    pageElements[4].style.backgroundColor = "lightslategrey";
}

pageElements[4].onmouseout = function(){
    pageElements[4].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
}

pageElements[5].onmouseover = function(){
    pageElements[5].style.backgroundColor = "lightslategrey";
}

pageElements[5].onmouseout = function(){
    pageElements[5].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
}

pageElements[6].onmouseover = function(){
    pageElements[6].style.backgroundColor = "lightslategrey";
}

pageElements[6].onmouseout = function(){
    pageElements[6].style.backgroundColor = "rgba(248, 247, 56, 0.82)";
}

// Set event listener for form input
pageElements[0].addEventListener("submit", function(event) {
    const question = quiz.getQuestions[pageElements[11]];
    const buttonClicked = event.submitter.name;  
    // If answer correct
    if (buttonClicked === question.correctAnswer){
        globalScore++;
        document.getElementById(question.correctAnswer).style.backgroundColor = "rgba(41, 213, 84, 0.8)";
        pageElements[8]++;
        pageElements[7].setAttribute('value', pageElements[8]);
        pageElements[7].innerHTML = "Score: "+ pageElements[8];
    }
    // If answer incorrect
    else{
        for(let i = 3; i < 7; i++){
            if(pageElements[i].getAttribute('name') === question.correctAnswer){
                pageElements[i].style.backgroundColor = "rgba(41, 213, 84, 0.8)";
            }
            else{
                pageElements[i].style.backgroundColor = "rgba(235, 88, 88, 0.8)";
            }
        }
    }
    event.preventDefault();
    
    pageElements[10]++;
    pageElements[9].setAttribute('value', pageElements[10]);
    pageElements = getPageElements();
    if (pageElements[10] <= quiz.getQuestions.length){

        setTimeout(function() {
            setPageElements(pageElements, quiz);
            resetColors();
        }, 1500);
        
    }
    else{
        setTimeout(function(){
            window.location = './results.html';
        }, 1500);
        const percentageResult = Math.round((globalScore/quiz.getQuestions.length) * 100, 0);
        // use session storage to store % quiz score for results page
        sessionStorage.setItem("percentageResult", percentageResult);
    }
});

