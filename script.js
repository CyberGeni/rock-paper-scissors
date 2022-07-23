// fetch all the user responses from the html
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let score = document.getElementById('score');



rock.addEventListener("click", myFunction);

function myFunction() {
  alert('you clicked rock')
  console.log('you clicked rock')
}


// computer gameplay
function computerPlay() {
    choices = [rock, paper, scissors];
    return choices[Math.floor(Math.random() * choices.length)];
}
computerPlay()

// human gameplay
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You lose, Paper beats rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win, Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win, Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You lose, Scissors beats Paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose, Rock beats Scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return 'You win, Scissors beats Paper!';
    } else {
        return 'Invalid input!';
    }
}
// using do/while loop 

// rounds = 0
// do {
//     const playerSelection = prompt('Rock, Paper or Scissors? ');
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//     rounds++;
// }
// while (rounds < 5)

// function game () {
//     for (let rounds = 0; rounds < 5; rounds++) {
//         const playerSelection = prompt('Rock, Paper or Scissors? ');
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log(`Player: ${playerScore} Computer: ${computerScore}`);
// }
// game()

