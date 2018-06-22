'use strict';

/******** THIS FILE IS FOR ********
configuring
everything that is needed/shared by all views*/

var app = app || {};

let productionApiUrl = `https://rosie-suzanne-booklist.herokuapp.com`;
let developmentApiUrl = `http://localhost:3000`;

(function (module) {
  // DONE-TODO: Evaluates environment based on URL in browser. Is set to app.ENVIRONMENT.apiUrl.
  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENV = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.handleMainNav = () => {
    $('nav').on('click', '.tab', function (e) {
      e.preventDefault();
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn();
    })
  };

  // TODO: Reveal containers of single-page app. Need to reveal only containers for selected page. Select page dynamically because this code needs to be used by each view.
  module.showOnly = (selector) => {
    $(selector).show(); // Not sure if right
  };

  // DONE?(Change)-TODO: Create .render method to compile Handlebars template
  // Book.render = () => Handlebars.compile($('#book-view-template').text()); // Not sure if right

  module.render = (templateId, data) => {
    if (!module.bookViewTemplate) {
      module.bookViewTemplate = Handlebars.compile($($(`#${templateId}`)).text());
    }
    return module.bookViewTemplate(data);
  };
  // module. // Needs to be something
})(app)

// TODO: Enclose code in IIFE