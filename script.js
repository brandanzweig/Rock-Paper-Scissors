let compScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = [Math.floor(Math.random() * choices.length)];
    const compChoice = choices[randomNum].toLowerCase();
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! You both picked Rock"    
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You tied! You both picked scissors"    
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! You both picked paper"    
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        return "You Lose! Rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        return "You Lose! Paper beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        return "You Lose! Paper beats rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!"
    }                       
}

const playerSelection = ("rock").toLowerCase();

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection); 
     }

    if (playerScore > compScore) {
        return "You won!"
    } else if (playerScore < compScore) {
        return "You lose..."
    } else {
        return "It's a tie!"
    }
}
console.log(game());