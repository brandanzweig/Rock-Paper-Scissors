const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcome = document.querySelector(".outcome");

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

rockButton.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
})

paperButton.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
})


// function game() {
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt("Do you want rock, paper, or scissors?").toLowerCase();
    //     const computerSelection = computerPlay();
    //     console.log(playRound(playerSelection, computerSelection)); 
    //  }

    // if (playerScore > compScore) {
    //     return "You won!"
    // } else if (playerScore < compScore) {
    //     return "You lose..."
    // } else {
    //     return "It's a tie!"
    // }
// }
// console.log(game());