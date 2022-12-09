const BookDetailBox = (book, positionX, positionY) => {
    let html = `<div id="bookDetail"
                class="w-96 h-48 p-5 rounded-lg absolute bg-emerald-50 flex justify-between" style="top:${positionY}; left:${positionX}">
                    <ul>
                    <li class="font-bold italic text-emerald-500" >${book.title}</li>
                    <li class="text-emerald-900">Author: ${book.author}</li>
                    <li class="text-emerald-900">Release date: ${book.releaseDate}</li>
                    <li class="text-emerald-900">Pages: ${book.pages}</li>
                    </ul>
                    <img src = "${book.coverImage}" class="text-emerald-900" alt= "Image not found">
                </div>`;
    return html;
  };