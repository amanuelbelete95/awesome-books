const titleInput = document.querySelector('#book');
const author = document.querySelector('#author');
const add = document.querySelector('#add-btn');
const bookContainer = document.querySelector('.book-container');


add.addEventListener('click', () => {
  const newBook = document.createElement('p');
  const newAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');
  const hr = document.createElement('hr')

  bookContainer.appendChild(newBook);
  bookContainer.appendChild(newAuthor);
  bookContainer.appendChild(removeBtn);
  bookContainer.appendChild(hr); 

  newBook.innerHTML = titleInput.value;
  newAuthor.innerHTML = author.value;
  removeBtn.innerHTML = 'Remove';

  titleInput.value = '';
  author.value = '';

  removeBtn.addEventListener('click', ()=>{
    bookContainer.removeChild(newBook);
    bookContainer.removeChild(newAuthor);
    bookContainer.removeChild(removeBtn);
    bookContainer.removeChild(hr)
    hr
  });

})

