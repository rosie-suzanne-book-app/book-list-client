'use strict';

var app = app || {};

let productionApiUrl = 'https://rosie-suzanne-booklist.herokuapp.com';
let developmentApiUrl = 'http://localhost:3000';

// Create a property called isProduction which will evaluate your environment based on the URL in the browser. Use this property to set your app.ENVIRONMENT.apiUrl
// Checks the location protocol of the current URL

module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
};

module.showOnly = (selector) => {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
    $(selector).show();
}

// "Not necessary to render this way" -Sam (just a note to self)
module.render = (templateId, data) => {
    if (!module.taskTemplate) {
        module.taskTemplate = Handlebars.compile($($(`#${templateId}`)).text());
    }
    return module.taskTemplate(data);
};

bookView.handleMainNav = () => {
    $('nav').on('click', '.tab', function (e) {
        e.preventDefault();
        $('.tab-content').hide();
        $(`#${$(this).data('content')}`).fadeIn();
    });

    // Enclose code in an IIFE
    (function (module) {
        // Create a .showOnly method to reveal the containers of your single-page app.
        module.showOnly = () => {
            $('.nav').on('click', '.tab', function (e) {
                e.preventDefault();
                $('.tab-content').hide();
                $(`#${$(this).data('content')}`).fadeIn();
            });

            $('nav .tab:first').click();
        };

        // Create a .render method to compile your Handlebars template.
        Books.render = () => Handlebars.compile($('#book-view-template').text());

        module.Books = Books;
    })(app)





    // Define a constructor function called Book which takes an object literal as an argument.
    // Iterate over the argument's object keys to assign key/value pairs for creating a Book instance.
    // Enclose your code in an IFFE.
    function(module) {
        function Books(rawDataObj) {
            Object.keys(rawDataObj).forEach(key => {
                this[key] = rawDataObj[key]
            }, this);
        }
        module.Books = Books;
    }) (app)

    // Define a Book instance method called toHtml which, when invoked, compiles the Handlebars template with an id of book-list-template, and return the template with that instance's content.
    Books.prototype.toHtml = function () {
        var template = Handlebars.compile($('#book-list-template').text());
        this.alphabetize = parseInt((new Title(a) - new Title(b)));
        this.body = marked(this.body);

        return template(this);
    };

    // Define a static property on Book called all, and assign an empty array as it's value.
    Books.all = [];

    // Define a static method on Book called loadAll which takes rows as an argument, and sorts rows by title, maps over rows to create an array of Book instances, and then assigns the new array of Books to Book.all.
    Books.all = rows.map((info) => new Book(info));
    
    Books.loadAll = bookData => {
        bookData.sort((a, b) => (new Title(a)) - (new Title(b)))
        bookData.forEach(bookObject => Book.all.push(new Book(bookObject)))
    };

    // Books.loadall = rows => Books.all

    // Define a static method on Book called fetchAll which takes callback as an argument, and makes a request to the API at GET: /api/v1/books.
    // On success, pass the results to Book.loadAll, and then invoke the callback.
    // On failure, invoke the errorCallback (see details below)
    /api/v1/books
    Books.fetchAll = callback => {
        $.get('${app.ENVIRONMENT.apiUrl}/api/v1/books')
            .then(results => {
                Books.loadAll(results);
                callback();
            })
    };

    bookView.setTeasers = () => {
        $('.article-body *:nth-of-type(n+2)').hide();
        $('article').on('click', 'a.read-on', function (e) {
            e.preventDefault();
            if ($(this).text() === 'Read on →') {
                $(this).parent().find('*').fadeIn();
                $(this).html('Show Less &larr;');
            } else {
                $('body').animate({
                    scrollTop: ($(this).parent().offset().top)
                }, 200);
                $(this).html('Read on &rarr;');
                $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
            }
        });
    };

    // Create a Book View:
    bookView.create = () => {
        let book;
        $('#books').empty();

        book = new Book({
            title: $('#book-title').val(),
            author: $('#book-author').val(),
            body: $('#article-description').val(),
        });

        $('#books').append(book.toHtml());

        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    };

    bookView.submit = event => {
        event.preventDefault();
        let book = new Book({
            title: $('#book-title').val(),
            author: $('#book-author').val(),
            body: $('#article-description').val(),
        });

        book.insertRecord();
    }
    // Enclose your code in an IFFE.
    // Define a global variable called bookView and assign an empty object literal as its value.
    let bookView = {};

    // Define a method on bookView called initIndexPage which hides any element with a class of container, 
    // shows any element with a class of book-view, 
    // and maps over the Book instances stored in Book.all to render each and append them to an element with the id of book-list.
    bookView.initIndexPage = () => {
        // Books.all.forEach(article => {
        $('.container').hide();
        $('.book-view').show();
        Books.all.map(a => $('#book-list').append(a.toHtml()));

        bookView.handleMainNav();
        bookView.setTeasers();

        // Using jQuery's Document.ready functionality, invoke Book.fetchAll when the DOM has loaded,   =and pass bookView.initIndexPage as it's argument.
        $(document).ready(
            Books.fetchAll(bookView.initIndexPage)
        );