const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcome = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const compScoreSpan = document.querySelector(".comp-score");

let compScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const p = document.createElement("p")
        p.innerText = `It's a tie! You both choose ${playerSelection}`;
        outcome.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        const p = document.createElement("p")
        p.innerText = "You win! Scissors beats paper!"
        outcome.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        const p = document.createElement("p")
        p.innerText = "You Lose! Rock beats scissors!"
        outcome.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        const p = document.createElement("p")
        p.innerText = "You Lose! Paper beats scissors!"
        outcome.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        const p = document.createElement("p")
        p.innerText = "You win! Paper beats rock!"
        outcome.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        const p = document.createElement("p")
        p.innerText = "You Lose! Paper beats rock!"
        outcome.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        const p = document.createElement("p")
        p.innerText = "You win! Rock beats scissors!"
        outcome.appendChild(p);
    }                       
}

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `You won ${playerScore} to ${compScore}!`;
        outcome.appendChild(h2)
    } else if (compScore === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `You lost ${compScore} to ${playerScore}!`;
        outcome.appendChild(h2)
    }  
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player score: ${playerScore}`
    compScoreSpan.innerText = `Computer score: ${compScore}`
}

rockButton.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

paperButton.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})