//CONSTANTS AND VARIABLES----------------------------------------
let myLibrary = [];

const bookCards = document.querySelector('.cards');
const newBookButton = document.querySelector('#newBookButton');
const authorInput = document.querySelector('#author');
const numberOfPagesInput = document.querySelector('#numberOfPages');

//FUNCTIONS------------------------------------------------------
function book(title, author, numberOfPages, read) {
    //the object constructor
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    //send info to the displayBooks function to be displayed.
};
function addBookToLibrary () {
    //May not be needed.
};
function displayBooks () {
    //Will need some example books to display.
    //displayBooks iterates through every single book to display it.
    const books = document.querySelectorAll('.book');
    books.forEach(book => displayBooks.removeChild(book));

    for(i=0; i < myLibrary.length; i++) {
        //create elements for the card
        const library = document.querySelector('.libraryContainer');
        const bookDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const numberOfPagesDiv = document.createElement('div');
        const readButton = document.createElement('button');
        //append elements for the card to library container
        library.appendChild(bookDiv);
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(numberOfPagesDiv);
        bookDiv.appendChild(readButton)
    }
};
function addNewBook () {
    //Get info from input and send to book constructor.
    let newBook = new book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
    //Send book constructor and library array to displayBooks function

    //author, title, number of pages, whether it's been read.
    console.log('FUNCTION CALLED: addNewBook');

};
function removeBook () {

};l
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
