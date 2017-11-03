
// LET'S GET STARTED
console.log('META+LAB UI Kit');

// Maps names of included libraries to their filepaths.
var includedDependencies = {};

function includeOnce(file, libraryName = '') {
    if(libraryName === '') {
        libraryName = file;
    }
    //If library is not included yet, then include it
    if(!(libraryName in includedDependencies)){
        let script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        // script.defer = true;

        document.head.appendChild(script);
        // Add it our global list of libraries.
        includedDependencies[libraryName] = file;
    }
}

includeOnce('../src/js/form.js');
includeOnce('../src/js/navbar.js');
includeOnce('../src/js/multiCarousel.js');
