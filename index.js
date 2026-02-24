const GAME_STATE = {
    Running: 0,
    Win: 1,
    Draw: 2,
}
let isGameOver = false;
let isXTurn = true;
const board = ['','','','','','','','',''];

function getGameState() {
    // columns
    if (
        (board[0] == board[1] && board[1] == board[2] && board[0] != '') || 
        (board[3] == board[4] && board[4] == board[5] && board[3] != '') || 
        (board[6] == board[7] && board[7] == board[8] && board[6] != '')
    ) {
        return GAME_STATE.Win;
    }

    // rows
    if (
        (board[0] == board[3] && board[3] == board[6] && board[0] != '') ||
        (board[1] == board[4] && board[4] == board[7] && board[1] != '') ||
        (board[2] == board[5] && board[5] == board[8] && board[2] != '')
    ) {
        return GAME_STATE.Win;
    }

    // diagonals
    if (
        (board[0] == board[4] && board[4] == board[8] && board[0] != '') ||
        (board[2] == board[4] && board[4] == board[6] && board[2] != '')
    ) {
        return GAME_STATE.Win;
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i] == '') return GAME_STATE.Running; 
    }

    return GAME_STATE.Draw;
}

function updateGameStateDiv(state) {
    const gameStateSpan = document.querySelector("#game_state_div > span");
    switch (state) {
        case GAME_STATE.Running:
            gameStateSpan.innerText = `Next: ${isXTurn ? 'X' : 'O'}` 
            break;
        case GAME_STATE.Win:
            gameStateSpan.innerText = `Winner: ${isXTurn ? 'O' : 'X'}` 
            break;
        case GAME_STATE.Draw:
            gameStateSpan.innerText = "Game is draw" 
            break;
        default:
            return new Error("Invalid status value");
    }
}

function handleBtnClick(btn, i) {
    if (isGameOver) return;

    if (board[i] != '') return; 
    board[i] = isXTurn ? 'X' : 'O';
    btn.textContent = board[i];
    isXTurn = !isXTurn;

    const state = getGameState();
    updateGameStateDiv(state);

    isGameOver = state != GAME_STATE.Running;
}

function resetGame() {
    window.location.reload();
}

window.addEventListener("load", () => {
    updateGameStateDiv(getGameState());
    document.querySelectorAll("#board button").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            handleBtnClick(btn, i);
        });
    });

    document.querySelector("#game_state_div > button").addEventListener("click", () => {
        resetGame();
        updateGameStateDiv(getGameState());
    });
});
