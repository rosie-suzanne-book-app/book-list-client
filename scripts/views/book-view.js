'use strict';

/******** ONE BOOK ********/
/*Should include bookView.initIndexPage()*/

let bookView = {};

bookView.handleMainNav = () => {
  $('nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  })};


function initIndexPage() {
  $('.container').hide();
  $('.book-view').show();
  
  module.bookView.initIndexPage();
}