
// LET'S GET STARTED
console.log('META+LAB UI Kit');


//for nav bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("navbar-1").style.top = "0";
    } else {
        document.getElementsByClassName("navbar-1").style.top = "-50px";
    }
}

