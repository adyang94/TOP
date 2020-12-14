//CONST AND VARIABLES--------------------------------------------

const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('#reset');

//FUNCTIONS-------------------------------------------
const checkwinner = (() => {
    //check column
    for(i = 0; i < 3; i++) {
        if(/* DATA SET NEEDED*/) {

        }
    }
    // check rows

    // check diagonals
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
                    checkwinner();
                    break;
                case 2:
                    turn = 1;
                    round++;
                    e.target.dataset.player = 2;
                    checkwinner();
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