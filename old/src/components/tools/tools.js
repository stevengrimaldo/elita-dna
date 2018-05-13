import $ from 'jquery';

$('.section').each(function () {
  if ($(this).next().hasClass('tools')) {
    $(this).addClass('section--double-bottom-padding');
  }
});
