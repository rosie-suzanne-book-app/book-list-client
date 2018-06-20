'use strict'



// Create a .render method to compile your Handlebars template.
Books.render = () => Handlebars.compile($('#book-view-template').text());


Books.loadAll = bookData => { // Moved to book.js
    bookData.sort((a, b) => (new Title(a)) - (new Title(b)))
    bookData.forEach(bookObject => Book.all.push(new Book(bookObject)))
    };

Books.fetchAll = callback => { // Moved to book.js
      $.get('${app.ENVIRONMENT.apiUrl}/api/v1/books')
        .then(results => {
          Books.loadAll(results)
            .then(callback)
            .catch(errorCallback);
        })
    };