const form = document.getElementById("q1");
const answer_a = document.getElementById("q1-a");
const answer_b = document.getElementById("q1-b");
const answer_c = document.getElementById("q1-c");
const answer_d = document.getElementById("q1-d");

form.addEventListener("submit", function(event) {
    const buttonClicked = event.submitter.name;
    if (buttonClicked === 'q1-b'){
        answer_b.style.backgroundColor = "rgba(41, 213, 84, 0.8)";
    }
    else{
        answer_a.style.backgroundColor = "rgba(235, 88, 88, 0.8)";
        answer_b.style.backgroundColor = "rgba(41, 213, 84, 0.8)";
        answer_c.style.backgroundColor = "rgba(235, 88, 88, 0.8)";
        answer_d.style.backgroundColor = "rgba(235, 88, 88, 0.8)";
    }
    answer_a.disabled = "true";
    answer_b.disabled = "true";
    answer_c.disabled = "true";
    answer_d.disabled = "true";
    event.preventDefault();
  });
