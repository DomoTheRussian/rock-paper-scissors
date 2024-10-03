// Step 1: Setup the project structure : https://github.com/DomoTheRussian/rock-paper-scissors

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    humanChoice = window.prompt("What is your choice: rock, paper or scissors?");
    return humanChoice;
}

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock") {
        alert("You win! Rock breaks scissors.")
    } else if (computerChoice === "rock" && humanChoice.toLowerCase() === "paper") {
        alert("You win! Paper covers rock.")
    } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "scissors") {
        alert("You win! Scissors cuts the paper.")
    } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") {
        alert ("You lose! Paper covers rock.")
    } else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper") {
        alert ("You lose! Scissors cuts the paper")
    } else if (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors" ) {
        alert ("You lose! Rock breaks scissors.")
    } else {
        alert ("It's a DRAW")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Step 6: Write the logic to play the entire game
function playGame() {

}

console.log(humanSelection);
console.log(computerSelection);