// computer gameplay
function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
computerPlay()

// human gameplay
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose, Paper beats rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win, Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win, Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose, Scissors beats Paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose, Rock beats Scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
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

for (let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt('Rock, Paper or Scissors? ');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
 }
