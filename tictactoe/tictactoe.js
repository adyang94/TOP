//CONST AND VARIABLES--------------------------------------------

const grid = document.querySelector('.grid');

let board = [];

//FUNCTIONS-------------------------------------------
const misc = (() => {
    let winner = '';
    const checkwinner = () => {
        console.log('Checkwinner running');
        //check column
        for(i = 0; i < 3; i++) {
            if((board[i].dataset.player === board[i+3].dataset.player)
                && (board[i].dataset.player === board[i+6].dataset.player)){
                    winner = board[i].dataset.player;
                    return {winner};
            }
        }
        // check rows
        for(i=0; i < 9; i = i + 3) {
            if ((board[i].dataset.player === board[i+1].dataset.player) &&
               (board[i+1].dataset.player === board[i+2].dataset.player)) {
                winner = board[i].dataset.player;
                return {winner};
            }
        }
        // check diagonals
        if((board[0].dataset.player === board[4].dataset.player) && 
           (board[4].dataset.player === board[8].dataset.player)){
            winner = board[0].dataset.player;
            return winner;
           }
        if((board[2].dataset.player === board[4].dataset.player) && 
           (board[4].dataset.player === board[6].dataset.player)){
            winner = board[4].dataset.player;
            return winner;
        }
        return {winner};
    }

    const resetBoard = function () {
        
        console.log('RESET BOARD CALLED');
        let gridCell = document.querySelectorAll('.gridCell');
        gridCell.forEach(cell => grid.removeChild(cell));
        return;
    }
    return {checkwinner, winner, resetBoard, resetBtn};
})();

const game = (() => {
    let round = 0;
    let turn = 1;
    let setupDone;
    
    const setup = function () {
        setupDone = true;
        for(i=0; i < 9; i++) {
            let gridCell = document.createElement('div');
            grid.appendChild(gridCell);

            gridCell.classList.add('gridCell');
            gridCell.id = `grid${i}`;
            console.log(`${gridCell.id}`);
            gridCell.addEventListener('click', game.play);

            // next line allows us to store extra data in the HTML file.
            //We are saying that the player data set for each div is undefined;
            gridCell.dataset.player = '';
            //push gridCells into board.  This is important to allow us to scan through the board array for a winner.
            board.push(gridCell);
        }
        return {turn, board};
    }
    const play = (event, checkWinner) => {
        console.log('NEXT ROUND-----------------');
        console.log('play is running');
        console.log(`ROUND IS: ${round}`);
        console.log(`TURN: ${turn}`);
        if(setupDone){
            switch(turn) {
                case 1:
                    if(event.target.dataset.player !== '1' && event.target.dataset.player !== '2') {
                        turn = 2;
                        round++;
                        //Next line selects the element targeted and sets the dataset-player to PLAYER 1.  Likewise for player 2 below.
                        event.target.dataset.player = 1;
                        event.target.textContent = 'X';
                        misc.checkWinner;
                    }
                    break;
                case 2:
                    if(event.target.dataset.player != 1 && event.target.dataset.player != 2) {
                        turn = 1;
                        round++;
                        event.target.dataset.player = 2;
                        event.target.textContent = 'O';
                        misc.checkWinner;
                    }
                    break;
            }
            console.log(`Event.target.dataset.player: ${event.target.dataset.player}`);
        }

        return;
    }
    
    return {
        round,
        setup,
        play
    }
})();

const test = (() => {
    game.setup();
    const resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', misc.resetBoard);
    
})();
