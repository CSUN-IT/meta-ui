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