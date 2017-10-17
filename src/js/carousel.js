var index = 1;
var slides = document.getElementsByClassName("Slides");
var dots = document.getElementsByClassName("dot");
showSlides(index);

function currentSlide(n) {
    index = n;

    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    $(slides[index-1]).toggle();
    dots[index-1].className += " active";
}

function showSlides(n) {
    // var slides = document.getElementsByClassName("Slides");
    // var dots = document.getElementsByClassName("dot");

    if (n < 1) {
        index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        $(slides[i]).css('display',"none");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (index > slides.length) {
        index = 1;
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
    index++;
    console.log(index);
    dotTimer();

}

function dotTimer() {
    setTimeout(showSlides, 1000); // Change image every 3 seconds
}