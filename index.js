import {
  list, addNew, contact, showForm, showContact, showBooks,
} from './modules/menu.js';
import { DateTime } from './modules/Luxon.js';
import { books, addBook, form } from './modules/addBook.js';

const fullDate = document.querySelector('#date');
const date = DateTime.now();
fullDate.innerHTML = date.toLocaleString(DateTime.DATETIME_MED);

// Rest of the code...

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showForm);
contact.addEventListener('click', showContact);

// Access the methods of the Books class
books.createBook(books);
books.displayBooks();

form.addEventListener('submit', addBook);
