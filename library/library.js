//CONSTANTS AND VARIABLES----------------------------------------
let myLibrary = [
    {
        title: "Hello World", //example
    }
];

let newBook;

const bookCards = document.querySelector('.cards');
const newBookButton = document.querySelector('#newBookButton');
const formAuthor = document.querySelector('#formAuthor');
const formNumberOfPages = document.querySelector('#formNumberOfPages');
const formTitle = document.querySelector('#formTitle');

//FUNCTIONS------------------------------------------------------
// class book {
//     constructor (title, author, numberOfPages) {
//         this.title = form.formTitle.value;
//         this.author = form.formAuthor.value;
//         this.numberOfPages = numberOfPages;
//         console.log(`this.title: ${this.title}`);
//     }
// }
function book (title, author, numberOfPages) {
    //the object constructor
    this.title = title.value;
    this.author = author.value;
    this.numberOfPages = numberOfPages.value;
    
    //send info to the displayBooks function to be displayed.
};
function addBookToLibrary () {
    //May not be needed.
};
function addNewBook () {
    //Get info from input and send to book constructor.
    newBook = new book(formTitle, formAuthor, formNumberOfPages);
    myLibrary.push(newBook);
    //Send book constructor and library array to displayBooks function

    //author, title, number of pages, whether it's been read.
    console.log('FUNCTION CALLED: addNewBook');
    console.log(`this.title: ${myLibrary[1].title}`);
    console.log(`this.author: ${myLibrary[1].author}`);
    console.log(`this.numberOfPages: ${myLibrary[1].numberOfPages}`);

};
function displayBooks () {
    //Will need some example books to display.
    //displayBooks iterates through every single book to display it.
    const books = document.querySelectorAll('.book');
    // Remove old cards
    books.forEach(book => displayBooks.removeChild(book));
    console.log(`Library Length: ${myLibrary.length}`);
    //Create new cards
    for(i=0; i < myLibrary.length; i++) {
        //create elements for the card.
        const library = document.querySelector('.library');
        const bookDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const numberOfPagesDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        const checkboxDiv = document.createElement('div');
        const cardCheckbox = document.createElement('input');
            cardCheckbox.setAttribute("type", "checkbox");
        const cardCheckboxLabel = document.createElement('label');
        //append elements to library.
        library.appendChild(bookDiv);
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(numberOfPagesDiv);
        bookDiv.appendChild(removeButton);
        
        bookDiv.appendChild(checkboxDiv);
        checkboxDiv.appendChild(cardCheckbox);
        checkboxDiv.appendChild(cardCheckboxLabel);

        //add information/text
        titleDiv.textContent = myLibrary[i].title;
        authorDiv.textContent = myLibrary[i].author;
        numberOfPagesDiv.textContent = myLibrary[i].numberOfPages;
        removeButton.textContent = "Remove";
        cardCheckboxLabel.textContent = "Read??"
        //add classes to card divs for CSS
        bookDiv.classList.add('bookDiv');
        titleDiv.classList.add('title');
        authorDiv.classList.add('author');
        numberOfPagesDiv.classList.add('numberOfPages');
        cardCheckbox.classList.add('cardCheckbox');
        removeButton.classList.add('removeButton');
    }
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
displayBooks();

//Remove book button
//Change read status button
