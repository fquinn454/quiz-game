const form = document.getElementById("q1");
const answer_a = document.getElementById("q1-a");
const answer_b = document.getElementById("q1-b");
const answer_c = document.getElementById("q1-c");
const answer_d = document.getElementById("q1-d");

form.addEventListener("submit", function(event) {
    const buttonClicked = event.submitter.name;
    if (buttonClicked === 'q1-b'){
        answer_b.style.backgroundColor = "green";
    }
    else{
        answer_a.style.backgroundColor = "rgba(211, 28, 28, 1)";
        answer_b.style.backgroundColor = "green";
        answer_c.style.backgroundColor = "rgba(211, 28, 28, 1)";
        answer_d.style.backgroundColor = "rgba(211, 28, 28, 1)";
    }
    event.preventDefault();
  });
