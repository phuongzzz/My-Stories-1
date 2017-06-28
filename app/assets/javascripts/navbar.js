$(document).ready(function() {
  var lastScrollTop = 0;
  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    if(st < lastScrollTop) {
      $('.navbar-brand').css('height', '110px');
    }
    else {
      $('.navbar-brand').css('height', '50px');
    }
    lastScrollTop = st;
  });
});
