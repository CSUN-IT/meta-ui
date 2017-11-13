$(document).ready(function() {
    var navbar = $("#navbar");

    // Click on btn triggers openNav()
    $(".nav__btn").click(function() {
        openNav();
    });

    // JQuery to open navbar
    function openNav() {
        $("#mySlidenav").width('100%');
    }

    // Click on btn triggers closeNav()
    $(".btn__close").click(function() {
        closeNav();
    });

    // Closes the navbar
    function closeNav() {
        $("#mySlidenav").width(0);
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



