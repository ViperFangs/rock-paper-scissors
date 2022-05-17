const button = document.querySelectorAll('button');
const statusScreen = document.getElementById('status-screen');
const playerScoreContainer = document.getElementById('playerScore');
const computerScoreContainer = document.getElementById('computerScore');
const popupContainer = document.querySelector('.popup-container');
const finalOutput = document.querySelector('.final-output');
const repeatButton = document.querySelector('.repeat-button');
const computerChoice = document.getElementById('computer-choice');

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
            computerChoice.innerHTML = '<i class="fa-solid fa-hand"></i>';
            statusScreen.textContent = "Sad Defeat! Paper beats Rock";
            return -1;
        }
        else if(computerAnswer === "scissors"){
            computerChoice.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
            statusScreen.textContent = "Excellent Victory! Rock beats Scissors";
            return 1;
        }
        else {
            computerChoice.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
            statusScreen.textContent = "That's a Draw";
            return 0; 
        }
    }

    else if(playerAnswer === "paper"){
        if(computerAnswer === "scissors") {
            computerChoice.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
            statusScreen.textContent = "Sad Defeat! Scissors beats Paper";
            return -1;
        }
        else if(computerAnswer === "rock"){
            computerChoice.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
            statusScreen.textContent = "Excellent Victory! Paper beats Rock";
            return 1;
        }
        else {
            computerChoice.innerHTML = '<i class="fa-solid fa-hand"></i>';
            statusScreen.textContent = "It's a Draw";
            return 0; 
        } 
    }

    else if(playerAnswer === "scissors"){
        if(computerAnswer === "rock") {
            computerChoice.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
            statusScreen.textContent = "Sad Defeat! Rock beats Scissors";
            return -1;
        }
        else if(computerAnswer === "paper"){
            computerChoice.innerHTML = '<i class="fa-solid fa-hand"></i>';
            statusScreen.textContent = "Excellent Victory! Scissors beats Paper";
            return 1;
        }
        else {
            computerChoice.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
            statusScreen.textContent = "It's a Draw";
            return 0; 
        }
    }

    return 0;

    }

function resetGame(){
    popupContainer.classList.remove('show');
    repeatButton.addEventListener('click', resetGame);
    gameOver = 0;
    playerScore = 0;
    computerScore = 0;
    playerScoreContainer.textContent = `Player Score: ${playerScore}`;
    computerScoreContainer.textContent = `Computer Score: ${computerScore}`;
    computerChoice.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
    statusScreen.textContent = 'Choose Your Attack';
    repeatButton.removeEventListener('click', resetGame);
}


function playGame(event){
    let gameOutput = playRound(this.getAttribute('id'), computerPlay());

    if(gameOutput == 1) {
        playerScore += 1;
        playerScoreContainer.textContent = `Player Score: ${playerScore}`;
    }
    else if(gameOutput == -1) {
        computerScore += 1;
        computerScoreContainer.textContent = `Computer Score: ${computerScore}`;
    }

    if(playerScore > 4) {
        gameOver = 1;
        finalOutput.textContent = "You Won!"
    }

    else if(computerScore > 4) {
        finalOutput.textContent = "You Lost."
        gameOver = 1;
    }

    if(gameOver == 1){
        popupContainer.classList.add('show');
        repeatButton.addEventListener('click', resetGame);
    }

}

button.forEach(item => {
    item.addEventListener('click', playGame);
    item.addEventListener('touch', playGame, {passive: false});
    item.addEventListener('touchstart', playGame, {passive: false});
});
