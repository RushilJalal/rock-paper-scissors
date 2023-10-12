choiceList = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choiceList.length);
    return choiceList[randIndex];
}

let playerScore = 0;
let compScore = 0;
const output = document.querySelector(".output")
const selectionMsg = document.querySelector(".selection-msg");
const resultMsg = document.querySelector(".result-msg");
const scoreMsg = document.querySelector(".score-msg");
const button = document.querySelectorAll(".btn");

button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        output.classList.remove("hidden");
        const audio = document.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
        playerSelection = e.currentTarget.value;
        computerSelection = getComputerChoice();
        playRound();
    });
});

function playRound() {
    selectionMsg.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}`;

    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        resultMsg.textContent = "You won! Computer lost!";
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        resultMsg.textContent = "Computer won! You lost!";
    }

    else if (playerSelection === computerSelection)
        resultMsg.textContent = "It's a tie!";

    else
        resultMsg.textContent = "Invalid. Kindly input rock, paper or scissors as your choice.";

    if (playerScore === 5 || compScore === 5) {
        setGameOver();
    }

    scoreMsg.textContent = `Player:${playerScore}, Computer:${compScore}`;
}

function setGameOver() {
    if (playerScore > compScore)
        output.textContent = "🥳You won the game! Congratulations!🎉";
    else
        output.textContent = "😢Computer won! You lost! Better luck next time.😢";

    const resetButton = document.createElement("button");
    resetButton.textContent = "Restart";
    resetButton.classList.add("btn", "reset-button");
    output.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    location.reload(); // Reload the page to reset the game state
}

