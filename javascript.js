const choices = ['rock', 'paper', 'scissors'];
let humanPick;

function getComputerChoice(choices) {
    const randomPick = Math.floor(Math.random() * 3);
    const randomChoice = choices[randomPick];
    return randomChoice;
}

const result = getComputerChoice(choices);

function getHumanChoice() {
    humanPick = window.prompt("What is your choice: rock, paper or scissors?").toLocaleLowerCase();
    return humanPick;
}

getHumanChoice();
console.log(humanPick);