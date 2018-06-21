'use strict';

/******** THIS FILE SHOULD CONTAIN ********
Constructor Book(rawBookObj)
Book.all = []
render method: Book.prototype.toHTML()
Book.loadAll(rows)
Book.fetchAll(callback)
*/

// Create a .render method to compile your Handlebars template.
Book.all = [];

// DONE-TODO: Define constructor called Book, which takes in object literal
// Iterate over object keys and assign key/value pairs
function Book(rawBookObj) {
  Object.keys(rawBookObj).forEach(key => {
    this[key] = rawBookObj[key]
  }, this);
}


// Create a .render method to compile your Handlebars template.
Book.render = () => Handlebars.compile($('#book-view-template').text());

// TODO: Define book instance method 'toHtml' which compiles template with id of book-list-template
// This is a less DRY method. Strive to type line-by-line rather than copy-pasta.
Book.prototype.toHtml = function () {
  var template = Handlebars.compile($('#book-list-template').text());
  this.alphabetize = parseInt((new title(a) - new title(b)));

  return template(this);
};

// TODO: Define static method which takes rows as argument, // sorts rows by title
// maps over rows to create array of Book instances
// assigns the array of Book to Book.all
Book.loadAll = rows => {
  rows.sort((a, b) => (new title(a)) - (new title(b)))
  rows.map(bookObject => $('.book-view').append(bookObject.toHtml()));
}

// Define static method on Book
Book.fetchAll = callback => { // Moved to book.js
  $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
    .then(results => {
      Book.loadAll(results)
        .then(callback)
        .catch(errorCallback);
    })
};

// Gets all books for preview page, not including all book details
bookView.fetchLimited = callback => {
  $.get(`http://localhostL:3000/api/v1/books`)
    .then(results => {
      Book.loadAll(results);
      callback();
    })
}



// TODO: Enclose code in IIFE