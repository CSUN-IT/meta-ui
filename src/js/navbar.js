$(document).ready(function() {
    var navbar = $("#navbar");
    var sticky = $(navbar).offset().top;

    $(document).on('scroll', function() {
        makeNavbarSticky();
    });
    function makeNavbarSticky() {
        console.log(sticky);
        if (window.pageYOffset >= sticky) {
            $(navbar).addClass("sticky");
            console.log(window.pageYOffset);
        }
        else {
            $(navbar).removeClass("sticky");
        }
    }

    $(".nav__icon--right").click(function() {
        openNav();
    });

    function openNav() {
        $("#mySlidenav").width('100%');
        console.log("open clicked");
    }

    $(".closebtn").click(function() {
        closeNav();
    });

    function closeNav() {
        $("#mySlidenav").width(0);
        console.log("close clicked");
    }





    $('.navbar-select2').on('click',function(event){
        $('.nav--slider').show({right:'1000px'});
    });

    $(".nav--slider").hide();
    $('.nav--slider').on('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).toggle('.closebtn');
    });

});



