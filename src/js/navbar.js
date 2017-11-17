$(document).ready(function() {
    navbar = $('#navbar');
    var navCenter = $(".nav--center");
    var navTop = $(".nav--top");
    var sticky = $('.nav__brand').offset().top - 40;
    var parentWidth = $(".container").width();
    navCenter.width(parentWidth);
    navTop.width(parentWidth);

    $('.nav--slider').hide();
    $('.nav__btn').on('click', function(){
        navbar.css('z-index', '3');
        navbar.css('position', 'fixed');
        $('.nav--slider').toggle('.nav__btn', function(){
            $('.nav__btn').toggleClass('fa-bars fa-times');
        });
    });

    $(document).scroll(function() {
        makeNavbarSticky();
    });

    function makeNavbarSticky() {
        if (window.pageYOffset >= sticky) {
            navCenter.removeClass("nav--center");
            navCenter.addClass("nav--top");
            // $('.nav--top').css('background-color', '#FFFFFF');

        } else {
            navCenter.removeClass("nav--top");
            navCenter.addClass("nav--center");
        }
    }

});

