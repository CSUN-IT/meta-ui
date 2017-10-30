var autoIndex = 0;
var i;
var slides = document.getElementsByClassName("carousel__slide");
displaySlides();

function displaySlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoIndex++;
    if (autoIndex > slides.length) {
        autoIndex = 1;
    }
    slides[autoIndex-1].style.display = "block";
    timer();
}

function timer() {
    setTimeout(displaySlides, 3000); // Change image every 3 seconds
}