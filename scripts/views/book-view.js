'use strict';

/******** ONE BOOK ********/
/*Should include bookView.initIndexPage()*/

let bookView = {};

bookView.handleMainNav = () => {
  $('nav').on('click', '.tab', function (e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  })
};


bookView.initIndexPage = () => {
  $('.container').hide();
  $('.book-view').show();
  Book.all.forEach(() => $('#book'))
  module.bookView.initIndexPage();
}

// $(document).ready(function ())
// Book.fetchAll(bookView.initIndexPage);});