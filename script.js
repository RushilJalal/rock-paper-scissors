choiceList = ['rock', 'paper', 'scissors'];
let playerScore = compScore = 0;

//choice played by computer
//returns a randomly generated choice from the available choices in choiceList. 
function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choiceList.length);
    const compChoice = choiceList[randIndex];
    return compChoice;
}

//Consists of game logic and returns round result 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You won! Computer lost! \n Player:${playerScore}, Computer:${compScore}`
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return `You lose! Computer won! \n Player:${playerScore}, Computer:${compScore}`
    }

    else if (playerSelection === computerSelection) {
        return `It's a tie! \n Player:${playerScore}, Computer:${compScore}`
    }

    else
        return "Invalid"
}

//loops over playRound until either user or computer reach 5 points
function game() {
    while (playerScore < 5 && compScore < 5) {
        playerSelection = prompt("Enter your choice");
        computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }

    if (playerScore === 5)
        alert("Player won the game!");

    else
        alert("Computer won the game!");
}

game();

