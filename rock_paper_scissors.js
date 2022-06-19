function game() {
    for (let i = 0; i < 5; i++){

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerSelection = prompt("Choose Rock, Paper, or Scissors");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock"){
            return "Tie!";
        } else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "paper"){
            return "Tie!";
        } else if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You win! Paper beats Rock";
        }
    }
    else {
        if (computerSelection == "scissors"){
            return "It's a tie";
        } else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    }
        }
        console.log(playRound(playerSelection, computerSelection));
    }
}