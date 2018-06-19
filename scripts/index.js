'use strict';

// Create a property called isProduction which will evaluate your environment based on the URL in the browser. Use this property to set your app.ENVIRONMENT.apiUrl

// Create a .showOnly method to reveal the containers of your single-page app.

// Create a .render method to compile your Handlebars template.

// Enclose code in an IIFE




// Define a constructor function called Book which takes an object literal as an argument.
// Iterate over the argument's object keys to assign key/value pairs for creating a Book instance.
// Enclose your code in an IFFE.


// Define a Book instance method called toHtml which, when invoked, compiles the Handlebars template with an id of book-list-template, and return the template with that instance's content.

// Define a static property on Book called all, and assign an empty array as it's value.

// Define a static method on Book called loadAll which takes rows as an argument, and sorts rows by title, maps over rows to create an array of Book instances, and then assigns the new array of Books to Book.all.

// Define a static method on Book called fetchAll which takes callback as an argument, and makes a request to the API at GET: /api/v1/books.
// On success, pass the results to Book.loadAll, and then invoke the callback.
// On failure, invoke the errorCallback (see details below)

// Create a Book View:
// Enclose your code in an IFFE.
// Define a global variable called bookView and assign an empty object literal as its value.
// Define a method on bookView called initIndexPage which hides any element with a class of container, shows any element with a class of book-view, and maps over the Book instances stored in Book.all to render each and append them to an element with the id of book-list.
// Using jQuery's Document.ready functionality, invoke Book.fetchAll when the DOM has loaded, and pass bookView.initIndexPage as it's argument.
