const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const form = document.querySelector('#form-book');
import { pDate, list, addNew, contact, booksSection, formSection, contactSection, showForm, showContact, showBooks } from './modules/menu.js';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const period = hours >= 12 ? 'pm' : 'am';

// Rest of the code...

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showForm);
contact.addEventListener('click', showContact);

import {mainContainer} from './modules/books.js'
import Books from './modules/books.js';


const books = new Books();

// Access the methods of the Books class
books.createBook(books);
books.displayBooks();

// A function that is called when the user clicks the submit button
import { addBook } from './modules/addBook.js';
form.addEventListener('submit', addBook);

