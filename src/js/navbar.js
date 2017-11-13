$(document).ready(function() {
    $('.nav--slider').hide();
    $('.nav__btn').on('click', function(){
        $('#navbar').css('z-index', '3');
        $('.nav--slider').toggle('.nav__btn', function(){
                $('.nav__btn').toggleClass('fa-bars fa-times');
        });
    });

});