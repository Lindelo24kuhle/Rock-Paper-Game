const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer = computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function checkWinner() {
    if (player === computer) {
        return "Draw!";
    } else if ((computer === "ROCK" && player === "PAPER") ||
               (computer === "PAPER" && player === "SCISSORS") ||
               (computer === "SCISSORS" && player === "ROCK")) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}
