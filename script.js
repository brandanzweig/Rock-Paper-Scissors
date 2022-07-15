function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = [Math.floor(Math.random() * choices.length)];
    const compChoice = choices[randomNum];
    return compChoice
}
console.log(computerPlay());