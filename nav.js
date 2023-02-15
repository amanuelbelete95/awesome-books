const list = document.querySelector('.nav-list');
const add = document.querySelector('.nav-add');
const contact = document.querySelector('.nav-contact');

const listBook = document.querySelector('.list-books');
const form = document.querySelector('.form');
const contactSection = document.querySelector('.contact');

list.addEventListener('click', () => {
  form.style.display = 'none';
  contactSection.style.display = 'none';
  listBook.style.display = 'flex';
  list.style.color = 'blue';
  add.style.color = 'black';
  contact.style.color = 'black';
});

add.addEventListener('click', () => {
  form.style.display = 'flex';
  contactSection.style.display = 'none';
  listBook.style.display = 'none';
  add.style.color = 'blue';
  list.style.color = 'black';
  contact.style.color = 'black';
});

contact.addEventListener('click', () => {
  form.style.display = 'none';
  contactSection.style.display = 'flex';
  listBook.style.display = 'none';
  contact.style.color = 'blue';
  list.style.color = 'black';
  list.style.color = 'black';
});
