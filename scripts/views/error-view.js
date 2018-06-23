'use strict';

/******** ERROR ********/
/*Should include errorView.initErrorPage(err)*/

let errorView = {};

(function (module) {

  function errorPage(err) {
    $('.container').hide();
    $('.error-view').show();s
    $('#error-message').show();
    console.error(err);
    module.errorView.initErrorPage(err);
  }
})(errorView)