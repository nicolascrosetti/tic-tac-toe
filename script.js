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
    const playerOne = players('Nico', 'x');
    const playerTwo = players('Computer', 'o');
    const addMarks = () => {
        cellsArray.forEach(cell => {
            cell.addEventListener('click', () => {
                gameBoard.gameArray[cell.dataset.key] = playerOne.mark;
                fillDisplay();
            });
        });
    }
    const fillDisplay = () => {
        cellsArray.forEach(cell => {
            cell.textContent = gameBoard.gameArray[cell.dataset.key];
        });
    }
    return {
        addMarks, fillDisplay
    };
})();

//GET DOM ELEMENTS
const cellsArray = document.querySelectorAll('.cell');

//MAIN SECTION
game.addMarks();
game.fillDisplay();



