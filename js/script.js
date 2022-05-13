function computerPlay() {
    let randomNumber = getRandomInt(3);
    let choices = ["Rock","Paper","Scissors"];
    return choices[randomNumber];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function playRound(playerSelection, computerSelection){
    let computerAnswer = computerSelection.toLowerCase();
    let playerAnswer = playerSelection.toLowerCase();
    return playRoundHelper(playerAnswer, computerAnswer);

  }

  function playRoundHelper(playerAnswer, computerAnswer){
    if(playerAnswer === "rock"){
        if(computerAnswer === "paper") {
            console.log("You Lose! Paper beats Rock");
            return -1;
        }
        else if(computerAnswer === "scissors"){
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
        else {
            console.log("It's a Draw");
            return 0; 
        }
    }

    else if(playerAnswer === "paper"){
        if(computerAnswer === "scissors") {
            console.log("You Lose! Scissors beats Paper");
            return -1;
        }
        else if(computerAnswer === "rock"){
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else {
            console.log("It's a Draw");
            return 0; 
        } 
    }

    else if(playerAnswer === "scissors"){
        if(computerAnswer === "rock") {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        }
        else if(computerAnswer === "paper"){
            console.log("You Win! Scissors beats Paper");
            return 1;
        }
        else {
            console.log("It's a Draw");
            return 0; 
        }
    }
  }

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let gameOutput = 0;
    let continueGame = 1;
    while (continueGame === 1){
        let playerSelection = prompt("Pick Your Poison. (Rock, Paper or Scissors)");
        let computerSelection = computerPlay();
        gameOutput = playRound(playerSelection, computerSelection);

        if(gameOutput == 1) playerScore += 1;
        else if (gameOutput == -1) computerScore += 1;

        if(playerScore == 5)
        {
            continueGame = 0;
            console.log("You have won the game!");
        }
        else if (computerScore == 5){
            continueGame = 0;
            console.log("You have lost the game!");
        }
     }
}

game();