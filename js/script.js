function computerPlay() {
    let randomNumber = getRandomInt(3);
    let choices = ["Rock","Paper","Scissors"];
    return choices[randomNumber];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function playRound(playerSelection, computerSelection){
    let correctPlayerSelection = playerSelection.toLowerCase();
    let gameOptions = ["Rock","Paper","Scissors"];
  }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));