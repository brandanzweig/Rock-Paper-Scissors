function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock"){
            return "Tie!";
        } else if (computerSelection == "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else {
            playerScore++;
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "paper"){
            return "Tie!";
        } else if (computerSelection == "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else {
            playerScore++;
            return "You win! Paper beats Rock";
        }
    }
    else {
        if (computerSelection == "scissors"){
            return "It's a tie";
        } else if (computerSelection == "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else {
            playerScore++;
            return "You win! Scissors beats Paper";
        }
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
}
