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