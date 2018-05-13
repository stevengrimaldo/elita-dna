import $ from 'jquery';

$('.team__filters__filter').each(function () {
  $(this).find('.team__filters__filter-location').attr('data-location', $(this).find('.team__filters__filter-location').children('h4').text().toLowerCase().replace(/\s+/g, '-'));
  $(this).find('.team__filters__filter__departments-department').each(function () {
    $(this).attr('data-department', $(this).children('span').text().toLowerCase().replace(/\s+/g, '-'));
  });
});

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

$('.team__filters__filter__departments-department').on('click', function () {
  $('.team__filters__filter__departments-department').removeClass('team__filters__filter__departments-department--active');
  $('.team__members__member').hide();
  const currentLocation = $(this).parent().prev().attr('data-location');
  const currentDepartment = $(this).attr('data-department');
  $(this).addClass('team__filters__filter__departments-department--active');
  $('.team__members__member').each(function () {
    if ($(this).attr('data-location') === currentLocation && $(this).attr('data-department') === currentDepartment) {
      $(this).show();
    }
  });
  $('html, body').animate({
    scrollTop: $('.team__members').offset().top
  }, 500);
});

$('.team__members__member').hide();
$('.team__members__member[data-location="our-team"]').show();
$('.team__filters__filter-location[data-location="our-team"]').parent().detach().insertAfter('.team__filters-label');
$('.team__filters__filter-location[data-location="our-team"]').parent().addClass('team__filters__filter--open');
$('.team__filters__filter-location[data-location="our-team"]').next().show();
