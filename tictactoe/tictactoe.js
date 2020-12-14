//CONST AND VARIABLES--------------------------------------------

const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('#reset');

//FUNCTIONS-------------------------------------------
const game = (() => {
    function setup () {
        for(i=0; i < 9; i++) {
            let gridCell = document.createElement('div');
            gridCell.id = `grid ${i}`;
            grid.appendChild(gridCell);
            console.log(`${gridCell.id}`);


        }
    }
    setup();
})();
//SCRIPT----------------------------------------------------