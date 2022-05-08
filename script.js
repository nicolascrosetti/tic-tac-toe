//FACTORY FUNCTIONS
const players = (name, mark) => {
    return { name,mark };
};

//MODULES
const gameBoard = (() => {
    const gameArray = [];
    return {
      gameArray
    };
})();

const game = (() => {
    const playerOne = players('Player One', 'X');
    const playerTwo = players('Player Two', 'O');
    let currentPlayer = playerOne;
    let isOver = false;
    
    const setPlayers = () => {
        playersBtn.addEventListener('click', () => {
            if(p1Input.value){
                playerOne.name = p1Input.value;
                p1Input.value = '';
            }
            if(p2Input.value){
                playerTwo.name = p2Input.value;
                p2Input.value = '';
            }
        });
    }

    const addMarks = () => {
        cellsArray.forEach(cell => {
            cell.addEventListener('click', () => {
                if(!cell.textContent){
                    gameBoard.gameArray[cell.dataset.key] = currentPlayer.mark;
                    fillDisplay();
                    checkWinner(playerOne);
                    checkWinner(playerTwo);
                    checkTie();
                    (currentPlayer == playerOne) ? (currentPlayer = playerTwo) : (currentPlayer = playerOne);
                    if(isOver){
                        restart();
                    }
                }
            });
        });
    }

    const fillDisplay = () => {
        cellsArray.forEach(cell => {
            cell.textContent = gameBoard.gameArray[cell.dataset.key];
        });
    }

    const checkWinner = (player) => {
        if(
            (gameBoard.gameArray[0] == player.mark && gameBoard.gameArray[1]== player.mark && gameBoard.gameArray[2] == player.mark)
            || (gameBoard.gameArray[3] == player.mark && gameBoard.gameArray[4]== player.mark && gameBoard.gameArray[5] == player.mark)
            || (gameBoard.gameArray[6] == player.mark && gameBoard.gameArray[7]== player.mark && gameBoard.gameArray[8] == player.mark)
            || (gameBoard.gameArray[0] == player.mark && gameBoard.gameArray[3]== player.mark && gameBoard.gameArray[6] == player.mark)
            || (gameBoard.gameArray[1] == player.mark && gameBoard.gameArray[4]== player.mark && gameBoard.gameArray[7] == player.mark)
            || (gameBoard.gameArray[2] == player.mark && gameBoard.gameArray[5]== player.mark && gameBoard.gameArray[8] == player.mark)
            || (gameBoard.gameArray[2] == player.mark && gameBoard.gameArray[4]== player.mark && gameBoard.gameArray[6] == player.mark)
            || (gameBoard.gameArray[0] == player.mark && gameBoard.gameArray[4]== player.mark && gameBoard.gameArray[8] == player.mark)
        ){
            alert(player.name + " wins!");
            isOver = true;
        }
    }

    const checkTie = () => {
        let fullCells = 0;
        gameBoard.gameArray.forEach(element => {
            if(element){
                fullCells++;
            }
        });
        if((fullCells == 9) && (isOver == false)){
            alert('Tie!');
            isOver = true;
        }
    }

    const restart = () => {
        cellsArray.forEach(element => {
            element.textContent = '';
        });
        gameBoard.gameArray = [];
        currentPlayer = playerOne;
        isOver = false;
    }

    return {
        setPlayers, addMarks, fillDisplay, checkWinner, checkTie, restart
    };
})();

//GET DOM ELEMENTS
const cellsArray = document.querySelectorAll('.cell');
const p1Input = document.querySelector('#p1-input');
const p2Input = document.querySelector("#p2-input");
const playersBtn = document.querySelector('#players-btn');

//MAIN SECTION
game.setPlayers();
game.addMarks();



