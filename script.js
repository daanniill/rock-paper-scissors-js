let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

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

    roundsPlayed++;

    if (roundsPlayed === maxRounds) {
        showFinalResult();
        disableButtons();
    }
}; 

function showFinalResult() {
    const finalResultDiv = document.querySelector("#final-result");
    let finalMessage = `<br><strong>Final Score:</strong> Human ${humanScore} - Computer ${computerScore}<br>`;
    if (humanScore > computerScore) {
        finalMessage += "🎉 You win the game!";
    } else if (humanScore < computerScore) {
        finalMessage += "💻 Computer wins the game!";
    } else {
        finalMessage += "🤝 It's a tie!";
    }
    finalResultDiv.innerHTML = finalMessage;
}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

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