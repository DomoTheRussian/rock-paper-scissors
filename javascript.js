const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choices) {
    const randomPick = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomPick];
    return randomChoice;
}

const result = getComputerChoice(choices);
