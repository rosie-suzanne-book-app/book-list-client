'use strict';

let errorView = {};

module.errorView.initErrorPage(err); // This one line should be in error-view

function initErrorPage(err) {
  $('.container').hide();
  $('.error-view').show();
  $('#error-message').show();
  console.error(err);
  module.errorView.initErrorPage(err);
}