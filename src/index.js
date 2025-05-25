const rockBtn = document.getElementById('rock-button');
const paperBtn = document.getElementById('paper-button');
const scissorsBtn = document.getElementById('scissors-button');
const compWins = document.getElementById('computer-wins');
const playerwins = document.getElementById('player-wins');
const compLosses = document.getElementById('computer-losses');
const playerLosses = document.getElementById('player-losses');
const draws = document.getElementById('draws');
const winnerStatusDisplay = document.getElementById('winner-status');
const roundsCount = document.getElementById('rounds');
const resetScoreBtn = document.getElementById('reset-score');
const autoPlayBtn = document.getElementById('computer-autoplay');


let Rounds = 1;

let Scores = {
    "Draw": 0,
    "Player 1": 0,
    "Player 2": 0
}

function getPlayerMove(){
    const playerButtons = [rockBtn, paperBtn, scissorsBtn];
    const buttonToMoveMap = {
        "rockBtn" : "Rock",
        "paperBtn": "Paper",
        "scissorsBtn": "Scissors"
    };
    for(const item of playerButtons){
        item.addEventListener('click', () => {
            return buttonToMoveMap[item];
        });
    }
}

function resetScore(){
    Scores = {
        "Draw": 0,
        "Player 1": 0,
        "Player 2": 0
    };
    Rounds = 1;
    updateScore('', 0);
}

function getRandomVal(){
    return Math.trunc((Math.random() * 1800) % 3 + 1);
}
console.log(getRandomVal());

function getComputerMove(){
    const randomVal = getRandomVal();
    const moves = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    }
    return  (randomVal > 0 && randomVal <=3) ? moves[randomVal] :
     "Error getting Computer move!!"
}
console.log(getComputerMove());

function getComputer2Move(){
    const Moves = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor((Math.random()*Moves.length));
    return Moves[idx];
}
console.log(getComputer2Move());

function getWinner(player1Move, player2Move){
    if(player1Move === player2Move) return "Draw";

    const winMoves = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors","Paper"]
    ]
    for(const winMove of winMoves){
        if(player1Move === winMove[0]  &&  player2Move === winMove[1]) return `Player 1`;
    }
    return `Player 2`;
}
console.log(getWinner(getComputerMove(), getComputer2Move()));

function updateScore(winStatus, status = 1){
    if(Scores.hasOwnProperty(winStatus))Scores[winStatus] += 1;
    if(status === 0) Scores = {
        "Draw": 0,
        "Player 1": 0,
        "Player 2": 0
    }
    return Scores;
}

function playGame(player1Move, player2Move){
    const winner = getWinner(player1Move, player2Move);
   console.log(updateScore(winner));
   Rounds++;
}
playGame();
