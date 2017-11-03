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