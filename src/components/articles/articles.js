import $ from 'jquery';

$('.articles__more').on('click', function () {
  let visible = $('.articles__article:visible').length + 6;
  console.log($('.articles__article:visible').length);
  $('.articles__article:lt(' + visible + ')').css('display', 'inline-block');
  if ($('.articles__article:visible').length === $('.articles__article').length) {
    $('.articles__more').hide();
  }
});

if ($('.articles__article').length > 6) {
  $('.articles__more').show();
}
