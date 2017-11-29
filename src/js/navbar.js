$(document).ready(function(){

  var navOffset = $('.nav--sticky').offset().top;
  $('.nav--sticky').wrap('<div class="nav-container clearfix"></div>');
  $('.nav-container').width($('.nav--sticky').outerWidth());
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    if(scrollPos >= navOffset){
      $('.nav--sticky').addClass('nav--show');
    }else {
      $('.nav--sticky').removeClass('nav--show');
    }
  });

});


