'use strict';

/******** PAGE.JS ROUTING ********/


// Set up route to just / and call initIndexPage
Book.indexPage = callback => {
  $.get('http://localhost:3000')
    .then(results => {
      Book.initIndexPage(results);
      callback();
    })
};


// This might be better in book-view.js? Carries over the Book.loadLimited from book.js
Book.fetchPreview = callback => {
  $.get('http://localhost:3000/api/v1/books')
    .then(results => {
      Book.loadPreview(results);
      callback();
    })
};


Book.fetchOne = (id, callback) => {
  $.ajax({
    url: `http://localhost:3000/api/v1/books:id`,
    method: 'GET',
    data: {
      book_id: id,
    }
  })
    .then(results => {
      Book.loadOne(results);
      callback();
    })
};

// Book.prototype.postOne = function (callback) {
//     $.post(`http://localhostL:3000/api/v1/books`, {
//         title: this.title;
//         author: this.author;
//         isbn: this.isbn;
//         image_url: this.image_url;
//         description: this.description;
//     })
//     .then(result => {
//         Book.loadPreview(results);
//         callback();
//     })
// }

