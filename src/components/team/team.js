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

$('.team__filters__filter').each(function () {
  $(this).find('.team__filters__filter__departments-department').each(function () {
    $(this).attr('data-department', $(this).children('span').text().toLowerCase().replace(/\s+/g, '-'));
  });
});

$('.team__filters__filter__departments-department').on('click', function () {
  $('.team__members__member').hide();
  if ($('.team__members__member').attr('data-location') === $(this).parent().prev().attr('data-location')) {
    $('.team__members__member[data-department="' + $(this).attr("data-department") + '"]').show();
  }
});
