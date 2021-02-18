//CONST AND VARIABLES--------------------------------------------

const grid = document.querySelector('.grid');

let board = [];

//FUNCTIONS-------------------------------------------
const misc = (() => {
    function checkwinner(winner, round) {
        //check column
        for(i = 0; i < 3; i++) {
            if(board[i].dataset.player != "") {
                if((board[i].dataset.player === board[i+3].dataset.player)
                    && (board[i].dataset.player === board[i+6].dataset.player)){
                        winner = board[i].dataset.player;
                        return {winner};
                }
            }
        }
        // check rows
        for(i=0; i < 9; i = i + 3) {
            if(board[i].dataset.player != "") {
                if ((board[i].dataset.player === board[i+1].dataset.player) &&
                (board[i+1].dataset.player === board[i+2].dataset.player)) {
                    winner = board[i].dataset.player;
                    console.log(`winner is : ${winner}`);
                    return {winner};
                }
            }
        }
        // check diagonals
        if(board[0].dataset.player != "") {
            if((board[0].dataset.player === board[4].dataset.player) && 
            (board[4].dataset.player === board[8].dataset.player)){
                winner = board[0].dataset.player;
                console.log(`winner is : ${winner}`);
                return winner;
            }
        }
        if(board[2].dataset.player != "") {
            if((board[2].dataset.player === board[4].dataset.player) && 
            (board[4].dataset.player === board[6].dataset.player)){
                winner = board[4].dataset.player;
                console.log(`winner is : ${winner}`);
                return winner;
            }
        }
        if(round === 9 && winner =='') {
            alert('IT\'S A TIE!');
        }
        return;
    }

    const resetBoard = function () {
        
        console.log('RESET BOARD CALLED----------------');
        let gridCell = document.querySelectorAll('.gridCell');
        gridCell.forEach(cell => grid.removeChild(cell));
        game.setup();
        return;

    }
    return {checkwinner, resetBoard, resetBtn, score1, score2};
})();  /*IMPORANT:  This is an IIFE (Immediately Invoked Function Expressions).  Data privacy is the primary reason for IIFE's.  The function is immediately ran and initialized.*/

const game = (() => {
    let setupDone;
    let round = 0;
    let turn = 1;
    let winner = '';
    let score1 = 0;
    let score2 = 0;
    
    function setup () {
        console.log('HELLO3');
        setupDone;
        round = 0;
        turn = 1;
        board = [];
        winner = '';

        setupDone = true;
        displayScore();
        for(i=0; i < 9; i++) {
            let gridCell = document.createElement('div');
            grid.appendChild(gridCell);

            gridCell.classList.add('gridCell');
            gridCell.id = `grid${i}`;
            console.log(`${gridCell.id}`);
            gridCell.addEventListener('click', game.play);

            // IMPORTANT:  '.dataset' references the "data-" attribute and allows us to store extra data in the HTML file.
            //We are saying that the player data set for each div is undefined.
            gridCell.dataset.player = '';
            //push gridCells into board.  This is important to allow us to scan through the board array for a winner.
            board.push(gridCell);
        }
        return {turn, board, round};
    }
    const play = (event) => {
        console.log('NEXT ROUND-----------------');
        // console.log('play is running');
        console.log(`ROUND IS: ${round}`);
        console.log(`winner is : ${winner}`);
        displayScore();
        // console.log(`TURN: ${turn}`);
        if(setupDone){
            if(round < 9) {
                switch(turn) {
                    case 1:
                        if(event.target.dataset.player !== '1' && event.target.dataset.player !== '2') {
                            turn = 2;
                            round++;
                            //Next line selects the element targeted and sets the dataset-player to PLAYER 1.  Likewise for player 2 below.
                            event.target.dataset.player = 1;
                            event.target.textContent = 'X';
                            if(misc.checkwinner(winner, round)) {
                                winner = 1;
                                round = 9;
                                score1++;
                                displayScore();
                                alert('PLAYER 1 WINS!');
                                return {winner, turn}
                            }
                            
                        }
                        break;
                    case 2:
                        if(event.target.dataset.player != 1 && event.target.dataset.player != 2) {
                            turn = 1;
                            round++;
                            event.target.dataset.player = 2;
                            event.target.textContent = 'O';
                            if(misc.checkwinner(winner, round)) {
                                winner = 2;
                                round = 9;
                                score2++;
                                displayScore();
                                alert('PLAYER 2 WINS!');
                                return {winner, turn}
                            }
                        }
                        break;
                }
            }
            console.log(`Event.target.dataset.player: ${event.target.dataset.player}`);
        }
        displayScore();
        return;
    }
    function displayScore () {
        score1Display = document.querySelector('#score1');
        score2Display = document.querySelector('#score2');
        score1Display.textContent = `Player 1: ${score1}`;
        score2Display.textContent = `Player 2: ${score2}`;
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
