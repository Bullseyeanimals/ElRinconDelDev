const x = "x";
const circle = "circle";
const allElements = document.querySelectorAll("[data-container]");
const winningCombins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const winningMsg = document.getElementById("winning-msg");
const restartBtn = document.getElementById("restartBtn");
const winningMsgText = document.getElementById("[data-winning-msg]");
let circleTurn;

startGame();

restartBtn.addEventListener("click", startGame)

function startGame() {
    circleTurn = false;
    allElements.forEach(container => {
        container.addEventListener("click", handleClick, {once: true});
    });
}

function handleClick(e) {
   const cell = e.target;
   const currentClass = circleTurn ? circle : x;
   placeSign(cell, currentClass);


   swapTurns();
}

function placeSign(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}