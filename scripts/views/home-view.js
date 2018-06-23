'use strict';

/******** ALL BOOKS ********/

let allBookView = {};

(function (module) {
  module.initIndexPage = () => {
  // Want to hide all containers and show only homepage/all books
    Book.all.forEach(eachBook => $('.book-list').append(eachBook.toHtml()));
  }

  module.allBookView = allBookView;
})(app)