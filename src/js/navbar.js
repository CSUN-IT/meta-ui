$(document).ready(function() {
    var navbar = $("#navbar");
    var navCenter = $(".nav--center");
    var sticky = $('.nav__brand').offset().top - 70;
    var parentWidth = $(".container").width();
    navCenter.width(parentWidth);


    // var navPosition = $('.nav__brand').offset().top;
    // var winPosition = $(window.pageYOffset);
    // var offset = navPosition - winPosition;

    $('.nav--slider').hide();
    $('.nav__btn').on('click', function(){
        $('#navbar').css('z-index', '3');
        $('#navbar').css('position', 'fixed');
        $('.nav--slider').toggle('.nav__btn', function(){
            $('.nav__btn').toggleClass('fa-bars fa-times');
            $('#navbar').css('position', 'absolute');
        });
    });

    $(document).scroll(function() {
        // console.log("win"+window.pageYOffset);
        // console.log("sti"+sticky);
        // $('.nav--center').css('min-height', offset);
        // var wOffset = window.pageYOffset;
        // var nOffset = 725 - wOffset;
        // console.log(nOffset);
        // $('.nav--center').css('min-height', nOffset);
        makeNavbarSticky();
    });

    function makeNavbarSticky() {
        if (window.pageYOffset >= sticky) {
            navCenter.removeClass("nav--center");
            // navbar.css('position', "fixed");
            navCenter.addClass("nav--top");
            // navbar.css('background-color', '#FFFFFF');


        } else {
            navCenter.removeClass("nav--top");
            navCenter.addClass("nav--center");
            // console.log("else");
        }
    }

});

