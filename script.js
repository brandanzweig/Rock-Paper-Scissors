function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = [Math.floor(Math.random() * choices.length)]
    console.log(choices[randomNum]);
}
computerPlay();