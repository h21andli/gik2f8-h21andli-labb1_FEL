const BookDetail = (bookDetail) => {
    let html = `<div>
                  id="bookDetail mb-4 mx-4 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700">
                ${bookDetail.author} - ${bookDetail.title} - ${bookDetail.coverImage} - ${bookDetail.pages} - ${bookDetail.releaseDate}
                </div>`;
    return html;
  };

