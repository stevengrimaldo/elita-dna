import $ from 'jquery';

$('.accordion__item-title').on('click', function () {
  $('.accordion__item--open .accordion__item-answer').slideUp(400);

  if (!$(this).parent().parent().hasClass('accordion__item--open')) {
    $('.accordion__item').removeClass('accordion__item--open');
    $(this).next().slideDown(400);
    $(this).parent().parent().addClass('accordion__item--open');
  } else {
    $(this).next().slideUp(400);
    $(this).parent().parent().removeClass('accordion__item--open');
  }
});
