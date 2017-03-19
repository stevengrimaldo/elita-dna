import $ from 'jquery';

$('.team__filters__filter-location').on('click', function () {
  $('.team__filters__filter--open .team__filters__filter__departments').slideUp(400);

  if (!$(this).parent().hasClass('team__filters__filter--open')) {
    $('.team__filters__filter').removeClass('team__filters__filter--open');
    $(this).next().slideDown(400);
    $(this).parent().addClass('team__filters__filter--open');
  } else {
    $(this).next().slideUp(400);
    $(this).parent().removeClass('team__filters__filter--open');
  }
});
