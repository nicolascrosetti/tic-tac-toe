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
    const playerOne = players('Nico', 'X');
    const playerTwo = players('Computer', 'O');
    let currentPlayer = playerOne;
    let isOver = false;
    

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
        addMarks, fillDisplay, checkWinner, checkTie, restart
    };
})();

//GET DOM ELEMENTS
const cellsArray = document.querySelectorAll('.cell');

//MAIN SECTION
game.addMarks();



