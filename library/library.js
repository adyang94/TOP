//CONSTANTS AND VARIABLES----------------------------------------
let myLibrary = [];

const bookCards = document.querySelector('.cards');
const newBookButton = document.querySelector('#newBookButton');
const authorInput = document.querySelector('#author');
const numberOfPagesInput = document.querySelector('#numberOfPages');
const readButton = document.querySelector('#read');

//FUNCTIONS------------------------------------------------------
function book(author, numberOfPages, read) {
    //the object constructor
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
};
function addBookToLibrary () {
    
};
function displayBooks () {
    //Will need some example books to display.
};
function addNewBook () {
    //author, title, number of pages, whether it's been read.
    console.log('FUNCTION CALLED: addNewBook');

};
function removeBook () {

};
function changeReadStatus () {
    //Needs to be able to toggle the book's read status on the book's prototype instance
    console.log('FUNCTION CALLED: changeReadStatus');

};

//SCRIPT---------------------------------------------------------
//New book button
newBookButton.addEventListener('click', addNewBook);
readButton.addEventListener('click', changeReadStatus);
//Remove book button
//Change read status button
