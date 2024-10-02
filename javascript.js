const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
    const randomPick = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomPick];
    return randomChoice;
}

const result = getComputerChoice(choices);
console.log(getComputerChoice(choices));

function getHumanChoice() {
    humanPick = window.prompt("What is your choice: rock, paper or scissors?").toLowerCase();
    return humanPick;
}

getHumanChoice();
console.log(humanPick);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
}