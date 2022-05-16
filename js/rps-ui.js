let button = document.querySelectorAll('button');
let score = document.getElementById('score');

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

button.forEach(item => {
    item.addEventListener('click', event => {
        playRound(item.getAttribute('id'), computerPlay());
    });
    });
