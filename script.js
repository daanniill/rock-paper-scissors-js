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
        return "rock"
    });
    paper.addEventListener("click", () => {
        return "paper"
    });
    scissors.addEventListener("click", () => {
        return "scissors"
    });
};

function playGame() {
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

    const humanSelection = getHumanSelection();
    const computerSelection = getComputerSelection();
    playRound(humanSelection, computerSelection);

    if (humanScore === computerScore) {
        console.log("it's a tie")
    } else if (humanScore > computerScore) {
        console.log("human wins!")
    } else {
        console.log("computer wins!")
    }
}

playGame();