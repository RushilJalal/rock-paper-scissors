choiceList = ['rock', 'paper', 'scissors'];

//choice played by computer
//returns a randomly generated choice from the available choices in choiceList. 
function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choiceList.length);
    const compChoice = choiceList[randIndex];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection === 'scissors' || playerSelection == 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper')
        return "You won! Computer lost!"

    else if (playerSelection == 'scissors' && computerSelection === 'rock' || playerSelection == 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors')
        return "You lose! Computer won!"

    else if (playerSelection === computerSelection)
        return "It's a tie!"

    else
        return "Invalid"
}

