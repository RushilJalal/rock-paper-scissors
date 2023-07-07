choiceList = ['rock', 'paper', 'scissors'];
let playerScore = compScore = 0;

function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choiceList.length);
    const compChoice = choiceList[randIndex];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    selectionMsg = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
    resultMsg = "";

    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        resultMsg = "You won! Computer lost!";
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        resultMsg = "Computer won! You lost!";
    }

    else if (playerSelection === computerSelection)
        resultMsg = "It's a tie!";

    else
        resultMsg = "Invalid. \nKindly input rock, paper or scissors as your choice.";

    scoreMsg = `Player:${playerScore}, Computer:${compScore}`;

    return `${selectionMsg} \n${resultMsg} \n${scoreMsg}`
}

//loops over playRound until either user or computer reach 5 points
function game() {
    while (playerScore < 5 && compScore < 5) {
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore === 5)
        alert("Player won the game!");

    else
        alert("Computer won the game!");
}



