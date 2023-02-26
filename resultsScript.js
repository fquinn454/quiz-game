function updateScore(){
    document.getElementById("result").innerHTML = "Congratulations you got: "+ sessionStorage.getItem("percentageResult")+"%";
}

updateScore();

