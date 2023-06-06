/* eslint-disable import/extensions */
import Books from './books.js';

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
export const form = document.querySelector('#form-book');

export const books = new Books();
export function addBook(event) {
  // If the inputs have values, then the form is submitted
  if (!titleInput.validity.valueMissing && !authorInput.validity.valueMissing) {
    event.preventDefault();
    // Create a new book
    const book = { title: titleInput.value, author: authorInput.value };
    // Save the book in the array and the local storage
    books.storage(book);
    // Reset the form
    form.reset();
    // Create the new book element
    books.createBook(book);
  }
}
