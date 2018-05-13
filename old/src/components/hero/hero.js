import $ from 'jQuery';

if ($('.section--hero').next().hasClass('section--slant')) {
  $('.section--hero').addClass('section--above-slant');
}
