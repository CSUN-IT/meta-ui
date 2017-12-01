$(document).ready(function(){
  var nav = $('.nav--sticky');
  var navOffset = nav.offset().top;
  nav.wrap('<div class="nav-container clearfix"></div>');
  $('.nav-container').width(nav.outerWidth());
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    if(scrollPos >= navOffset){
      nav.addClass('nav--show');
    }else {
      nav.removeClass('nav--show');
    }
  });
});


