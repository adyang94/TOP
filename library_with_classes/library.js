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

//FUNCTIONS-------------------------------------------------------
class book {
    //the object constructor
    constructor(title, author, numberOfPages) {
        this.title = title.value;
        this.author = author.value;
        this.numberOfPages = numberOfPages.value;
    }
    //send info to the displayBooks function to be displayed.
};
function addNewBook (event) {
    event.preventDefault();
    //Get info from input and send to book CONSTRUCTOR.
    newBook = new book(formTitle, formAuthor, formNumberOfPages);
    myLibrary.push(newBook); /*Adds new book object to the array.*/
    displayBooks();
};
function displayBooks () {
    //Will need some example books to display.
    //displayBooks iterates through every single book to display it.
    const books = document.querySelectorAll('.cards');
    const library = document.querySelector('.library');
    // Remove old cards
    books.forEach(book => library.removeChild(book));
    console.log(`Library Length: ${myLibrary.length}`);
    //Create new cards loop
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
        cardCheckboxLabel.textContent = "Read??";
        //add classes to card divs for CSS
        bookDiv.classList.add('cards');
        titleDiv.classList.add('title');
        authorDiv.classList.add('author');
        numberOfPagesDiv.classList.add('numberOfPages');
        cardCheckbox.classList.add('cardCheckbox');
        removeButton.classList.add('removeButton');
        //counter for array reference to remove
        removeButton.setAttribute('id', `${i}`);
        //remove button
        removeButton.addEventListener('click', (event) => {
            //array method
            console.log(`remove button clicked. ${event.srcElement.id}`);
            document.getElementsByClassName("cards)")
            myLibrary.splice(event.srcElement.id, 1);
            displayBooks();
        });
    }
};
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}
function changeReadStatus () {
    //Needs to be able to toggle the book's read status on the book's prototype instance
    console.log('FUNCTION CALLED: changeReadStatus');

};

//SCRIPT---------------------------------------------------------
//New book button
newBookButton.addEventListener('click', addNewBook);
displayBooks();
//Change read status button
