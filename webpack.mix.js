const mix = require('laravel-mix');

mix.js('src/js/meta-ui.js', 'dist/js')
   .sass('src/sass/meta-ui.scss', 'dist/css');


// Needed for Windows Users for yarn run dev
mix.setPublicPath('./');

