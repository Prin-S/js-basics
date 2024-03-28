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

function playRound(playerSelection, computerSelection) { // Decide each round's winner
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Rock') {
            return ['A tie!', 0]; // Return [message, score] -> tie = 0, lose = -1, win = 1
        } else if (computerSelection == 'Paper') {
            return ['You lose! Paper beats Rock.', -1];
        } else {
            return ['You win! Rock beats Scissors.', 1];
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'Rock') {
            return ['You win! Paper beats Rock.', 1];
        } else if (computerSelection == 'Paper') {
            return ['A tie!', 0];
        } else {
            return ['You lose! Scissors beat Paper.', -1];
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'Rock') {
            return ['You lose! Rock beats Scissors.', -1];
        } else if (computerSelection == 'Paper') {
            return ['You win! Scissors beats Paper.', 1];
        } else {
            return ['A tie!', 0];
        }
    }
}

function getPlayerChoice () { // Player makes a selection
    let choice = prompt('Make your selection - rock, paper, or scissors.');

    if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
        return choice;
    } else { // If the selection is rock, paper, or scissors
        console.log('Try again. Only rock, paper, or scissors is allowed.')
        return getPlayerChoice(); // Recursion until a valid choice is made
    }
}

function playGame() { // Each game lasts 5 rounds - invalid choices don't count
    let score = 0; // Initilize score

    for (let i = 0; i < 5; i++) {
        let player = getPlayerChoice(); // Ask player to make a selection
        console.log(player); // Show player's selection
        let computer = getComputerChoice(); // Computer makes a selection
        let result = playRound(player, computer); // Play round to determine result
        console.log(result[0]); // Show result message
        score += result[1]; // Change score
    }

    console.log('After 5 rounds...'); // Show result after 5 rounds
    if (score > 0) {
        console.log('You win!');
    } else if (score < 0) {
        console.log('You lose!');
    } else {
        console.log('A tie!');
    }
    console.log(`Final score: ${score}`); // Show final score
}

playGame(); // Run function