function getComputerChoice() {
  
    let num = Math.floor(Math.random() * 3) + 1;
    let result = '';
    if (num === 1) {result = 'rock'}
    if (num === 2) {result = 'paper'}
    if (num === 3) {result = 'scissors'}
    return result;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Hi')
    computerSelection = getComputerChoice()

    let rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (computerSelection === rules[playerSelection]) 
    {console.log('Player wins')}
    if (playerSelection === rules[computerSelection]) 
    {console.log('Computer wins')}
    if (playerSelection === computerSelection)
    {console.log('Draw!')}
}

playRound();