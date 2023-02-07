function getComputerChoice() { 

    let num = Math.floor(Math.random() * 3) + 1;
    let result;                                             
    if (num === 1) { result = 'rock' }
    if (num === 2) { result = 'paper' }
    if (num === 3) { result = 'scissors' }
    return result; 
}

function playRound(playerSelection, computerSelection) {    //get player&bot select, make rules to apply for the round
    playerSelection = prompt('rock, paper, scissors?')
    computerSelection = getComputerChoice()

    let rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (computerSelection === rules[playerSelection]) { return 'Player wins' }
    if (playerSelection === rules[computerSelection]) { return 'Computer wins' }
    if (playerSelection === computerSelection) { return 'Draw!' }
}

function game() {                                     //play 3 round and keep track of score. then output final results
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 3; i++) {

        let result = playRound()
        if (result === 'Player wins') { playerScore += 1 };
        if (result === 'Computer wins') { computerScore += 1 };
        console.log(`${playerScore} to ${computerScore}`)
    }

    if (playerScore > computerScore) 
    {console.log(`Player won the game ${playerScore} to ${computerScore}`)}

    if (playerScore < computerScore)
     {console.log(`Computer won the game ${computerScore} to ${playerScore}`)}

    if (playerScore === computerScore) 
    {console.log(`Wow, draw with ${playerScore} to ${computerScore}!`)}
}

game();


