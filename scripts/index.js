'use strict';

var app = app || {};

let productionApiUrl = 'https://rosie-suzanne-booklist.herokuapp.com';
let developmentApiUrl = 'http://localhost:3000';

// DONE-TODO: Evaluates environment based on URL in browser. Is set to app.ENVIRONMENT.apiUrl.
module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

module.ENV = {
  apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
};

// TODO: Reveal containers of single-page app. Need to reveal only containers for selected page. Select page dynamically because this code needs to be used by each view.
module.showOnly = (selector) => {
  $(selector).show(); // Not sure if right
};

// TODO: Create .render method to compile Handlebars template
Book.render = () => Handlebars.compile($('#book-view-template').text()); // Not sure if right

// TODO: Enclose code in IIFE