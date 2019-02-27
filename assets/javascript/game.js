
var wins = 0;
var losses = 0;

var gemA, gemB, gemC, gemD, userScore, targetScore

function setVariables() {
    targetScore = Math.floor(Math.random() * 120 + 19);
    gemA = Math.floor(Math.random() * 12 + 1);
    gemB = Math.floor(Math.random() * 12 + 1);
    gemC = Math.floor(Math.random() * 12 + 1);
    gemD = Math.floor(Math.random() * 12 + 1);
    userScore = 0;



}


setVariables()

$(document).ready(function () {
    $("#userScore").text(userScore);
    $("#targetScore").text(targetScore);
    $("#wins").text(wins); 

    $("#GemA").click(function() {
        console.log("click")
        userScore = userScore + gemA;
        // userScore += gemA short hand for above line
        $("#userScore").text(userScore); 

        if(userScore === targetScore) {
            wins++;
            $("#wins").text(wins); 
            setVariables();
        }
    
    })
})

