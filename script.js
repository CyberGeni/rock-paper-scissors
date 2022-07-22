// computer gameplay
function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
computerPlay()


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
    } else {
        return 'You win, Scissors beats Paper!';
    }
}
const playerSelection = prompt('Rock, Paper or Scissors? ');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));