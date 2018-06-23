'use strict';

/******** ERROR ********/
/*Should include errorView.initErrorPage(err)*/

let errorView = {};

(function (module) {

  function initErrorPage(err) {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').show();
    console.error(err);
  }

  module.initErrorPage(err);

})(errorView)