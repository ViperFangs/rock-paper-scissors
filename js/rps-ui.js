const button = document.querySelectorAll('button');
const score = document.getElementById('score');
const playerScoreContainer = document.getElementById('playerScore');
const computerScoreContainer = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;
let gameOver = 0;

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
            score.textContent = "You Lose! Paper beats Rock";
            return -1;
        }
        else if(computerAnswer === "scissors"){
            score.textContent = "You Win! Rock beats Scissors";
            return 1;
        }
        else {
            score.textContent = "It's a Draw";
            return 0; 
        }
    }

    else if(playerAnswer === "paper"){
        if(computerAnswer === "scissors") {
            score.textContent = "You Lose! Scissors beats Paper";
            return -1;
        }
        else if(computerAnswer === "rock"){
            score.textContent = "You Win! Paper beats Rock";
            return 1;
        }
        else {
            score.textContent = "It's a Draw";
            return 0; 
        } 
    }

    else if(playerAnswer === "scissors"){
        if(computerAnswer === "rock") {
            score.textContent = "You Lose! Rock beats Scissors";
            return -1;
        }
        else if(computerAnswer === "paper"){
            score.textContent = "You Win! Scissors beats Paper";
            return 1;
        }
        else {
            score.textContent = "It's a Draw";
            return 0; 
        }
    }

    return 0;

    }

function resetGame(){
    gameOver = 0;
    playerScore = 0;
    computerScore = 0;
    playerScoreContainer.textContent = `Player Score: ${playerScore}`;
    computerScoreContainer.textContent = `Computer Score: ${computerScore}`;
}


function playGame(event){
    console.log(event.path[0]);
    let gameOutput = playRound(event.path[0].getAttribute('id'), computerPlay());

    if(gameOutput == 1) {
        playerScore += 1;
        playerScoreContainer.textContent = `Player Score: ${playerScore}`;
    }
    else if(gameOutput == -1) {
        computerScore += 1;
        computerScoreContainer.textContent = `Computer Score: ${computerScore}`;
    }

    if(playerScore > 4) {
        score.textContent = "You won the game!"
        gameOver = 1;
    }

    if(computerScore > 4) {
        score.textContent = "You lost the game :("
        gameOver = 1;
    }

    if(gameOver == 1){
        resetGame();
    }

}

button.forEach(item => item.addEventListener('click', playGame));
