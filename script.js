/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  getBooks() {
    return this.books;
  }
}

const titleInput = document.querySelector('#book');
const author = document.querySelector('#author');
const add = document.querySelector('#add-btn');
const bookContainer = document.querySelector('.book-container');

function setValue(library) {
  const bookElements = library.books.map((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const thebook = document.createElement('p');
    thebook.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    bookElement.appendChild(thebook);
    bookElement.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
      const parentElement = removeBtn.closest('.book');
      parentElement.remove();
      library.removeBook(book);
      localStorage.setItem('storeddata', JSON.stringify(library.getBooks()));
    });

    return bookElement;
  });

  bookContainer.innerHTML = '';
  bookContainer.append(...bookElements);
}

function populateStorage() {
  let library1;
  if (localStorage.getItem('storeddata')) {
    library1 = new Library();
    const t = localStorage.getItem('storeddata');
    const data = JSON.parse(t);
    for (let i = 0; i < data.length; i += 1) {
      const bookData = new Book(data[i].title, data[i].author);
      library1.addBook(bookData);
    }
  } else {
    library1 = new Library();
  }
  const bookData = new Book(titleInput.value, author.value);
  titleInput.value = '';
  author.value = '';
  library1.addBook(bookData);
  localStorage.setItem('storeddata', JSON.stringify(library1.getBooks()));
  bookContainer.innerHTML = '';
  setValue(library1);
}

add.addEventListener('click', () => {
  populateStorage();
});

let library2;
if (localStorage.getItem('storeddata')) {
  library2 = new Library();
  const t = localStorage.getItem('storeddata');
  const data = JSON.parse(t);
  for (let i = 0; i < data.length; i += 1) {
    const bookData = new Book(data[i].title, data[i].author);
    library2.addBook(bookData);
  }
  setValue(library2);
}

const dateElement = document.getElementById('date');
const date = new Date();

const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
const year = date.getFullYear();
const time = date.toLocaleString('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
});

dateElement.textContent = `${month} ${day} ${year}, ${time}`;
