function getComputerChoice() { // Randomize computer's selection
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) { // Decide each round's winner
    let computerSelection = getComputerChoice();

    const roundResult = document.createElement("li");
    const currentScore = document.createElement("li");
    const winner = document.createElement("h3");

    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Rock') {
            roundResult.textContent = 'A tie!';
        } else if (computerSelection == 'Paper') {
            roundResult.textContent = 'You lose! Paper beats Rock.';
            computerScore += 1;
        } else {
            roundResult.textContent = 'You win! Rock beats Scissors.';
            playerScore += 1;
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'Rock') {
            roundResult.textContent = 'You win! Paper beats Rock.';
            playerScore += 1;
        } else if (computerSelection == 'Paper') {
            roundResult.textContent = 'A tie!';
        } else {
            roundResult.textContent = 'You lose! Scissors beat Paper.';
            computerScore += 1;
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'Rock') {
            roundResult.textContent = 'You lose! Rock beats Scissors.';
            computerScore += 1;
        } else if (computerSelection == 'Paper') {
            roundResult.textContent = 'You win! Scissors beats Paper.';
            playerScore += 1;
        } else {
            roundResult.textContent = 'A tie!';
        }
    }
    
    currentScore.textContent = `You: ${playerScore}, Computer: ${computerScore}`;

    results.appendChild(roundResult);
    results.appendChild(currentScore);

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            winner.textContent = 'You win!';
        } else {
            winner.textContent = 'You lose!';
        }
        
        results.appendChild(winner);
        choices.forEach(choice => choice.disabled = true);
    }
}

const choices = document.querySelectorAll(".choice");
const results = document.querySelector("#results");

choices.forEach(choice => {
    choice.addEventListener("click", playRound.bind(this, choice.id));
});