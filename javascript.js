const choices = ['rock', 'paper', 'scissors'];
let humanPick;

function getComputerChoice(choices) {
    const randomPick = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomPick];
    return randomChoice;
}

const result = getComputerChoice(choices);

function getHumanChoice() {
    humanPick = window.prompt("What is your choice: rock, paper or scissors?");
    return humanPick;
    let humanPick = Text.toLowerCase()
}

getHumanChoice();
console.log(humanPick);