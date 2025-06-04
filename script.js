const form = document.querySelector(".frmPlayersName");
const comment = document.querySelector(".comment");
const cell = document.querySelector(".cell");

function Gameboard(){
    const gameboard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let winCells = {
        i1 :-1,
        i2 :-1,
        i3 :-1,
    };

    let winner = 0;

    const changeValue = (index, value) =>{
        if(gameboard[index] !== 'x' && gameboard[index] !== 'o'){
            gameboard[index] = value
            return true;
        }
        return false;
    };
    
    const getGameBoard = () => gameboard;
   
    const checkValue = (i1, i2, i3) => {
        if(gameboard[i1] === gameboard[i2] && gameboard[i2] === gameboard[i3]){
            if(gameboard[i1] === 'x'){
                winner = 1;
                winCells.i1 = i1;
                winCells.i2 = i2;
                winCells.i3 = i3;
            }
            else{
                winner = 2;
                winCells.i1 = i1;
                winCells.i2 = i2;
                winCells.i3 = i3;
            }
        }
        return winner;
    };

    const checkWinner = () =>{
        if(checkValue(0, 1, 2) != 0)
            return true;
        if(checkValue(3, 4, 5) != 0)
            return true;
        if(checkValue(6, 7, 8) != 0)
            return true;
        if(checkValue(0, 3, 6) != 0)
            return true;
        if(checkValue(1, 4, 7) != 0)
            return true;
        if(checkValue(2, 5, 8) != 0)
            return true;
        if(checkValue(0, 4, 8) != 0)
            return true;
        if(checkValue(2, 4, 6) != 0)
           return true;
        return false;
    };

    const playTurn = (index, value) => {
        if(changeValue(index, value)){
            return checkWinner();
        }
    }

    const getWinner = () => winner;

    const getWinCells = () => winCells;

    return {playTurn, getGameBoard, checkWinner, getWinner, getWinCells};
}

function Player(name, mark){
    return {name, mark};
}

function playGame(){
    let game = new Gameboard();
    let p1 = new Player('player 1', 'x');
    let p2 = new Player('player 2', 'o');
    let turn = 1;
    let counter = 0;

    function changeName(playerOneName, playerTwoName){
        p1 = new Player(playerOneName, 'x');
        p2 = new Player(playerTwoName, 'o');
    }

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        game = new Gameboard();
        const playerOneName = document.querySelector(".playerOneName").value;
        const playerTwoName = document.querySelector(".playerTwoName").value;
        counter = 0;
        turn = 1;
        
        changeName(playerOneName, playerTwoName);
        comment.textContent = `${playerOneName}'s turn (X)`;

        document.querySelectorAll('.cell').forEach(e => {
            e.classList.replace ("disapled", "apled");
            e.classList.remove("winCell");
            e.textContent = "";
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener("click", (e) => {
            const cell = e.target.closest('.apled');
            if (cell) {
                const index = cell.dataset.index;
                cell.classList.replace("apled", "disapled");

                if(turn === 1){
                    const result = game.playTurn(index, p1.mark);
                    cell.textContent = '✖️';
                    comment.textContent = `${p2.name}'s turn (O)`;
                    if(result){
                        displayWinner();
                        return;
                    }
                    turn = 2;
                }
                else{
                    const result = game.playTurn(index, p2.mark);
                    cell.textContent = '⭕';
                    comment.textContent = `${p1.name}'s turn (X)`;
                   if(result){
                    displayWinner();
                    return;
                   }
                    turn = 1;
                }
                if(++counter === 9){
                    displayWinner();
                    return;
                }
            }
        });
    });

    function displayWinner(){
        if(game.getWinner() === 1)
            comment.textContent = `${p1.name} WON!`;
        else if (game.getWinner() === 2)
            comment.textContent = `${p2.name} WON!`;
        else
            comment.textContent = `It is a TIE!`;

        document.querySelectorAll('.cell').forEach(e => {
            e.classList.replace ("apled", "disapled");
        });

        if(game.getWinner() === 1 || game.getWinner === 2){
            // const cells = document.querySelectorAll(`.cell[data-index="0"],
            //      .cell[data-index="1"], .cell[data-index="2"`);
            const cells = document.querySelectorAll(`.cell[data-index="${game.getWinCells().i1}"],
                 .cell[data-index="${game.getWinCells().i2}"], .cell[data-index="${game.getWinCells().i3}"]`);

            cells.forEach(cell => {
                cell.classList.add("winCell");
            });
        }
    }
}

playGame();