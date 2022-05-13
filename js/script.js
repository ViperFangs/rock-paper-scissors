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
    
    if(playerAnswer === "rock"){
        if(computerAnswer === "paper") return "You Lose! Paper beats Rock";
        else if(computerAnswer === "scissors") return "You Win! Rock beats Scissors";
        else return "It's a Draw"; 
    }
    else if(playerAnswer === "paper"){
        if(computerAnswer === "scissors") return "You Lose! Scissors beats Paper";
        else if(computerAnswer === "rock") return "You Win! Paper beats Rock";
        else return "It's a Draw"; 
    }
    else if(playerAnswer === "scissors"){
        if(computerAnswer === "rock") return "You Lose! Rock beats Scissors";
        else if(computerAnswer === "paper") return "You win! Scissors beats Paper";
        else return "It's a Draw"; 
    }

  }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));