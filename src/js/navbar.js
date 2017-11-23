$(document).ready(function(){

  var navOffset = $('.nav--sticky').offset().top;
  $('.nav--sticky').wrap('<div class="nav-container"></div>');
  $('.nav-container').height($('.nav--sticky').outerHeight());
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


// var navbar = document.querySelector('.nav');

// window.addEventListener('scroll', function(){
//   var navRect  = navbar.getBoundingClientRect();
//   if (navRect.y < 0 ){
//     navbar.className = "nav nav--show nav--black";
//   }
// });

