// CONSTANTS AND VARIABLE DECLARATIONS------------
var squaresPerSide = 8;
var grid = document.querySelector('.grid')
var div = document.querySelectorAll('.box');
var getInput = document.getElementById('getInput');
var submit = document.querySelector('.submit');
var resetButton = document.querySelector('.reset');
var squaresPerSide = 8;
var container = document.querySelector('.container');

// FUNCTIONS-----------------
function createDiv (boxSize) {
    div = document.createElement("div");
    div.classList.add('box');
    div.style.width = `${boxSize}px`;
    console.log(`boxsize pixels1: ${boxSize}`);
    console.log(`CONTAINER.clientWidth 1: ${container.clientWidth}`);
    
    div.style.height = `${boxSize}px`;
    return div;
};
function appendDiv (squaresPerSide) {
    console.log('appendDiv function called')
    console.log(`grid.clientWidth 0: ${grid.clientWidth}`);
    console.log(`CONTAINER.clientWidth 0: ${container.clientWidth}`);
    console.log(`clientHeight: ${container.clientHeight}`);

    let createDivNumber = 0;
    let boxSize = 0;
    if(container.clientWidth > container.clientHeight) {
        boxSize = (container.clientHeight)/squaresPerSide;
    }
    else{
        boxSize = (container.clientWidth)/squaresPerSide;
    };
    for (i=0; i < squaresPerSide; i++){
        for (j=0; j < squaresPerSide; j++){
            console.log(`boxSize0: ${boxSize}`);
            grid.appendChild(createDiv(boxSize ));
        
            // console.log(`CONTAINER.clientWidth***: ${container.clientWidth}`);
            // console.log(`grid.clientWidth 1: ${grid.clientWidth}`);
            
            createDivNumber++;
        };
    };
    console.log(`number of times createDiv function called: ${createDivNumber}`)
};
function reset () {
    console.log('reset function called');
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    };
    appendDiv(squaresPerSide);
};

// SCRIPT CODE---------------------
console.log('Javascript file loaded');
appendDiv(squaresPerSide);

getInput.addEventListener('submit', function (e) {
    
    e.preventDefault(); //this stops the default option of the submit button when it is clicked.

    squaresPerSide = document.querySelector('#numberofSquares').value;

    console.log('Input received');
    console.log(`squaresPerSide: ${squaresPerSide}`);

    if(squaresPerSide < 8 || squaresPerSide > 30) {
        window.alert('Input must be between 8-30.');
        return;
    }
    
    //CALL RESET FUNCTION AND SUBMIT NEW SQUARES PER SIDE
    reset();
});
resetButton.addEventListener('click', reset);

grid.addEventListener('mouseover', function(e){
    console.log('mouseover box active');
    if(e.target.matches('.box')){
        e.target.classList.add('active');
    }
});