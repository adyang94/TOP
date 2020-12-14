//CONST AND VARIABLES--------------------------------------------

const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('#reset');

//FUNCTIONS-------------------------------------------
const misc = (() => {
    const checkwinner = () => {
        let winner = '';
        //check column

        for(i = 0; i < 3; i++) {
            if((board[i].dataset.player === board[i+3].dataset.player)
                && (board[i].dataset.player === board[i+6].dataset.player)){
                return {winner = board[i].dataset.player};
            }
        }
        // check rows
        for(i=0; i < 9; i = i + 3) {
            if ((board[i].dataset.player === board[i+1].dataset.player) &&
               (board[i+1].dataset.player === board[i+2].dataset.player)) {
               return {winner = board[i].dataset.player};
            }
        }

        // check diagonals
    }
    
    return {checkwinner};
})();

const game = (() => {
    const setup = function () {
        let board = [];
        let round = 0;
        let turn = 1;
        let setupDone = true;
        for(i=0; i < 9; i++) {
            let gridCell = document.createElement('div');
            grid.appendChild(gridCell);
            gridCell.classList.add('gridCell');
            gridCell.id = `${i}`;
            console.log(`${gridCell.id}`);
            gridCell.addEventListener('click', game.play);

            // next line allows us to store extra data in the HTML file.
            //We are saying that the player data set for each div is undefined;
            gridCell.dataset.player = '';

            //push gridCells into board.  This is important to allow us to scan through the board array for a winner.
            board.push(gridCell);
        }
        return {turn, setupDone, round, board};
    }
    const play = (setupDone, turn, round) => {
        console.log('play is running');
        if(setupDone){
            switch(turn) {
                case 1:
                    turn = 2;
                    round++;
                    
                    //Next line selects the element targeted and sets the dataset-player to PLAYER 1.  Likewise for player 2 below.
                    e.target.dataset.player = 1;
                    checkWinner();
                    break;
                case 2:
                    turn = 1;
                    round++;
                    e.target.dataset.player = 2;
                    checkWinner();
                    break;
            }
        }
        return;
    }

    return {
        setup,
        play
    }
})();

const test = (() => {
    game.setup();
    
})();

//SCRIPT----------------------------------------------------