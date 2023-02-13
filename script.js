const titleInput = document.querySelector('#book');
const author = document.querySelector('#author');
const add = document.querySelector('#add-btn');
const bookContainer = document.querySelector('.book-container');

function setValue() {
  const currentstoreddata = localStorage.getItem('storeddata');
  const parseddata = JSON.parse(currentstoreddata);

  for (let i = 0; i < parseddata.length; i += 1) {
    const newBook = document.createElement('p');
    const newAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const hr = document.createElement('hr');

    bookContainer.appendChild(newBook);
    bookContainer.appendChild(newAuthor);
    bookContainer.appendChild(removeBtn);
    bookContainer.appendChild(hr);

    newBook.innerHTML = parseddata[i].book;
    newAuthor.innerHTML = parseddata[i].author;
    removeBtn.innerHTML = 'Remove';

    removeBtn.addEventListener('click', () => {
      bookContainer.removeChild(newBook);
      bookContainer.removeChild(newAuthor);
      bookContainer.removeChild(removeBtn);
      bookContainer.removeChild(hr);
      parseddata.splice(i, 1);
      localStorage.setItem('storeddata', JSON.stringify(parseddata));
    });
  }
}

function populateStorage() {
  const currentstoreddata = localStorage.getItem('storeddata');
  const bookArray = JSON.parse(currentstoreddata);
  const bookData = {};
  let stringifydata = '';
  bookData.book = titleInput.value;
  bookData.author = author.value;

  titleInput.value = '';
  author.value = '';
  bookArray.push(bookData);
  stringifydata = JSON.stringify(bookArray);
  localStorage.setItem('storeddata', stringifydata);
  bookContainer.innerHTML = '';
  setValue();
}

add.addEventListener('click', () => {
  populateStorage();
});

if (localStorage.getItem('storeddata')) {
  setValue();
}
