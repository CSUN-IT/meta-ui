var slideIndex = 1;
var slides = document.getElementsByClassName("Slides");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function currentSlide(n) {
    slideIndex = n;

    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    $(slides[slideIndex-1]).toggle();
    dots[slideIndex-1].className += " active";
}

function showSlides(n) {
    // var slides = document.getElementsByClassName("Slides");
    // var dots = document.getElementsByClassName("dot");

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    slideIndex++;
    console.log(slideIndex);
    dotTimer();

}

function dotTimer() {
    setTimeout(showSlides, 15000); // Change image every 3 seconds
}