function computerPlay() {
    let randomNumber = getRandomInt(3);
    let output = ["Rock","Paper","Scissors"];
    return output[randomNumber];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }