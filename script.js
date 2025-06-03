const form = document.querySelector(".frmPlayersName");
const comment = document.querySelector(".comment");
const cell = document.querySelector(".cell");

function Gameboard(){
    const gameboard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let winner = 0;

    const changeValue = (index, value) =>{
        if(gameboard[index-1] !== 'x' && gameboard[index-1] !== 'o'){
            gameboard[index-1] = value
            return true;
        }
        return false;
    };
    
    const getGameBoard = () => gameboard;
   
    const checkValue = (i1, i2, i3) => {
        if(gameboard[i1] === gameboard[i2] && gameboard[i2] === gameboard[i3]){
            if(gameboard[i1] === 'x')
                winner = 1;
            else
                winner = 2;
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
        if(checkValue(2, 4, 7) != 0)
            return true;
        if(checkValue(2, 5, 8) != 0)
            return true;
        if(checkValue(0, 4, 8) != 0)
            return true;
        if(checkValue(2, 4, 6   ) != 0)
           return true;
        return false;
    }

    const getWinner = () => winner;

    return {changeValue, getGameBoard, checkWinner, getWinner};
}

function Player(name, mark){
    return {name, mark};
}

function playGame(playerOneName, playerTwoName){
    const game = new Gameboard();
    const p1 = new Player(playerOneName, 'x');
    const p2 = new Player(playerTwoName, 'o');

    for(let i=0; i<9; i++){

        if(i%2 === 0){
            comment.textContent = `${p1.name}'s turn (${p1.mark})`;
            if (userInput !== null) {
                if(!(game.changeValue(userInput, p1.mark)))
                    i--;
                if(game.checkWinner()){
                    break;
                }
            } 
            else {
                console.log("User cancelled the prompt.");
            }
        }
        else{
            comment.textContent = `${p2.name}'s turn (${p2.mark})`;
            if (userInput !== null) {
                if(!(game.changeValue(userInput, p2.mark)))
                    i--;
                if(game.checkWinner()){
                    break;
                }
            } 
            else {
                console.log("User cancelled the prompt.");
            }
        }
    }
    if(game.getWinner() === 1){
        console.log(`Player ${game.getWinner()} is the winner, name ${p1.name}, with "${p1.mark}"`);
    }
    else if(game.getWinner() === 2){
        console.log(`Player ${game.getWinner()} is the winner, name ${p2.name}, with "${p2.mark}"`);        
    }
    else{
        console.log("it is a stalemate");
    }
    console.log(game.getGameBoard());
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const playerOneName = document.querySelector(".playerOneName").value;
    const playerTwoName = document.querySelector(".playerTwoName").value;

    playGame(playerOneName, playerTwoName)
});

cell.addEventListener("click", () => {

});

// playGame();