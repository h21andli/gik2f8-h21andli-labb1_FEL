'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {

  let existingDetailBox = document.getElementById("bookDetail");

  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingDetailBox && bookList.length == 20 && existingDetailBox.remove();
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  

  const allBooks = document.querySelectorAll('.book-list__item');

  
  allBooks.forEach(book => {
    book.addEventListener('mouseover', (e) => renderBookDetails(e));
    })
  };

    async function renderBookDetails(e) {
    
    e.target.classList.remove('bg-white');
    e.target.classList.add('bg-emerald-100');

    const positionX = (e.clientX + 80) +'px';
    const positionY = e.clientY + 'px';

    const root = document.getElementById('root');
    let book = await getBookDetails(e.target.id);
    root.insertAdjacentHTML('beforeend', BookDetailBox(book, positionX, positionY));

    e.target.addEventListener('mouseout',(e) => {
      e.target.classList.remove('bg-emerald-100');
      e.target.classList.add('bg-white');
      let existingElement = document.getElementById('bookDetail');
      existingElement && existingElement.remove();
    });

    e.target.addEventListener('mousemove', (e) => {
      let li =document.getElementById('bookDetail');
      let left = (e.clientX + 50) + 'px';
      let top =e.clientY + 'px';
      li.style.left = left;
      li.style.top = top
    });
  }