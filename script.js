let humanScore = 0;
let computerScore = 0;

function getComputerSelection() {
    let num_choice = Math.floor(Math.random() * 3);
    if (num_choice === 0) {
        return "rock";
    } else if (num_choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
};

function getHumanSelection() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    rock.addEventListener("click", () => {
        console.log("rock")
        return "rock"
    });
    paper.addEventListener("click", () => {
        console.log("paper")
        return "paper"
    });
    scissors.addEventListener("click", () => {
        console.log("scissors")
        return "scissors"
    });
};

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.querySelector("#result")
    let resultText = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;
    if (humanChoice === computerChoice) {
        humanScore += 1;
        computerScore += 1;
        resultText += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        resultText += "You win the round!";
    } else {
        computerScore += 1;
        resultText += "Computer won the round.";
    }

    resultText += `<br>Score: Human ${humanScore} - Computer ${computerScore}`;
    resultDiv.innerHTML = resultText;
}; 

function setupGame() {
    const choices = ["rock", "paper", "scissors"]
    choices.forEach(choice => {
        const button = document.querySelector(`#${choice}`);
        button.addEventListener("click", () => {
            const computerChoice = getComputerSelection();
            playRound(choice, computerChoice);
        });
    });
}

setupGame()