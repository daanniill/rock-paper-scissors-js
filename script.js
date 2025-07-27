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
}