document.addEventListener("DOMContentLoaded", function() {
const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");
const compWins = document.getElementById("computer-wins");
const playerwins = document.getElementById("player-wins");
const compLosses = document.getElementById("computer-losses");
const playerLosses = document.getElementById("player-losses");
const draws = document.getElementById("draws");
const winnerStatusDisplay = document.getElementById("winner-status");
const roundsCount = document.getElementById("rounds");
const resetScoreBtn = document.getElementById("reset-score");
const autoPlayBtn = document.getElementById("computer-autoplay");
const playerMoveIcon = document.getElementById("player-icon");
const computerMoveIcon = document.getElementById("comp-icon");
const compMoveImage = document.getElementById("comp-move");
const playerMoveImage = document.getElementById("player-move");

const moveImages = {
  "Rock": "./Rock-emoji.png",
  "Paper": "./Paper-emoji.png",
  "Scissors": "./Scissors-emoji.png",
};

let Rounds = 1;

let Scores = {
  Draw: 0,
  "Player 1": 0,
  "Player 2": 0,
};

function resetScore() {
  Scores = { Draw: 0, "Player 1": 0, "Player 2": 0 };
  Rounds = 1;
  winnerStatusDisplay.textContent = "Currently draw";
  computerMoveIcon.style.display = "inline";
  playerMoveIcon.style.display = "inline";
  compMoveImage.classList.add("none");
  playerMoveImage.classList.add("none");
  updateUI();
}

function getRandomVal() {
  return Math.trunc(((Math.random() * 1800) % 3) + 1);
}

function getComputerMove() {
  const randomVal = getRandomVal();
  const moves = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
  };
  return randomVal > 0 && randomVal <= 3
    ? moves[randomVal]
    : "Error getting Computer move!!";
}

function getComputer2Move() {
  const Moves = ["Rock", "Paper", "Scissors"];
  const idx = Math.floor(Math.random() * Moves.length);
  return Moves[idx];
}

function getWinner(player1Move, player2Move) {
  if (player1Move === player2Move) return "Draw";

  const winMoves = [
    ["Rock", "Scissors"],
    ["Paper", "Rock"],
    ["Scissors", "Paper"],
  ];
  for (const winMove of winMoves) {
    if (player1Move === winMove[0] && player2Move === winMove[1])
      return `Player 1`;
  }
  return `Player 2`;
}

function updateScore(winStatus, status = 1) {
  if (Scores.hasOwnProperty(winStatus)) Scores[winStatus] += 1;
  updateUI();
  return Scores;
}

function updateUI() {
  compWins.textContent = Scores["Player 2"];
  compLosses.textContent = Scores["Player 1"];
  playerwins.textContent = Scores["Player 1"];
  playerLosses.textContent = Scores["Player 2"];
  draws.textContent = Scores["Draw"];
  roundsCount.textContent = Rounds;
}

function playGame(player1Move) {
  const computerMove = getComputerMove();
  const winner = getWinner(player1Move, computerMove);
  updateScore(winner);

  computerMoveIcon.style.display = "none";
  playerMoveIcon.style.display = "none";
  compMoveImage.classList.remove("none");
  playerMoveImage.classList.remove("none");
  compMoveImage.src = moveImages[computerMove];
  playerMoveImage.src = moveImages[player1Move];

  winnerStatusDisplay.textContent =
    winner === "Draw"
      ? "It's a draw!"
      : winner === "Player 1"
        ? "PLAYER WINS!"
        : "COMPUTER WINS!";
  Rounds++;
  updateUI();
}

rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));
resetScoreBtn.addEventListener("click", resetScore);
});
