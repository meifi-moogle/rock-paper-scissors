function getComputerChoice() {

    let num = Math.floor(Math.random() * 3) + 1;
    let result;
    if (num === 1) { result = 'rock' }
    if (num === 2) { result = 'paper' }
    if (num === 3) { result = 'scissors' }
    return result;
}

const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')

btnRock.addEventListener('click', function () {    /////////// only 'rock' works so far, have to figure out how to have multiple selects
    game('rock', getComputerChoice())
})
btnPaper.addEventListener('click', function () {
    game('paper', getComputerChoice())
})
btnScissors.addEventListener('click', function () {
    game('scissors', getComputerChoice())
})


function playRound(playerSelection, computerSelection) { //get player&bot select, make rules and apply them
    let rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }
    if (computerSelection === rules[playerSelection]) { console.log('logging player wins'); return 'Player wins' }
    if (playerSelection === rules[computerSelection]) { console.log('logging computer wins'); return 'Computer wins' }
    if (playerSelection === computerSelection) { console.log('logging draw'); return 'Draw' }
}

let playerScore = 0;
let computerScore = 0;
let currentScore = document.querySelector('#currentScore')   // game default stuff
let isGameOver = false;
let winningScore = 3;

function game(playerSelection, computerSelection) {    

    let result = playRound(playerSelection, computerSelection)

    if (!isGameOver) {

        if (result === 'Player wins') {
            playerScore += 1;
            console.log(`Player (${playerScore}) Computer (${computerScore})`)
            currentScore.textContent = `Player (${playerScore}) Computer (${computerScore})`
        };
        if (result === 'Computer wins') {
            computerScore += 1;
            console.log(`Player (${playerScore}) Computer (${computerScore})`)
            currentScore.textContent = `Player (${playerScore}) Computer (${computerScore})`
        };
        if (result === 'Draw') {
            console.log(`Player (${playerScore}) Computer (${computerScore})`)
            currentScore.textContent = `Player (${playerScore}) Computer (${computerScore})`
        };
    }

    if (playerScore === winningScore || computerScore === winningScore) {
        isGameOver = true;
        const resultDisplay = document.querySelector('#resultDisplay')
        if (playerScore > computerScore) { resultDisplay.textContent = 'PLAYER WON' }
        if (playerScore < computerScore) { resultDisplay.textContent = 'COMPUTER WON' }
        if (playerScore === computerScore) { resultDisplay.textContent = 'DRAW OMG' }
    }
}


