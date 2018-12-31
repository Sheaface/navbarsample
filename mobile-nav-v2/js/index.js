var removeClass = true;

$('.menu-toggle').click(function () {

  $('.site-nav').toggleClass('site-nav--open');
  $(this).toggleClass('open');

  removeClass = false;
})

$('body').click(function () {
  if ($('.site-nav').hasClass('site-nav--open')) {
    if (removeClass) {
      $('.site-nav').removeClass('site-nav--open');
      $('.menu-toggle').removeClass('open');
    }
  }
  removeClass = true

})

console.log(test);