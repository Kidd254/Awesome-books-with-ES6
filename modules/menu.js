export const pDate = document.querySelector('#date');
export const list = document.querySelector('.nav-sections:nth-child(1)');
export const addNew = document.querySelector('.nav-sections:nth-child(2)');
export const contact = document.querySelector('.nav-sections:nth-child(3)');
export const booksSection = document.querySelector('#all-awesome-books');
export const formSection = document.querySelector('#add-new-book');
export const contactSection = document.querySelector('#contact');

// Rest of the code...
export const showForm = () => {
  booksSection.classList.add('hide');
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');

  list.classList.remove('change-color');
  contact.classList.remove('change-color');
  addNew.classList.add('change-color');
};

export const showContact = () => {
  booksSection.classList.add('hide');
  formSection.classList.add('hide');
  contactSection.classList.remove('hide');

  list.classList.remove('change-color');
  addNew.classList.remove('change-color');
  contact.classList.add('change-color');
};

export const showBooks = () => {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');

  addNew.classList.remove('change-color');
  contact.classList.remove('change-color');
  list.classList.add('change-color');
};
