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

let button = document.querySelectorAll('button');

button.forEach(item => {
    item.addEventListener('click', event => {
        if(item.getAttribute('id') == "rock"){
            console.log('rock');
        }
        
        if(item.getAttribute('id') == "paper"){
            console.log('paper');
        }

        if(item.getAttribute('id') == "scissors"){
            console.log('scissors');
        }

        //event.stopPropagation();
    });
    });
