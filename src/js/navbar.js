//
$(document).ready(function () {
    $('.navbar-select').click(function () {
        $('.navbar-3').toggle();
    });
    $(".navbar-select2").click(function () {
        $(".navbar-3").hide();
    })
});


//dropdown navbar
$(function () {
    var bar = $('.navbar-1');
    var top = bar.css('top');
    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {
            bar.stop().css({
                'position': 'absolute'
            });
        }

        if ($(this).scrollTop() > 600) {
            bar.stop().css({
                'position': 'fixed'
            }).animate({
                'top': '0px',
                'height': '50px',
                'opacity': '1'
            }, 0);
        }
    });
});

function openNav() {
    document.getElementById('navbar-3rd').style.width = "100%";
    document.getElementById("navbar-2nd").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("navbar-3rd").style.width = "0";
    document.getElementById("navbar-2nd").style.marginRight = "0";
}
