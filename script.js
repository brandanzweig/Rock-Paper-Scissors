const computerPlay = () => {
    const arrayOfChoices = ["Rock", "Paper", "Scissors"];
    const randomNum = [Math.floor(Math.random() * arrayOfChoices.length)]
    console.log(arrayOfChoices[randomNum]);
}
computerPlay();