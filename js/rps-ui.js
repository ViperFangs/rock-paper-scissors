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

let button = document.querySelectorAll('button');

button.forEach(item => {
    item.addEventListener('click', event => {
        if(item.getAttribute('id') == "rock"){
            playRound("rock", computerPlay());
        }
        
        if(item.getAttribute('id') == "paper"){
            playRound("paper", computerPlay());
        }

        if(item.getAttribute('id') == "scissors"){
            playRound("scissors", computerPlay());
        }

        //event.stopPropagation();
    });
    });
