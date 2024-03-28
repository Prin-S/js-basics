function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Rock') {
            return 'A tie!';
        } else if (computerSelection == 'Paper') {
            return 'You lose! Paper beats Rock.';
        } else {
            return 'You win! Rock beats Scissors.';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'Rock') {
            return 'You win! Paper beats Rock.';
        } else if (computerSelection == 'Paper') {
            return 'A tie!';
        } else {
            return 'You lose! Scissors beat Paper.';
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'Rock') {
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection == 'Paper') {
            return 'You win! Scissors beats Paper.';
        } else {
            return 'A tie!';
        }
    }
}

let player = prompt('Make your selection - rock, paper, or scissors.');
let computer = getComputerChoice();


console.log(player);
console.log(computer);
console.log(playRound(player, computer));