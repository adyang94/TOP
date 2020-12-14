//CONST AND VARIABLES--------------------------------------------

const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('#reset');

//FUNCTIONS-------------------------------------------

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
        }
        return {turn, setupDone, round, board};
    }
    const play = () => {
        if(setupDone){
            switch(turn) {
                case 1:
                    turn = 2;
                    round++;
                    //checkwinner function
                    break;
                case 2:
                    turn = 1;
                    round++;
                    //checkwinner function
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