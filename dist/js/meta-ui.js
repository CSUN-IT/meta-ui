function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
$(document).ready(function(){

  var navOffset = $('.nav--sticky').offset().top;
  $('.nav--sticky').wrap('<div class="nav-container"></div>');
  $('.nav-container').height($('.nav--sticky').outerHeight());
  $('.nav-container').width($('.nav--sticky').outerWidth());
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();

    if(scrollPos >= navOffset){
      $('.nav--sticky').addClass('nav--show');
    }else {
      $('.nav--sticky').removeClass('nav--show');
    }
  });

});


// var navbar = document.querySelector('.nav');

// window.addEventListener('scroll', function(){
//   var navRect  = navbar.getBoundingClientRect();
//   if (navRect.y < 0 ){
//     navbar.className = "nav nav--show nav--black";
//   }
// });


var index = 1;
var slides = $(".carousel > .carousel__slide");
var dots = document.getElementsByClassName("dot");

function currentSlide(n) {
    index = n;

    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot__active", "");
    }

    $(slides[index-1]).toggle();
    dots[index-1].className += " dot__active";
}

function showSlides(n) {
    if (n < 1) {
        index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot__active", "");
    }

    if (index > slides.length) {
        index = 1;
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " dot__active";
    index++;
    dotTimer();

}

function dotTimer() {
    setTimeout(showSlides, 15000); // Change image every 15 seconds
}

showSlides(index);

// The parameter in multiSlides() is the amount of images displayed at once
// multiTimer() also has multiSlides() and its parameter must also be changed
$(document).ready(function() {
    multiSlides(3);
});

function multiSlides(nShown) {
    // Check if this is the first time running the function.
    if(typeof multiSlides.slideIndex == 'undefined') {
        // Initialize the variable.
        multiSlides.slideIndex = 0;
    }

    let slides = $('.carousel--multi > .carousel__slide');
    var slideIndex = multiSlides.slideIndex + 1;

    // Do not display the other images
    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    // Clamps value to stay within number of slides
    if (nShown > slides.length) {
        nShown = slides.length;
    }

    else if (nShown < 0) {
        nShown = 0;
    }

    // Displays all images if there's not enough images to carousel
    if (slides.length <= nShown) {
        for (let i = 0; i < slides.length; i++) {
            $(slides[i]).toggle();
        }
    }

    else {
        // Determine which divs to show
        let positions = [];
        for (let i = 0; i < nShown; i++) {
            let j = (multiSlides.slideIndex + i) % slides.length;
            positions.push(j);
        }

        //Reorder the divs
        $("#"+positions[0]).toggle();
        for (let j = 1; j < positions.length; j++) {
            $("#"+positions[j]).insertAfter('#'+positions[j-1]).toggle();
        }

        // Never go over number of slides
        multiSlides.slideIndex = (multiSlides.slideIndex + 1) % slides.length;
    }
    multiTimer();
}

function multiTimer() {
    // Ensure that the multiSlides() parameter corresponds to the parameter
    // in the document.ready function
    let carousel = function () {
        multiSlides(3);
    };
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
var autoIndex = 0;
var i;
var autoSlides = $(".carousel--auto>.carousel__slide");

function displaySlides() {
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none";
    }
    autoIndex++;
    if (autoIndex > autoSlides.length) {
        autoIndex = 1;
    }
    autoSlides[autoIndex-1].style.display = "block";
    timer();
}

function timer() {
    setTimeout(displaySlides, 3000); // Change image every 3 seconds
}

displaySlides();