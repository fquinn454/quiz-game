// add score and end of quiz message to results page
function updateScore(){
    if(sessionStorage.getItem("percentageResult") >= 40){
        document.getElementById("result").innerHTML = "Congratulations you got: "+ sessionStorage.getItem("percentageResult")+"%";
    }
    else{
        document.getElementById("result").innerHTML = "Try again you got: "+ sessionStorage.getItem("percentageResult")+"%";
    }
}

updateScore();
