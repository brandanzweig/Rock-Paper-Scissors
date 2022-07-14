function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
    

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "\n \n Player score: " + playerScore + "\n Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '\n \n You won the game! Reload the page to play again'
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "\n \n Player score: " + playerScore + "\n Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "\n \n Player score: " + playerScore + "\n Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '\n \n You lost the game. Reload the page to play again'
        }
    }
}

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        playRound(button.value)
    })
})
