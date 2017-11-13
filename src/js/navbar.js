$(document).ready(function() {
    $('.nav--slider').hide();

    $('.nav__btn').on('click', function(event){
        $('#navbar').css('z-index', '3');
        console.log(this);
        $('.nav--slider').toggle('.nav__btn', function(){
                $('.nav__btn').toggleClass('fa-bars fa-times');
                console.log(this);


        });
    });

});