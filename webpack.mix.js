const mix = require('laravel-mix');

var bowerPath = './node_modules';



mix.copy(`${bowerPath}/font-awesome/scss`, 'src/sass/vendor/font-awesome');
mix.copy(`${bowerPath}/font-awesome/fonts`, 'dist/fonts');

mix.js('src/js/meta-ui.js', 'dist/js')
   .sass('src/sass/meta-ui.scss', 'dist/css');


// Needed for Windows Users for yarn run dev
mix.setPublicPath('./');

