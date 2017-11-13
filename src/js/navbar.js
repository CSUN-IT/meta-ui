    // $(document).ready(function() {
//         $(this).scrollTop(0);
//     $(window).scroll(function () {
//         var p = $( ".nav--show" );
//         var position = p.position();
//
//         // $( "p:last" ).text( "left: " + position.left + ", top: " + position.top );
//
//         //if you hard code, then use console
//         //.log to determine when you want the
//         //nav bar to stick.
//         if ($(window).scrollTop() > position.top) {
//             $('.nav--station').addClass('sticky');
//         }
//         if ($(window).scrollTop() < position.top) {
//             $('.nav--station').removeClass('sticky');
//         }
//     });
// });

    // $('.navbar__slide').on('change', function(){
    //     $(this).toggle('.nav--slider');
    // });
// $(document).ready(function(){
//     $(".navbar-select2").click(function(){
//         $(".nav--slider").animate({right:'600px'});
//     })
// });

    $('.navbar-select2').on('click',function(event){
        $('.nav--slider').show({right:'1000px'});
    });

    $(".nav--slider").hide();
    $('.nav--slider').on('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).toggle('.closebtn');
    });

    // //sticky on top
    // var navbar = $(".nav--show");
    // var sticky = $(navbar).offset().top;
    //
    // $(document).on('scroll', function() {
    //     makeNavbarSticky();
    // });
    // function makeNavbarSticky() {
    //     console.log(sticky);
    //     if (window.pageYOffset >= sticky) {
    //         $(navbar).addClass("sticky");
    //         console.log(window.pageYOffset);
    //     }
    //     else {
    //         $(navbar).removeClass("sticky");
    //     }
    // }
    // $(".nav").hide();
    //to go to top
