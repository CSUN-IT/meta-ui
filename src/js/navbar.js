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

});



