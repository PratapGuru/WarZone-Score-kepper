const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#reset');
const player1Display = document.querySelector('#player1Display');
const player2Display = document.querySelector('#player2Display');
const winningScoreSelect = document.querySelector('#playto');



let player1Score = 0;
let player2Score = 0;
let winnerPoint = 5;
let gameOver = false;

button1.addEventListener('click', function(e) {
    if (!gameOver) {
        player1Score += 1;
        if (player1Score === winnerPoint) {
            gameOver = true;
            player1Display.classList.add("has-text-primary");
            player2Display.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
        player1Display.textContent = player1Score;
    }
})
button2.addEventListener('click', function(e) {
    if (!gameOver) {
        player2Score += 1;
        if (player2Score === winnerPoint) {
            gameOver = true;
            player2Display.classList.add("has-text-primary");
            player1Display.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
        player2Display.textContent = player2Score;
    }
})
winningScoreSelect.addEventListener('change', function(e) {
    winnerPoint = parseInt(this.value)
})
button3.addEventListener('click', restGame);

function restGame() {
    gameOver = false;
    player1Score = 0;
    player2Score = 0;
    player1Display.textContent = 0;
    player2Display.textContent = 0;
    player1Display.classList.remove("has-text-primary", "has-text-danger");
    player2Display.classList.remove("has-text-primary", "has-text-danger");
    button1.disabled = false;
    button2.disabled = false;
}

const player1Form = document.querySelector('#player1form');
const player2Form = document.querySelector('#player2form');
const playersList = document.querySelector('#playerList');

player1Form.addEventListener('submit', function(e) {
    e.preventDefault();

    const player1Name = player1Form.elements.player1Name.value;
    addPlayer1(player1Name);

})
player2Form.addEventListener('submit', function(e) {
    e.preventDefault();

    const player2Name = player2Form.elements.player2Name.value;
    addPlayer2(player2Name);

})

const addPlayer1 = function(player1Name) {
    const player1NameLIst = document.querySelector('li');
    const bTage = document.createElement('b');
    bTage.append(player1Name, player1Score);
    player1NameLIst.append(`${player1Name}${" "}${"vs"}`);
    playersList.append(player1NameLIst);
}
const addPlayer2 = function(player2Name) {
    const palyer2NameLIst = document.querySelector('li');
    const bTage = document.createElement('b');
    bTage.append(player2Name, player2Score);
    palyer2NameLIst.append(`${" "}${player2Name}${" "}`);
    playersList.append(palyer2NameLIst);
}