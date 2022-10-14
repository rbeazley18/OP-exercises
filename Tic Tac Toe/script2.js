const choseX = document.getElementById("choose-x");
const choseO = document.getElementById("choose-o");
const boardButtons = document.querySelectorAll(".grid-item")

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");
const block9 = document.getElementById("block9");


const Players = () => {
    const selectX = () => {
        const playerSelection = "X";
        const playerNumber = "Player1"
        console.log(playerSelection, playerNumber);
        return playerSelection;
    };

    const selectO = () => {
        const playerSelection = "O";
        const playerNumber = "Player2"
        console.log(playerSelection, playerNumber);
        return playerSelection;
    };



    // const playerOrder = () => {
    //     buttons.forEach((button) => {
    //         button.addEventListener('click', () => {
    //             console.log(buttons)
    //             if (playerNumber === "Player1") {
    //                 buttons.innerText = "X";
    //             } else {
    //                 buttons.innerText = "O";
    //             }
    //         });
    //     });
    // };

    return { selectO, selectX };

};

const GameBoard = () => {
    const { selectX } = Players();
    const { selectO } = Players();

    const playerMark = () => {
        boardButtons.forEach((button) => {
            button.addEventListener('click', () => {
                if (player.selectX()) {
                    boardButtons.innerText = 'X';
                } else if (player.selectO()) {
                    boardButtons.innerText = 'O';
                }
            });
        });
    };

    return { playerMark, selectX, selectO }
}

const player = Players()
const gameBoard = GameBoard()
choseX.onclick = () => player.playerMark();
choseO.onclick = () => player.playerMark();

gameBoard.playerMark();

// console.log(playerSelection);