
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
    $("#targetScore").text(targetScore);



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
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses); 
                    setVariables();
        
        }
    
    })

    $("#GemB").click(function() {
        console.log("click")
        userScore = userScore + gemB;
        // userScore += gemA short hand for above line
        $("#userScore").text(userScore); 

        if(userScore === targetScore) {
            wins++;
            $("#wins").text(wins); 
            setVariables();
        }
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses); 
                    setVariables();
        
        }
    
    })

    $("#GemC").click(function() {
        console.log("click")
        userScore = userScore + gemC;
        // userScore += gemA short hand for above line
        $("#userScore").text(userScore); 

        if(userScore === targetScore) {
            wins++;
            $("#wins").text(wins); 
            setVariables();
        }
        else if (userScore > targetScore) {
            losses++;
            $("#losses").text(losses); 
                    setVariables();
        
        }
    
    })

    $("#GemD").click(function() {
        console.log("click")
        userScore = userScore + gemD;
        // userScore += gemA short hand for above line
        $("#userScore").text(userScore); 

        if(userScore === targetScore) {
            wins++;
            $("#wins").text(wins); 
            setVariables();
        }
    

else if (userScore > targetScore) {
    losses++;
    $("#losses").text(losses); 
            setVariables();

}

    })
})

