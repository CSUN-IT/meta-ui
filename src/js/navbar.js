$(document).ready(function() {
    navbar = $('#navbar');
    var navCenter = $(".nav--center");
    var navTop = $(".nav--top");
    var sticky = $('.nav__brand').offset().top - 40;
    var parentWidth = $(".container").width();


    // Successfully knows if code has nav--center
    if($(navbar).find('.nav--center').length !== 0) {

        // DOES NOT ACTUALLY DELETE BACKGROUND ATTRIBUTE :(
        $(navbar).css({'background-color':''});

    }

    navCenter.width(parentWidth);
    navTop.width(parentWidth);

    $('.nav--slider').hide();
    $('.nav__btn').on('click', function(){
        navbar.css('z-index', '3');
        navbar.css('position', 'absolute');
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

        } else {
            navCenter.removeClass("nav--top");
            navCenter.addClass("nav--center");
        }
    }

});

