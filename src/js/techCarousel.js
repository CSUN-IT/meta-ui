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