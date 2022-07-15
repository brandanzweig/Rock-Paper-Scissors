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
        return "You win! Scissors beats paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Paper beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!"
    }                       
}
const playerSelection = ("rock").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));