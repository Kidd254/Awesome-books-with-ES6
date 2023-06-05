
import { pDate, list, addNew, contact, booksSection, formSection, contactSection, showForm, showContact, showBooks } from './modules/menu.js';
import { DateTime } from './modules/Luxon.js';

const fullDate = document.querySelector('#date');
const date = DateTime.now();
fullDate.innerHTML = date.toLocaleString(DateTime.DATETIME_MED);

// Rest of the code...

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showForm);
contact.addEventListener('click', showContact);

//import {mainContainer} from './modules/books.js'



import {books} from './modules/addBook.js'

// Access the methods of the Books class
books.createBook(books);
books.displayBooks();

// A function that is called when the user clicks the submit button
import { addBook, form } from './modules/addBook.js';
form.addEventListener('submit', addBook);

