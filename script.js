choiceList = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choiceList.length);
    const compChoice = choiceList[randIndex];
    return compChoice;
}