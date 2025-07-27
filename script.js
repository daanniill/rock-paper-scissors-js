let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        humanScore += 1;
        computerScore += 1;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}; 

function getComputerSelection() {
    let num_choice = Math.floor(Math.random * 3);
    if (num_choice === 0) {
        return "rock";
    } else if (num_choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
};

function getHumanSelection() {
    return prompt("Please enter your choice:");
};

const humanSelection = getHumanSelection();
const computerSelection = getHumanSelection();

playRound(humanSelection, computerSelection)